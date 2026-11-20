<?php
/**
 * Returns current precious metal prices in EUR per gram as JSON. Free sources only.
 *
 * Sources (used under their published terms, no scraping of web pages):
 * - Primary: gold-api.com (free, no key, commercial use permitted) – the displayed value.
 * - Check:   MetalCharts API (free key, commercial use permitted), USD converted with the official
 *            ECB reference rate. Compared only, never displayed. Optional but recommended.
 *
 * Model (built for volatile markets – a real price move is never blocked, at most briefly confirmed):
 * - The primary is refreshed every REFRESH seconds.
 * - a) Market move (gold/silver change since the last shown value): no upper limit. A move above
 *      CONFIRM_MOVE is shown as soon as it is confirmed by the check source, or by a later primary
 *      reading (>= CONFIRM_DELAY) that still shows a large move in the same direction, and in any
 *      case after CONFIRM_MAX. Only a one-off spike that disappears again is never shown.
 * - b) Source agreement (primary vs. check at the same moment, gold/silver only): real feeds differ
 *      by well under 1 %, a larger gap means a data error. The last shown value is then held for at
 *      most GAP_HOLD, after that the primary is used again. Platinum/palladium never block anything.
 * - Check calls: routinely every CHECK_EVERY (counted from the last call, successful or not), early
 *   on a large move or during a gap, never more than once per CHECK_MIN_GAP, never beyond
 *   CHECK_BUDGET per month (free tier: 200).
 * - On any failure the last good value is served with its timestamp. Never serves demo data.
 *
 * Setup: optional – copy config.sample.php to ../../goldwert-config.php (outside the web root)
 * or ./config.php and enter the free MetalCharts key. Requires PHP 8.
 */
declare(strict_types=1);

const REFRESH = 3600;             // primary refresh: hourly
const RETRY_AFTER = 15 * 60;      // pause after a failed or held refresh
const CHECK_EVERY = 6 * 3600;     // routine cross-check interval (~120 calls/month)
const CHECK_MIN_GAP = 3600;       // never more than one check call per hour
const CHECK_BUDGET = 180;         // max. check calls per month (free tier 200, 20 spare)
const CHECK_TRIGGER = 0.03;       // a move above 3 % triggers an early check
const CONFIRM_MOVE = 0.08;        // moves above 8 % need confirmation
const CONFIRM_DELAY = 10 * 60;    // second reading at least 10 minutes later
const CONFIRM_MAX = 3600;         // after 1 h a persistent move is shown in any case
const GAP_HOLD = 3600;            // hold the last value for at most 1 h while sources disagree
const ROUTINE_RESERVE = 150;      // above this many calls per month, only routine checks run
const TRUST_AFTER_GAP = 12 * 3600; // after an expired hold, disagreements are only logged for 12 h
const PGM_MAX_AGE = 48 * 3600;    // drop platinum/palladium if not refreshed for 2 days
const AGREE = ['gold' => 0.03, 'silver' => 0.05];
const MAIN = ['gold', 'silver'];
const OZ = 31.1034768;            // grams per troy ounce
// Plausibility windows in EUR per gram: catch unit/currency errors only, wide enough for any market.
const WINDOWS = ['gold' => [20, 1000], 'silver' => [0.2, 50], 'platinum' => [5, 300], 'palladium' => [5, 300]];
const SYMBOLS = ['gold' => 'XAU', 'silver' => 'XAG', 'platinum' => 'XPT', 'palladium' => 'XPD'];

$dataDir = __DIR__ . '/../data';
$cacheFile = $dataDir . '/price.json';
$stateFile = $dataDir . '/price-state.json';
$lockFile = $dataDir . '/price.lock';
$historyFile = $dataDir . '/price-history.json'; // own daily series for price-trend pages

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=600');
header('X-Robots-Tag: noindex');

function read_json(string $file): ?array {
    if (!is_file($file)) return null;
    $d = json_decode((string) @file_get_contents($file), true);
    return is_array($d) ? $d : null;
}

function write_json(string $file, array $data): bool {
    $tmp = $file . '.' . bin2hex(random_bytes(4)) . '.tmp';
    if (@file_put_contents($tmp, json_encode($data)) === false) {
        error_log('goldwert: cannot write ' . $tmp . ' (is data/ writable?)');
        return false;
    }
    if (!@rename($tmp, $file)) {
        @unlink($tmp);
        error_log('goldwert: cannot rename to ' . $file);
        return false;
    }
    return true;
}

