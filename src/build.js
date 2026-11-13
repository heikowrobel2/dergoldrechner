// Static site generator for dergoldrechner.de. Run: node src/build.js
// Writes HTML into site/ (assets, api and data are maintained by hand).
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const C = require('../site/assets/calc.js');
const pages = require('./pages.js');
const legal = require('./legal.js');

const BASE = 'https://dergoldrechner.de';
const RELEASE = process.argv.includes('--release');
const V = new Date().toISOString().slice(0, 16).replace(/\D/g, ''); // cache-busting version for assets
const OUT = path.join(__dirname, '..', 'site');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const url = (slug) => `${BASE}/${slug ? slug + '/' : ''}`;
const href = (slug) => `/${slug ? slug + '/' : ''}`;

function options(list, selected) {
  return list.map((o) => `<option value="${o.id}"${o.id === selected ? ' selected' : ''}>${esc(o.label)}</option>`).join('');
}

// Live price of the metal this calculator is about (gold pages: gold, silver pages: silver, ...).
function rateLine(type) {
  const metals = type === 'pgm' ? [['platinum', 'Platin'], ['palladium', 'Palladium']]
    : (type === 'silver' || type === 'silvercoins') ? [['silver', 'Silber']] : [['gold', 'Gold']];
  return `<div class="rate">${metals.map(([k, name]) => `<p class="rate-row"><span class="k k-${k}">${name}</span>` +
    `<span class="rate-val"><b data-price="${k}oz">–</b><span class="rate-g" data-price="${k}"></span></span></p>`).join('')}` +
    `<p class="rate-live"><span class="dot"></span>Live-Kurs</p></div>`;
}

function mixRow(n, w, f) {
  return `<div class="mix-row"><div class="field"><label for="w${n}">Stück ${n} (g)</label>
<input id="w${n}" name="w${n}" type="text" inputmode="decimal" value="${w}" autocomplete="off" placeholder="z. B. 5"></div>
<div class="field"><label for="f${n}">Stempel</label><select id="f${n}" name="f${n}" aria-label="Stempel Stück ${n}">${options(C.GOLD_FINENESS, f)}</select></div></div>`;
}

function form(calc) {
  const weight = (v, help) => `<div class="field"><label for="weight">Gewicht in Gramm</label>
<input id="weight" name="weight" type="text" inputmode="decimal" value="${v}" autocomplete="off">
<small>${help}</small></div>`;
  let fields;
  if (calc.type === 'gold') {
    fields = weight(calc.weight, 'Mit einer Küchenwaage wiegen, Steine möglichst abziehen.') +
      `<div class="field"><label for="fineness">Feingehalt (Stempel)</label><select id="fineness" name="fineness">${options(C.GOLD_FINENESS, calc.preset)}</select></div>`;
  } else if (calc.type === 'silver') {
    fields = weight(calc.weight, 'Gesamtgewicht der Silberteile.') +
      `<div class="field"><label for="fineness">Feingehalt (Stempel)</label><select id="fineness" name="fineness">${options(C.SILVER_FINENESS, calc.preset)}</select></div>`;
  } else if (calc.type === 'coins') {
    fields = `<div class="field"><label for="coin">Münze</label><select id="coin" name="coin">${options(C.COINS, calc.preset || 'kruegerrand')}</select></div>
<div class="field"><label for="count">Anzahl</label><input id="count" name="count" type="number" min="1" step="1" value="1" inputmode="numeric"></div>`;
  } else if (calc.type === 'bars') {
    fields = `<div class="field"><label for="coin">Barren</label><select id="coin" name="coin">${options(C.GOLD_BARS, calc.preset || 'bar-100')}</select></div>
<div class="field"><label for="count">Anzahl</label><input id="count" name="count" type="number" min="1" step="1" value="${calc.count || 1}" inputmode="numeric"></div>`;
  } else if (calc.type === 'silvercoins') {
    fields = `<div class="field"><label for="coin">Münze oder Barren</label><select id="coin" name="coin">${options(C.SILVER_COINS, calc.preset || 'maple-ag')}</select></div>
<div class="field"><label for="count">Anzahl</label><input id="count" name="count" type="number" min="1" step="1" value="${calc.count || 1}" inputmode="numeric"></div>`;
  } else if (calc.type === 'pgm') {
    fields = `<div class="field"><label for="metal">Metall</label><select id="metal" name="metal"><option value="platinum"${calc.preset !== 'palladium' ? ' selected' : ''}>Platin</option><option value="palladium"${calc.preset === 'palladium' ? ' selected' : ''}>Palladium</option></select></div>` +
      weight(calc.weight, 'Gesamtgewicht der Stücke, Steine möglichst abziehen.') +
      `<div class="field"><label for="fineness">Feingehalt (Stempel)</label><select id="fineness" name="fineness">${options(C.PGM_FINENESS, calc.fineness || '950')}</select></div>`;
  } else if (calc.type === 'mix') {
    // several pieces, each with weight and stamp; more rows via button (app.js), empty rows are ignored
    const rows = (calc.rows || [['8', '585'], ['4', '333'], ['', '750']]).map(([w, f], i) => mixRow(i + 1, w, f)).join('');
    fields = `<div class="mix" data-max="12">${rows}</div>
<button type="button" class="mix-add">+ Weiteres Stück</button>
<small class="mix-help">Jedes Stück mit eigenem Stempel eintragen, leere Zeilen werden ignoriert.</small>`;
  } else if (calc.type === 'dental') {
    fields = weight(calc.weight, 'Gewicht aller Kronen, Brücken und Inlays zusammen.') +
      `<div class="field"><label for="alloy">Legierung</label><select id="alloy" name="alloy">${options(C.DENTAL_ALLOYS, 'unbekannt')}</select></div>
<div class="field"><label for="ceramic">Anteil Keramik/Zahnreste in %</label><input id="ceramic" name="ceramic" type="number" min="0" max="90" step="5" value="0" inputmode="numeric">
<small>Bei Kronen mit Keramikverblendung grob 20–40 % ansetzen.</small></div>`;
  }
  return `<div class="calc">
<form class="card" data-calc="${calc.type}" novalidate>
${rateLine(calc.type)}
<h2>Ihre Angaben</h2>
${fields}
<noscript><p class="stale">Bitte JavaScript aktivieren, damit der Rechner funktioniert.</p></noscript>
</form>
<div class="card result"><div id="result" aria-live="polite"><p>Kurs wird geladen …</p></div></div>
</div>
<div class="sticky-result" id="sticky-result" hidden></div>
<div class="cta" id="partners" hidden></div>`;
}

