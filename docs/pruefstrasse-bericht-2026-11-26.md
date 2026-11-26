# Prüfstraße Gesamtlauf 26.11.2026 (Basis basis1, 42 Seiten × 4 Geräte)

Nichts behoben (Design der Unterseiten nur mit Heikos Abnahme). Alle Punkte per Messung bestätigt.

## Echte Mängel
1. **[hoch] Tablet 761–960 px, Startseite:** Kopfzeile fixed, Nav bricht (761–799 px) in 2 Zeilen, überlagert Kicker 55 px (home.css:23, :39). Fix: Nav nowrap/scrollbar bis 960 oder Hero-padding-top 120/170 px.
2. **[hoch] iPhone, /platinpreis-pro-gramm/ und /silberpreis-pro-gramm/:** Tabellen-3. Spalte „Ankaufs-Richtwert“ abgeschnitten (scrollWidth 459/475 vs 343), kein Scroll-Hinweis. Fix: Kopfzeilen kürzen oder Randverlauf.
3. **[mittel] Tablet, alle Rechnerseiten:** Betrag „X € – Y €“ (.result .big, style.css:95) und Pille „€ je Unze“ (.rate-val b, style.css:49) brechen um; linke Karte (.calc, style.css:70) gestreckt, ~124 px Leerraum. Fix: kleinere Schrift/nowrap, &nbsp;, `align-items:start`.
4. **[mittel] iPhone, /zahngold-wert/:** „2,00 g – 4,00 g“ bricht, einsames „g“. Fix: &nbsp; in grams() (app.js:13) + nowrap.
5. **[mittel] iPhone, Rechnerseiten bei Scroll 0:** fixierte Leiste #sticky-result (style.css:156–161) verdeckt „Anzahl“ um 29 px. Fix: später einblenden oder padding-bottom 56 px.
6. **[mittel] iPhone, Startseite:** Lücken ~182/186 px vor „Feingehalt“ und „Ehrlich gerechnet“ (home.css:181, :189, :120). Fix: clamp-Minimum 40–48 px, hellen Streifen entfernen.
7. **[niedrig] iPhone, /gold-verkaufen/, 100-euro-Münze:** Vergleichstabellen zu schmal/gequetscht (Prüferfund, nicht gemessen).

## Scheinfehler (kein Handlungsbedarf)
- ~80× 404 auf /api/price.php, „Demo-Kurs“, abweichender Widget-Kurs: lokale Vorschau ohne PHP.
- Hero-„Kanten“ (23×) und „Bild nicht geladen“ (3×): Messartefakte (Rechnerkarte, Lazy-Load).
- iPhone: Überschriften „zusammengeklebt“ und fehlendes Fett: Playwright-WebKit-Rendering variabler Fonts (computed Werte identisch mit Chrome). Mit echtem iPhone gegenprüfen.

## Nicht gesichtet
Prüfer sahen meist nur Teil 1–2 der Montagen; tiefere Seitenteile bei Bedarf nachprüfen.

## Behoben (Lauf nach3/nach5 gegen basis1)
Alle sieben Mängel behoben (home.css: Tablet-Nav 761–960 px, kleinere Abstände Handy; style.css: Betrag per cqi, Tabellen-Kopf, Pille, Karte; app.js: Zahnrechner-Wert, Sticky-Leiste ab 120 px Scroll, „31,1 g“). Desktop: 0 Alarme auf allen 42 Seiten. Tests 24/24. Offen/kosmetisch: Auswahlfeld in 100-euro-Münze am Handy abgeschnitten (bestand schon), „Ankaufs - Richtwert“-Bindestrich-Abstand, goldbarren-wert Desktop-Betrag zweizeilig (bestand schon, Desktop gesperrt).