function http_get(string $url, array $headers = []): ?string {
    $headers[] = 'User-Agent: goldrechner-price/1.0';
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 6,
            CURLOPT_CONNECTTIMEOUT => 3, CURLOPT_HTTPHEADER => $headers]);
        $body = curl_exec($ch);
        $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        return ($body !== false && $code === 200) ? (string) $body : null;
    }
    if (ini_get('allow_url_fopen')) {
        $ctx = stream_context_create(['http' => ['timeout' => 6, 'header' => implode("\r\n", $headers)]]);
        $body = @file_get_contents($url, false, $ctx);
        return $body === false ? null : $body;
    }
    error_log('goldwert: neither curl nor allow_url_fopen available');
    return null;
}

function serve(?array $cached): void {
    if ($cached && empty($cached['demo'])) {
        echo json_encode($cached);
    } else {
        http_response_code(503);
        header('Cache-Control: no-store');
        echo json_encode(['error' => 'no price available']);
    }
    exit;
}

function plausible(string $metal, $v): bool {
    [$lo, $hi] = WINDOWS[$metal];
    return is_numeric($v) && $v >= $lo && $v <= $hi;
}

/** Signed relative change per main metal (gold, silver) from $base to $p. */
function moves(array $p, array $base): array {
    $out = [];
    foreach (MAIN as $m) {
        $b = (float) ($base[$m] ?? 0);
        $out[$m] = ($b > 0 && isset($p[$m])) ? ((float) $p[$m] - $b) / $b : 0.0;
    }
    return $out;
}

function max_abs(array $moves): float {
    return $moves ? max(array_map('abs', $moves)) : 0.0;
}

/** gold-api.com: one call per metal, EUR per troy ounce. Gold and silver are required. */
function fetch_primary(): ?array {
    $out = [];
    foreach (SYMBOLS as $metal => $sym) {
        $d = json_decode((string) http_get('https://api.gold-api.com/price/' . $sym . '/EUR'), true);
        $ok = is_array($d) && ($d['symbol'] ?? '') === $sym && strtoupper((string) ($d['currency'] ?? '')) === 'EUR'
            && is_numeric($d['price'] ?? null);
        $g = $ok ? (float) $d['price'] / OZ : null;
        if ($g !== null && plausible($metal, $g)) {
            $out[$metal] = $g;
            if ($metal === 'gold') {
                $t = strtotime((string) ($d['updatedAt'] ?? ''));
                $out['updated'] = gmdate('c', $t ?: time());
            }
        } elseif (in_array($metal, MAIN, true)) {
            error_log('goldwert: gold-api.com ' . $sym . ' failed or implausible');
            return null;
        }
    }
    return $out;
}

/** Official ECB reference rate: USD per 1 EUR. */
function ecb_usd_rate(): ?float {
    $xml = http_get('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml');
    if ($xml && preg_match("/currency=['\"]USD['\"]\\s+rate=['\"]([0-9.]+)['\"]/", $xml, $m)) {
        $r = (float) $m[1];
        return ($r > 0.5 && $r < 2.5) ? $r : null;
    }
    return null;
}

/** Check source: MetalCharts USD/oz -> EUR/g via ECB rate (gold, silver). */
function fetch_check(string $key): ?array {
    $rate = ecb_usd_rate();   // fetched first: if the ECB is down, no MetalCharts call is wasted
    if (!$rate) return null;
    $d = json_decode((string) http_get('https://api.metalcharts.org/v1/prices',
        ['Authorization: Bearer ' . $key, 'Accept: application/json']), true);
    if (!is_array($d) || empty($d['success'])) return null;
    $out = [];
    foreach (MAIN as $metal) {
        $usd = $d['data'][SYMBOLS[$metal]]['price'] ?? null;
        if (!is_numeric($usd)) return null;
        $out[$metal] = (float) $usd / $rate / OZ;
        if (!plausible($metal, $out[$metal])) return null;
    }
    return $out;
}

/** Description of the first main metal where primary and check disagree beyond tolerance, or null. */
function disagreement(array $p, array $c): ?string {
    foreach (AGREE as $metal => $tol) {
        if (abs($p[$metal] - $c[$metal]) / $c[$metal] > $tol) {
            return sprintf('%s %.2f vs. check %.2f EUR/g', $metal, $p[$metal], $c[$metal]);
        }
    }
    return null;
}