function exampleTable(ex) {
  const weights = ex.weights || '1,5,10,20,50';
  const metal = ex.metal === 'silver' ? 'Silber' : 'Gold';
  return `<section><h2>${ex.fineness}er ${metal}: Werte nach Gewicht</h2>
<div class="table-wrap"><table data-example="${ex.fineness}" data-metal="${ex.metal}" data-weights="${weights}">
<caption>Kurs wird geladen …</caption>
<thead><tr><th>Gewicht</th><th class="num col-fine">Fein${metal.toLowerCase()}</th><th class="num">Materialwert</th><th class="num">Ankaufs-Richtwert</th></tr></thead>
<tbody><tr><td colspan="4">Kurs wird geladen …</td></tr></tbody></table></div></section>`;
}

function priceTable(kind) {
  const pgm = (m, name) => C.PGM_FINENESS.filter((f) => ['950', '999'].includes(f.id)).map((f) => [m, f.id, `${name} ${f.id}er`]);
  const list = kind === 'silver' ? C.SILVER_FINENESS.map((f) => ['silver', f.id, f.label])
    : kind === 'pgm' ? [...pgm('platinum', 'Platin'), ...pgm('palladium', 'Palladium')]
    : [...C.GOLD_FINENESS.map((f) => ['gold', f.id, f.label]), ...C.SILVER_FINENESS.filter((f) => ['800', '925', '999'].includes(f.id)).map((f) => ['silver', f.id, f.label])];
  const heading = kind === 'silver' ? 'Aktueller Silberpreis pro Gramm' : kind === 'pgm' ? 'Aktueller Platin- und Palladiumpreis pro Gramm' : 'Aktueller Edelmetallpreis pro Gramm';
  const rows = list
    .map(([m, id, label]) => `<tr data-metal="${m}" data-fine="${id}"><td>${esc(label)}</td><td class="num">–</td><td class="num">–</td></tr>`).join('');
  return `<section><h2>${heading}</h2>
<div class="table-wrap"><table data-pricetable><caption>Kurs wird geladen …</caption>
<thead><tr><th>Feingehalt</th><th class="num">Materialwert je Gramm</th><th class="num">Ankaufs-Richtwert je Gramm</th></tr></thead>
<tbody>${rows}</tbody></table></div></section>`;
}

