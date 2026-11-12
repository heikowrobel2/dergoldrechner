// Start page body (editorial, light). Used by build.js for slug ''.
const C = require('../site/assets/calc.js');

const opts = (list, sel) => list.map((o) => `<option value="${o.id}"${o.id === sel ? ' selected' : ''}>${o.label}</option>`).join('');
const pic = (name, alt, sizes, cls = '', eager = false) => `<picture class="${cls}">
<source type="image/webp" srcset="/assets/img/${name}-800.webp 800w, /assets/img/${name}-1600.webp 1600w" sizes="${sizes}">
<img src="/assets/img/${name}-1600.jpg" srcset="/assets/img/${name}-800.jpg 800w, /assets/img/${name}-1600.jpg 1600w" sizes="${sizes}" alt="${alt}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
</picture>`;

const arrow = '<svg class="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

module.exports = function homeBody(faqHtml) {
  const fin = [['333', '8 Karat', 33.3], ['585', '14 Karat', 58.5], ['750', '18 Karat', 75], ['999', '24 Karat', 99.9]];
  return `
<section class="h-hero">
  <picture class="h-hero-bg" aria-hidden="true">
    <source type="image/webp" srcset="/assets/img/hero-ringe-1200.webp 1200w, /assets/img/hero-ringe-1920.webp 1920w, /assets/img/hero-ringe-2400.webp 2400w" sizes="120vw">
    <img src="/assets/img/hero-ringe-1920.jpg" srcset="/assets/img/hero-ringe-1200.jpg 1200w, /assets/img/hero-ringe-1920.jpg 1920w, /assets/img/hero-ringe-2400.jpg 2400w" sizes="120vw" alt="" fetchpriority="high" decoding="async">
  </picture>
  <div class="wrap h-hero-grid">
    <div class="h-hero-text">
      <h1 class="h-title"><span class="h-eyebrow h-h1-kicker">Goldrechner<span class="hide-sm"> · kostenlos · ohne Anmeldung</span></span> <span class="line"><span>Was ist Ihr Gold</span></span> <span class="line"><span><em>heute</em> wert?</span></span></h1>
      <p class="h-lead reveal">Gewicht eingeben, Stempel wählen – und sofort sehen, was Schmuck, Zahngold oder Münzen nach aktuellem Börsenkurs wert sind.</p>
      <p class="h-live reveal"><span class="live"><span class="dot"></span>Live</span><span class="m"><span class="k k-gold">Gold</span><b data-price="goldoz">–</b> <small data-price="gold"></small></span><span class="sep">·</span><span class="m"><span class="k k-silver">Silber</span><b data-price="silveroz">–</b> <small data-price="silver"></small></span></p>
    </div>
    <form class="h-calc reveal" id="rechner" data-calc="gold" novalidate>
      <p class="h-calc-title">Jetzt berechnen</p>
      <div class="h-fields">
        <div class="field"><label for="weight">Gewicht</label><div class="unit"><input id="weight" name="weight" type="text" inputmode="decimal" value="10" autocomplete="off"><span>g</span></div></div>
        <div class="field"><label for="fineness">Feingehalt</label><select id="fineness" name="fineness">${opts(C.GOLD_FINENESS, '585')}</select></div>
      </div>
      <div id="result" class="h-result" aria-live="polite"><p>Kurs wird geladen …</p></div>
    </form>
  </div>
</section>

<div class="h-marquee" aria-hidden="true"><div class="h-marquee-track">
  ${Array.from({ length: 2 }).map(() => `<span>Gold <b data-price="goldoz">–</b> · <b data-price="gold">–</b></span><i>✦</i><span>Silber <b data-price="silveroz">–</b> · <b data-price="silver">–</b></span><i>✦</i><span>333 · 585 · 750 · 999</span><i>✦</i><span>Kostenlos &amp; ohne Anmeldung</span><i>✦</i><span>Goldwert in Sekunden berechnen</span><i>✦</i>`).join('')}
</div></div>

<main>
<section class="wrap h-section">
  <div class="h-head reveal"><p class="h-kicker">Rechner</p><h2>Was möchten Sie bewerten?</h2></div>
  <div class="h-cats">
    <a class="h-cat h-cat-lg reveal" href="/585-gold-wert/">${pic('goldschmuck', 'Goldring, Kettenarmband und Armreif auf hellem Stoff', '(max-width: 900px) 100vw, 50vw')}<span class="h-cat-label"><b>Schmuck &amp; Altgold</b><small>333 · 585 · 750</small>${arrow}</span></a>
    <a class="h-cat reveal" href="/zahngold-wert/">${pic('altgold-tiegel', 'Altgold wird im Tiegel mit der Flamme geschmolzen', '(max-width: 900px) 50vw, 25vw')}<span class="h-cat-label"><b>Zahngold</b><small>Kronen, Brücken, Bruchgold</small>${arrow}</span></a>
    <a class="h-cat reveal" href="/goldmuenzen-wert/">${pic('muenzen-alt', 'Krügerrand, Maple Leaf und Wiener Philharmoniker auf schwarzem Grund', '(max-width: 900px) 50vw, 25vw')}<span class="h-cat-label"><b>Goldmünzen</b><small>Krügerrand, 20 Mark …</small>${arrow}</span></a>
    <a class="h-cat h-cat-barren reveal" href="/goldbarren-wert/">${pic('barren', 'Feingoldbarren mit Prägung', '(max-width: 900px) 50vw, 25vw')}<span class="h-cat-label"><b>Barren</b><small>Feingold 999,9</small>${arrow}</span></a>
    <a class="h-cat reveal" href="/silberrechner/">${pic('silber-gabeln', 'Silbergabeln mit langen Schatten', '(max-width: 900px) 50vw, 25vw')}<span class="h-cat-label"><b>Silber</b><small>Besteck, Schmuck</small>${arrow}</span></a>
  </div>
  <p class="h-more reveal">Gold verkaufen: <a href="/gold-verkaufen/">Ratgeber Gold verkaufen</a> · <a href="/schmuck-verkaufen/">Goldschmuck verkaufen</a> · <a href="/altgold-verkaufen/">Altgold-Rechner für mehrere Stücke</a> · <a href="/goldankauf-rechner/">Goldankauf-Rechner</a></p>
  <p class="h-more reveal">Preise und weitere Rechner: <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a> · <a href="/goldpreis-pro-unze/">Goldpreis pro Unze</a> · <a href="/goldbarren-wert/">Goldbarren</a> · <a href="/kruegerrand-wert/">Krügerrand</a> · <a href="/333-gold-wert/">333er Gold</a> · <a href="/750-gold-wert/">750er Gold</a> · <a href="/silberbesteck-wert/">Silberbesteck</a> · <a href="/silbermuenzen-wert/">Silbermünzen</a> · <a href="/silberpreis-pro-gramm/">Silberpreis pro Gramm</a> · <a href="/silber-verkaufen/">Silber verkaufen</a> · <a href="/platinpreis-pro-gramm/">Platinpreis</a> · <a href="/platin-verkaufen/">Platin verkaufen</a></p>
  <p class="h-more reveal">Goldmünzen: <a href="/kruegerrand-wert/">Krügerrand</a> · <a href="/maple-leaf-gold-wert/">Maple Leaf</a> · <a href="/philharmoniker-gold-wert/">Wiener Philharmoniker</a> · <a href="/american-eagle-gold-wert/">American Eagle</a> · <a href="/britannia-gold-wert/">Britannia</a> · <a href="/kaenguru-gold-wert/">Känguru</a> · <a href="/vreneli-wert/">Vreneli</a> · <a href="/20-mark-gold-wert/">20 Mark</a> · <a href="/sovereign-gold-wert/">Sovereign</a> · <a href="/dukat-gold-wert/">Dukaten</a></p>
</section>

<section class="wrap h-section h-steps">
  <div class="h-head reveal"><p class="h-kicker">So geht's</p><h2>Drei Schritte zum Goldwert</h2></div>
  <ol>
    <li class="reveal"><span class="h-num">01</span><h3>Wiegen</h3><p>Eine Küchenwaage reicht. Steine und Keramik möglichst abziehen.</p></li>
    <li class="reveal"><span class="h-num">02</span><h3>Stempel lesen</h3><p>333, 585 oder 750 steht meist innen im Ring oder am Verschluss.</p></li>
    <li class="reveal"><span class="h-num">03</span><h3>Wert sehen</h3><p>Materialwert und Ankaufs-Richtwert erscheinen sofort – mit offener Annahme.</p></li>
  </ol>
</section>

<section class="h-film" aria-label="Altgold wird eingeschmolzen">
  <video class="h-film-video" autoplay muted loop playsinline preload="none" poster="/assets/video/altgold-schmelzen-poster.jpg" aria-hidden="true">
    <source src="/assets/video/altgold-schmelzen.mp4" type="video/mp4">
  </video>
  <div class="wrap h-film-text">
    <p class="h-kicker reveal">Altgold</p>
    <p class="h-film-line reveal">Jedes Gramm<br><em>zählt.</em></p>
    <p class="h-film-sub reveal">Auch Kleinteile, Bruchgold und alte Zahnkronen haben einen echten Materialwert.</p>
    <a class="h-btn reveal" href="/zahngold-wert/">Zahngold berechnen ${arrow}</a>
  </div>
  <div hidden>
  </div>
</section>

<section class="h-fine">
  <div class="wrap">
    <div class="h-head reveal"><p class="h-kicker">Feingehalt</p><h2>Wie viel Gold steckt drin?</h2><p class="h-sub">Die Zahl im Stempel nennt den Goldanteil in Tausendsteln.</p></div>
    <div class="h-fine-grid">
      ${fin.map(([f, k, pct]) => `<a class="h-fine-item reveal" href="${f === '999' ? '#rechner' : '/' + f + '-gold-wert/'}">
        <span class="h-fine-num" data-count="${f}">${f}</span>
        <span class="h-fine-bar"><span style="--pv:${pct / 100}"></span></span>
        <span class="h-fine-meta"><b>${pct.toLocaleString('de-DE')} % Gold</b>${k}</span>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="wrap h-section h-trust">
  <div class="h-head reveal"><p class="h-kicker">Ehrlich gerechnet</p><h2>Ein Richtwert, kein Lockangebot.</h2></div>
  <div class="h-trust-grid">
    <div class="reveal"><span class="h-stat">4×</span><h3>täglich aktueller Kurs</h3><p>Der Gold-Rechner nutzt den Börsenkurs für Feingold und Feinsilber in Euro. Unter jedem Ergebnis steht, von wann er ist.</p></div>
    <div class="reveal"><span class="h-stat">2</span><h3>Werte statt einer Fantasiezahl</h3><p>Sie sehen den Materialwert und getrennt davon eine Spanne, was Ankäufer erfahrungsgemäß zahlen – samt der Annahme dahinter.</p></div>
    <div class="reveal"><span class="h-stat">0</span><h3>Cookies und Tracking</h3><p>Der Goldwert wird direkt in Ihrem Browser berechnet. Geladen wird nur der aktuelle Kurs – Ihre Eingaben werden nicht übertragen.</p></div>
  </div>
</section>

<section class="wrap h-section h-faq">
  <div class="h-head reveal"><p class="h-kicker">Fragen</p><h2>Häufig gefragt</h2></div>
  ${faqHtml}
</section>
</main>`;
};