$config = [];
foreach ([__DIR__ . '/../../goldwert-config.php', __DIR__ . '/config.php'] as $f) {
    if (is_file($f)) { $config = (array) require $f; break; }
}
$checkKey = (isset($config['metalcharts_key']) && is_string($config['metalcharts_key'])
    && !str_contains($config['metalcharts_key'], 'HIER-')) ? $config['metalcharts_key'] : '';

$loadCache = function () use ($cacheFile): ?array {
    $c = read_json($cacheFile);
    // demo data is for local preview only; a broken cache is treated as missing
    if ($c && (!empty($c['demo']) || (float) ($c['gold'] ?? 0) <= 0 || (float) ($c['silver'] ?? 0) <= 0
        || !isset($c['fetched'], $c['updated']))) return null;
    return $c;
};

$cached = $loadCache();
$state = read_json($stateFile) ?? [];
$now = time();

$isFresh = fn(?array $c): bool => $c !== null && $now - (int) $c['fetched'] < REFRESH;
$isHeld = fn(array $s): bool => isset($s['retry_at']) && $now < (int) $s['retry_at'];
if ($isFresh($cached) || $isHeld($state)) serve($cached);

// Only one process refreshes; the others serve the cached value.
$lock = @fopen($lockFile, 'c');
if (!$lock) {
    error_log('goldwert: cannot open lock file ' . $lockFile . ' (is data/ writable?)');
    serve($cached);
}
if (!flock($lock, LOCK_EX | LOCK_NB)) serve($cached);
// Another process may have finished a refresh just before we got the lock: re-read both files.
clearstatcache();
$cached = $loadCache();
$state = read_json($stateFile) ?? [];
if ($isFresh($cached) || $isHeld($state)) { flock($lock, LOCK_UN); serve($cached); }

/** Keep the last shown value, try again after RETRY_AFTER. */
$hold = function (string $why) use (&$state, $stateFile, $lock, $now, $cached): void {
    error_log('goldwert: ' . $why);
    $state['retry_at'] = $now + RETRY_AFTER;
    write_json($stateFile, $state);
    flock($lock, LOCK_UN);
    serve($cached);
};

$price = fetch_primary();
if (!$price) $hold('gold-api.com delivered no plausible value');

$move = $cached ? moves($price, $cached) : [];
$bigMove = max_abs($move);

// Expired gap: after GAP_HOLD the primary is used again and the gap is forgotten.
if (isset($state['gap_since']) && $now - (int) $state['gap_since'] >= GAP_HOLD) {
    error_log('goldwert: sources disagreed for ' . round(GAP_HOLD / 3600) . ' h, continuing with gold-api.com');
    unset($state['gap_since']);
    $state['trust_until'] = $now + TRUST_AFTER_GAP;   // no new hold right after an expired one
}
// Primary back at the last shown value: an earlier gap was a one-off error of the primary.
if (isset($state['gap_since']) && $bigMove <= CHECK_TRIGGER) unset($state['gap_since']);

// --- b) Source agreement ---
$month = gmdate('Y-m');
if (($state['check_month'] ?? '') !== $month) { $state['check_month'] = $month; $state['check_calls'] = 0; }
$sinceCheck = $now - (int) ($state['last_check'] ?? 0);
$gapActive = isset($state['gap_since']);
$checkDue = $checkKey !== '' && (int) ($state['check_calls'] ?? 0) < CHECK_BUDGET && $sinceCheck >= CHECK_MIN_GAP
    && (!$cached || $sinceCheck >= CHECK_EVERY
        || (($bigMove > CHECK_TRIGGER || $gapActive) && (int) ($state['check_calls'] ?? 0) < ROUTINE_RESERVE));
$confirmed = false;
$checkedAt = (int) ($cached['checked_at'] ?? 0);
if ($checkDue) {
    $state['check_calls'] = (int) ($state['check_calls'] ?? 0) + 1;
    $state['last_check'] = $now;
    write_json($stateFile, $state);   // count the call before making it
    $check = fetch_check($checkKey);
    if ($check) {
        $gap = disagreement($price, $check);
        if ($gap === null) {
            $confirmed = true;
            $checkedAt = $now;
            unset($state['gap_since']);
        } elseif ($cached && $now >= (int) ($state['trust_until'] ?? 0)) {
            $state['gap_since'] = $state['gap_since'] ?? $now;
            $hold('sources disagree, holding last value for up to 1 h: ' . $gap);
        } else {
            error_log('goldwert: sources disagree, using primary unchecked: ' . $gap);
        }
    } else {
        error_log('goldwert: check source unavailable, primary used without cross-check');
    }
} elseif ($gapActive && $cached) {
    // gap still open, next check not yet allowed (max. one per hour)
    $hold('sources disagreed at last check, waiting for next check');
}

