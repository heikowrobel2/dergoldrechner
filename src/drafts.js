// Builds two start-page design drafts into site/_entwurf/a and site/_entwurf/b (not linked, noindex).
const fs = require('fs');
const path = require('path');
const C = require('../site/assets/calc.js');
const pages = require('./pages.js');
const { heroArt, icon } = require('./art.js');

const OUT = path.join(__dirname, '..', 'site', '_entwurf');
const opts = (list, sel) => list.map((o) => `<option value="${o.id}"${o.id === sel ? ' selected' : ''}>${o.label}</option>`).join('');
const nav = pages.map((p) => `<a href="/${p.slug ? p.slug + '/' : ''}"${p.slug === '' ? ' aria-current="page"' : ''}>${p.nav}</a>`).join('');

const calcCard = (title = 'Gold-Wert berechnen') => `<form class="hcalc" data-calc="gold" novalidate>
<div>
<h2>${title}</h2>
<div class="two">
<div class="field"><label for="weight">Gewicht (g)</label><input id="weight" name="weight" type="text" inputmode="decimal" value="10" autocomplete="off"></div>
<div class="field"><label for="fineness">Feingehalt</label><select id="fineness" name="fineness">${opts(C.GOLD_FINENESS, '585')}</select></div>
</div>
</div>
<div id="result" aria-live="polite"><p>Kurs wird geladen …</p></div>
</form>`;

const cats = `<div class="cats">
<a class="cat" href="/585-gold-wert/">${icon.schmuck}<strong>Schmuck &amp; Altgold</strong><span>Ringe, Ketten, Armbänder – 333, 585, 750</span></a>
<a class="cat" href="/zahngold-wert/">${icon.zahngold}<strong>Zahngold</strong><span>Kronen, Brücken und Inlays</span></a>
<a class="cat" href="/goldmuenzen-wert/">${icon.muenzen}<strong>Goldmünzen</strong><span>Krügerrand, 20 Mark, Vreneli …</span></a>
<a class="cat" href="/750-gold-wert/">${icon.barren}<strong>Barren &amp; Feingold</strong><span>999er Gold, Barren jeder Größe</span></a>
<a class="cat" href="/silberrechner/">${icon.silber}<strong>Silber</strong><span>Besteck, Schmuck, Münzen</span></a>
</div>`;

const steps = `<div class="steps">
<div class="step"><h3>Wiegen</h3><p>Eine Küchenwaage reicht. Steine und Keramik möglichst abziehen.</p></div>
<div class="step"><h3>Stempel ablesen</h3><p>333, 585 oder 750 steht meist innen im Ring oder am Verschluss.</p></div>
<div class="step"><h3>Wert sehen</h3><p>Materialwert und Ankaufs-Richtwert erscheinen sofort – kostenlos und ohne Anmeldung.</p></div>
</div>`;

const footer = `<footer class="site-footer"><div class="wrap">
<nav aria-label="Rechtliches"><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a></nav>
<p class="disclaimer">Alle Ergebnisse sind unverbindliche Richtwerte auf Basis des angezeigten Edelmetallkurses. Wir kaufen kein Gold an und geben keine Anlageberatung.</p>
<p>Kursdaten: metals.dev · © 2026 dergoldrechner.de</p>
</div></footer>
<script src="/assets/calc.js"></script><script src="/assets/partners.js"></script><script src="/assets/app.js"></script>`;

const head = (title, cls) => `<!doctype html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>${title}</title><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/style.css"><link rel="stylesheet" href="/_entwurf/entwurf.css">
</head><body class="${cls}">
<header class="site-header"><div class="wrap">
<a class="logo" href="/"><span class="logo-mark" aria-hidden="true"></span>Goldwert-Rechner</a>
<nav class="nav" aria-label="Rechner">${nav}</nav>
<div class="price-bar" id="price-bar"></div>
</div></header>`;

const a = `${head('Entwurf A – Tresor', 'va')}
<section class="a-hero"><div class="wrap">
<div>
<span class="a-eyebrow">Kostenlos · ohne Anmeldung · ohne Cookies</span>
<h1>Was ist Ihr Gold <em>heute</em> wert?</h1>
<p class="lead">Gewicht und Stempel eingeben – sofort sehen, wie viel Ihr Schmuck, Zahngold oder Ihre Münzen nach aktuellem Börsenkurs wert sind.</p>
<div class="a-ticker">
<div class="a-chip"><small>Gold</small><b data-price="gold">–</b></div>
<div class="a-chip"><small>Silber</small><b data-price="silver">–</b></div>
<div class="a-chip"><small>Kursstand</small><b data-price="stamp" style="font-size:.95rem">–</b></div>
</div>
</div>
${calcCard()}
</div>
<div class="a-art" aria-hidden="true">${heroArt('a')}</div>
</section>
<div class="a-trust"><div class="wrap">
<div>${icon.frei}<span><b>Kostenlos</b>ohne Anmeldung</span></div>
<div>${icon.kurs}<span><b>Börsenkurs</b>bis zu 4× täglich</span></div>
<div>${icon.schloss}<span><b>Keine Daten</b>alles bleibt im Browser</span></div>
<div>${icon.waage}<span><b>Ehrliche Spanne</b>mit offener Annahme</span></div>
</div></div>
<main class="wrap">
<section><h2 class="section-title">Was möchten Sie bewerten?</h2><p class="section-lead">Für jede Art von Gold der passende Rechner.</p>${cats}</section>
<section><h2 class="section-title">In drei Schritten zum Goldwert</h2><p class="section-lead">Mehr braucht es nicht für eine erste Einschätzung.</p>${steps}</section>
</main>
${footer}</body></html>`;

const b = `${head('Entwurf B – Hell & warm', 'vb')}
<section class="b-hero"><div class="wrap">
<div>
<span class="b-price"><span class="dot" aria-hidden="true"></span>Gold <b data-price="gold">–</b> · Silber <b data-price="silver">–</b></span>
<h1>Was ist mein <em>Gold</em> wert?</h1>
<p class="lead">Der kostenlose Goldrechner für Schmuck, Zahngold, Münzen und Silber – mit aktuellem Börsenkurs und einer ehrlichen Spanne, was Ankäufer zahlen.</p>
<ul class="check"><li>Ohne Anmeldung, ohne Cookies</li><li>Kurs bis zu viermal täglich aktualisiert</li><li>Alle Annahmen offen gelegt</li></ul>
</div>
<div class="b-art" aria-hidden="true">${heroArt('b')}</div>
</div></section>
<main class="wrap">
<div class="b-calc-band">${calcCard('Jetzt Goldwert berechnen')}</div>
<section><h2 class="section-title">Was möchten Sie bewerten?</h2><p class="section-lead">Für jede Art von Gold der passende Rechner.</p>${cats}</section>
<section><h2 class="section-title">In drei Schritten zum Goldwert</h2>${steps}</section>
</main>
${footer}</body></html>`;

for (const [dir, html] of [['a', a], ['b', b]]) {
  fs.mkdirSync(path.join(OUT, dir), { recursive: true });
  fs.writeFileSync(path.join(OUT, dir, 'index.html'), html);
}
console.log('Drafts written to site/_entwurf/a and /b');