function coinTable() {
  const rows = C.COINS.map((c) => `<tr><td>${esc(c.label)}</td><td class="num">${c.fineG.toLocaleString('de-DE', { minimumFractionDigits: 3 })} g</td></tr>`).join('');
  return `<section><h2>Feingoldgehalt bekannter Goldmünzen</h2>
<div class="table-wrap"><table><thead><tr><th>Münze</th><th class="num">Feingold</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
}

function tiles() {
  const items = pages.filter((p) => p.slug).map((p) => `<a class="tile" href="${href(p.slug)}"><strong>${esc(p.nav)}</strong><span>${esc(p.tile || '')}</span></a>`).join('');
  return `<section><h2>Spezielle Rechner</h2><div class="tiles">${items}</div></section>`;
}

function faqBlock(faq, heading = true) {
  if (!faq || !faq.length) return '';
  return `<section>${heading ? '<h2>Häufige Fragen</h2>' : ''}${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</section>`;
}

// Breadcrumb trail: Startseite › (Goldmünzen ›) page
function trail(p) {
  const t = [['Startseite', '']];
  if (p.group === 'muenzen') t.push(['Goldmünzen', 'goldmuenzen-wert']);
  t.push([p.nav, p.slug]);
  return t;
}
function crumbs(p) {
  const t = trail(p);
  return `<nav class="crumbs" aria-label="Brotkrumen">${t.map(([n, s], i) => i === t.length - 1 ? `<span aria-current="page">${esc(n)}</span>` : `<a href="${href(s)}">${esc(n)}</a>`).join('<span class="sep" aria-hidden="true">›</span>')}</nav>`;
}

// Photo band on all subpages (approved by Heiko 12.11.2026).
const BAND_PAGES = { has: (slug) => slug !== '' };
// [image, object-position, zoom, zoom origin, light photo that needs darkening, phone: {pos, zoom, origin}]
// light: true = darker and warmer, 'strong' = for very light photos
const PHONE_PLAIN = { pos: '50% 50%', zoom: 1, origin: '50% 50%' }; // narrow box: zoom would put other coins in front
const BAND_FOCUS = {
  'maple-leaf-gold-wert': ['muenzen-alt', '50% 72%', 2.2, '85% 54%', false, PHONE_PLAIN],
  'kruegerrand-wert': ['muenzen-alt', '50% 46%', 2.2, '76% 46%', false, PHONE_PLAIN],
  'philharmoniker-gold-wert': ['muenzen-alt', '50% 69%', 2.2, '66% 69%', false, PHONE_PLAIN]
};
function bandImage(p) {
  if (BAND_FOCUS[p.slug]) return BAND_FOCUS[p.slug];
  if (p.slug === 'goldmuenzen-wert') return ['muenzen-alt', '60% 50%', 1, '50% 50%', true];
  if (p.group === 'muenzen') return ['muenzen-alt', '60% 50%', 1, '50% 50%', 'blur']; // coin not in the photo: no other coin may be legible
  if (/silber/.test(p.slug)) return ['silber-gabeln', '50% 42%', 1, '50% 50%', 'strong'];
  if (/platin/.test(p.slug)) return ['platin-barren', '50% 50%', 1, '50% 50%', 'cool', { pos: '95% 50%', zoom: 1, origin: '50% 50%' }]; // real palladium bar (Pexels 20979925), bar sits right of the text
  if (/barren|unze/.test(p.slug)) return ['barren', '50% 40%', 1, '50% 50%', 'soft'];
  if (/zahngold|altgold/.test(p.slug)) return ['altgold-tiegel', '55% 50%', 1, '50% 50%', 'bright'];
  return ['goldschmuck', '55% 55%', 1, '50% 50%', true];
}
function band(p) {
  const pick = bandImage(p);
  const [img, pos, zoom = 1, origin = '50% 50%', light = false, m = {}] = pick || [];
  const imgStyle = `--pos:${pos};--zoom:${zoom};--origin:${origin}` + (m.pos ? `;--mpos:${m.pos};--mzoom:${m.zoom};--morigin:${m.origin}` : '');
  const h1 = esc(p.h1).replace(/(\d+) (Karat|Unzen?|Gramm|Franken|Mark|Dukaten)\b/g, '$1&nbsp;$2')
    .replace(/(\d+)-(?=\p{L})/gu, '$1&#8209;'); // keep number and unit together ("14 Karat", "20-Franken")
  return `<section class="band">
` +
    (pick ? `<picture class="band-bg"><source type="image/webp" srcset="/assets/img/${img}-800.webp 800w, /assets/img/${img}-1600.webp 1600w" sizes="100vw">` +
    `<img src="/assets/img/${img}-1600.jpg" srcset="/assets/img/${img}-800.jpg 800w, /assets/img/${img}-1600.jpg 1600w" sizes="100vw" alt="" fetchpriority="high" decoding="async"${light ? ` class="${{ strong: 'tone-strong', blur: 'tone-blur', soft: 'tone-soft', bright: 'tone-bright', cool: 'tone-cool' }[light] || 'tone'}"` : ''} style="${imgStyle}"></picture>
` : '') +
    `<div class="wrap band-in">${crumbs(p)}<h1>${h1}</h1><p>${esc(p.intro)}</p></div>
</section>`;
}

function jsonLd(p) {
  const graph = p.calc === undefined && p.slug !== '' ? [] : [{
    '@type': 'WebApplication',
    name: p.h1.split(':')[0],
    url: url(p.slug),
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    inLanguage: 'de-DE',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  }];
  if (p.faq && p.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
    });
  }
  if (p.slug !== '') {
    graph.push({ '@type': 'BreadcrumbList', itemListElement: trail(p).map(([n, s], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: url(s) })) });
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

function layout(p, body, { noindex = false, scripts = true, canonical = true, home = false, top = '' } = {}) {
  const nav = pages.filter((x) => x.inNav !== false).map((x) => `<a href="${href(x.slug)}"${x.slug === p.slug ? ' aria-current="page"' : ''}>${esc(x.nav)}</a>`).join('');
  return `<!doctype html>
<html lang="de"${home ? ' class="no-js"' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
${canonical && !noindex ? `<link rel="canonical" href="${url(p.slug)}">` : ''}
${noindex ? '<meta name="robots" content="noindex, noarchive, follow">' : ''}
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url(p.slug)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="Der Goldrechner">
<meta property="og:image" content="${BASE}/assets/img/hero-ringe-1200.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="800">
<meta property="og:image:alt" content="Goldringe auf dunklem Grund – Der Goldrechner">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.svg?v=${V}" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/Fraunces-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/Inter-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/style.css?v=${V}">
${home ? `<link rel="stylesheet" href="/assets/home.css?v=${V}">` : ''}
${p.h1 && !noindex ? jsonLd(p) : ''}
</head>
<body${home ? ' class="home"' : top ? ' class="has-band"' : ''}>
<header class="site-header"><div class="wrap">
<a class="logo" href="/">Der <em>Goldrechner</em></a>
<nav class="nav" aria-label="Rechner">${nav}</nav>
</div></header>
${top}
${home ? body : `<main class="wrap">\n${body}\n</main>`}
<footer class="site-footer"><div class="wrap">
${home ? '<p class="h-wordmark">Der <em>Goldrechner</em></p>' : ''}
<nav aria-label="Alle Rechner" class="footer-calcs">${pages.filter((x) => x.group !== 'muenzen').map((x) => `<a href="${href(x.slug)}">${esc(x.nav)}</a>`).join('')}</nav>
<nav aria-label="Goldmünzen" class="footer-calcs"><span>Goldmünzen:</span>${pages.filter((x) => x.group === 'muenzen').map((x) => `<a href="${href(x.slug)}">${esc(x.nav)}</a>`).join('')}</nav>
<nav aria-label="Rechtliches"><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a></nav>
<p class="disclaimer">Alle Ergebnisse sind unverbindliche Richtwerte auf Basis des angezeigten Edelmetallkurses. Wir kaufen kein Gold an und geben keine Anlageberatung. Links mit dem Hinweis „Anzeige“ sind Werbelinks; kommt darüber ein Geschäft zustande, erhalten wir eventuell eine Provision.</p>
<p>© ${new Date().getFullYear()} dergoldrechner.de</p>
</div></footer>
${scripts ? `<script src="/assets/calc.js?v=${V}"></script>\n<script src="/assets/partners.js?v=${V}"></script>\n<script src="/assets/app.js?v=${V}"></script>` : ''}
${home ? `<script src="/assets/motion.js?v=${V}"></script>` : ''}
</body>
</html>
`;
}

const LASTMOD_FILE = path.join(__dirname, 'lastmod.json');
const lastmod = fs.existsSync(LASTMOD_FILE) ? JSON.parse(fs.readFileSync(LASTMOD_FILE, 'utf8')) : {};
const TODAY = new Date().toISOString().slice(0, 10);
const deDate = (iso) => iso.split('-').reverse().join('.');
function write(slug, html) {
  const dir = path.join(OUT, slug);
  fs.mkdirSync(dir, { recursive: true });
  // the page counts as changed only if its content changed (not the asset version or the date itself)
  const hash = crypto.createHash('sha1').update(html.replace(/\?v=\d+/g, '')).digest('hex');
  if (!lastmod[slug] || lastmod[slug].hash !== hash) lastmod[slug] = { hash, date: TODAY };
  fs.writeFileSync(path.join(dir, 'index.html'), html.replace('__LASTMOD__', deDate(lastmod[slug].date)));
}

const homeBody = require('./home.js');
for (const p of pages) {
  if (p.slug === '') {
    write('', layout(p, homeBody(faqBlock(p.faq, false)), { home: true }));
    continue;
  }
  const withBand = BAND_PAGES.has(p.slug);
  const body = `${withBand ? '' : `${crumbs(p)}\n<div class="hero"><h1>${esc(p.h1)}</h1><p>${esc(p.intro)}</p></div>`}
${p.calc ? form(p.calc) : ''}
${p.priceTable ? priceTable(p.priceTable) : ''}
${p.example ? exampleTable(p.example) : ''}
${p.coinTable ? coinTable() : ''}
${p.sections.map((s) => `<section><h2>${esc(s.h)}</h2>${s.html}</section>`).join('\n')}
${p.tiles ? tiles() : ''}
${faqBlock(p.faq)}
<p class="stand">Inhalt zuletzt aktualisiert am __LASTMOD__ · Kurse stündlich aktuell · <a href="/so-rechnen-wir/">So rechnen wir</a></p>`;
  write(p.slug, layout(p, body, { top: withBand ? band(p) : '' }));
}

for (const l of legal) {
  write(l.slug, layout(l, `<div class="hero"><h1>${esc(l.h1)}</h1></div><div class="legal">${l.html}</div>`, { noindex: true, scripts: false }));
}

const notFound = { slug: '404', nav: '', title: 'Seite nicht gefunden – dergoldrechner.de', description: 'Diese Seite gibt es nicht.' };
fs.writeFileSync(path.join(OUT, '404.html'), layout(notFound,
  `<div class="hero"><h1>Diese Seite gibt es nicht</h1><p>Vielleicht hilft einer unserer Rechner weiter:</p></div>${tiles()}`,
  { noindex: true, scripts: false, canonical: false }));

fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.map((p) => `  <url><loc>${url(p.slug)}</loc>${lastmod[p.slug] ? `<lastmod>${lastmod[p.slug].date}</lastmod>` : ''}</url>`).join('\n') + '\n</urlset>\n');
fs.writeFileSync(LASTMOD_FILE, JSON.stringify(lastmod, null, 1) + '\n');
// llms.txt: short map of the site for AI crawlers (llmstxt.org format)
const llmsGroup = (filter) => pages.filter(filter).map((p) => `- [${p.nav}](${url(p.slug)}): ${p.description}`).join('\n');
fs.writeFileSync(path.join(OUT, 'llms.txt'), `# Der Goldrechner (dergoldrechner.de)\n\n` +
  `> Kostenlose, unabhängige Rechner für den Wert von Altgold, Goldschmuck, Zahngold, Goldmünzen, Goldbarren, Silber, Platin und Palladium in Euro. ` +
  `Kurse stündlich aus dem internationalen Spotpreis, mit zweiter Quelle abgeglichen. Die Seite kauft kein Gold an und gibt keine verbindlichen Angebote ab; ` +
  `Ergebnisse sind unverbindliche Richtwerte. Methodik: ${BASE}/so-rechnen-wir/\n\n` +
  `## Rechner und Ratgeber\n\n${llmsGroup((p) => p.group !== 'muenzen' && p.slug !== 'so-rechnen-wir')}\n\n` +
  `## Goldmünzen\n\n${llmsGroup((p) => p.group === 'muenzen')}\n\n` +
  `## Über die Daten\n\n- [So rechnen wir](${BASE}/so-rechnen-wir/): Kursquellen, Formeln und Annahmen zu den Ankaufsspannen\n`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${BASE}/sitemap.xml\n`);

// Release check: no placeholders and no demo price may go live.
const problems = [];
for (const l of legal) {
  if (fs.readFileSync(path.join(OUT, l.slug, 'index.html'), 'utf8').includes('class="placeholder"')) problems.push(`/${l.slug}/ enthält noch Platzhalter`);
}
try {
  if (JSON.parse(fs.readFileSync(path.join(OUT, 'data', 'price.json'), 'utf8')).demo) problems.push('data/price.json ist noch der DEMO-Kurs (vor dem Hochladen löschen)');
} catch (e) { /* no price file is fine: price.php creates it */ }
if (problems.length) {
  console.warn('\nNOCH NICHT LIVE-FÄHIG:\n- ' + problems.join('\n- '));
  if (RELEASE) process.exit(1);
}

console.log(`Built ${pages.length} pages + ${legal.length} legal pages into ${OUT}`);