// --- a) Market move: large moves are confirmed, never blocked ---
if ($cached && $bigMove > CONFIRM_MOVE && !$confirmed) {
    $pend = is_array($state['pending'] ?? null) ? $state['pending'] : null;
    $pendMove = ($pend && is_array($pend['move'] ?? null)) ? $pend['move'] : null;
    // still the same move: same direction and still large for the metal(s) that moved
    $same = $pendMove !== null;
    if ($same) {
        foreach (MAIN as $m) {
            $a = (float) ($pendMove[$m] ?? 0);
            if (abs($a) > CONFIRM_MOVE && !($a * $move[$m] > 0 && abs($move[$m]) > CONFIRM_MOVE / 2)) $same = false;
        }
    }
    $pendAge = $now - (int) ($pend['first_at'] ?? $now);
    if (!$same && $pend && $pendAge >= CONFIRM_MAX) {
        $same = true;   // the price has been far from the last value for over an hour: show it
    }
    if (!$same) {
        // keep the original start so the CONFIRM_MAX cap works even if readings jump around
        $state['pending'] = ['first_at' => (int) ($pend['first_at'] ?? $now), 'move' => $move];
        $hold(sprintf('large move %.1f %% since last value, waiting for a second reading', $bigMove * 100));
    }
    $age = $now - (int) ($pend['first_at'] ?? $now);
    if ($age < CONFIRM_DELAY) $hold('large move, second reading too early');
    error_log(sprintf('goldwert: large move %.1f %% confirmed after %d min', $bigMove * 100, intdiv($age, 60)));
} elseif ($cached && $bigMove > CONFIRM_MOVE) {
    error_log(sprintf('goldwert: large move %.1f %% confirmed by check source', $bigMove * 100));
}
unset($state['pending']);

// Platinum/palladium: optional; an old value is kept for at most PGM_MAX_AGE.
$out = [];
foreach (['platinum', 'palladium'] as $metal) {
    $at = (int) ($cached[$metal . '_at'] ?? 0);
    if (isset($price[$metal])) {
        $out[$metal] = round($price[$metal], 4);
        $out[$metal . '_at'] = $now;
    } elseif (isset($cached[$metal]) && $now - $at < PGM_MAX_AGE) {
        $out[$metal] = $cached[$metal];
        $out[$metal . '_at'] = $at;
    }
}
// A primary that keeps serving an old quote would otherwise look fresh (markets close on weekends).
$quoteAge = $now - (int) strtotime($price['updated']);
if ($quoteAge > 6 * 3600 && (int) gmdate('N', $now) <= 5) {
    error_log('goldwert: gold-api.com quote is ' . round($quoteAge / 3600) . ' h old on a weekday');
}
$out += [
    'gold' => round($price['gold'], 4),
    'silver' => round($price['silver'], 4),
    'currency' => 'EUR',
    'unit' => 'g',
    'updated' => $price['updated'],
    'fetched' => $now,
    'checked_at' => $checkedAt,
    'source' => 'gold-api.com',
];
write_json($cacheFile, $out);
// Daily history: one entry per quote day (Berlin time), the latest quote of the day wins.
// A history file that exists but cannot be read is never overwritten (no data loss).
$quoteTs = (int) strtotime($price['updated']) ?: $now;
$day = (new DateTime('@' . $quoteTs))->setTimezone(new DateTimeZone('Europe/Berlin'))->format('Y-m-d');
$history = is_file($historyFile) ? read_json($historyFile) : [];
if ($history === null) {
    error_log('goldwert: price-history.json unreadable, not updated');
} else {
    $entry = [];
    foreach (['gold', 'silver', 'platinum', 'palladium'] as $m) {
        if (isset($out[$m])) $entry[$m] = $out[$m];
    }
    $history[$day] = $entry;
    ksort($history);
    write_json($historyFile, $history);
}
unset($state['retry_at']);
write_json($stateFile, $state);
flock($lock, LOCK_UN);
echo json_encode($out);
