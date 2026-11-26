# Prüfstraße Neue Seiten 26.11.2026 (Lauf neu1, 16 Seiten × 4 Geräte)

Bilder/Montagen: `render/pruefstrasse/neu1/` (Montagen, Bilder, Diffs). Nichts behoben. Gemessen mit Playwright in 11 Breiten (320–1440) + Bildprüfer (Sonnet, 20 Montagen gesehen).
Neu: 21/22-karat-gold-preis, 925/800/835-silber-wert, maria-theresien-taler-wert, 10-euro-, 5-dm-, 10-dm-silbermuenzen-wert, schilling-silbermuenzen-wert. Geändert: vreneli, american-eagle, dukat, goldbarren (Kurz gesagt). Referenz: silberrechner, 750-gold-wert.

## Echte Mängel
1. **[hoch] 5-dm-muenzen-wert, iPhone/Android 412:** Wert-Tabelle (4 Spalten) zu breit (scrollWidth 405 vs 343/380), Spalte „Silberwert heute“ abgeschnitten, kein Scroll-Hinweis. Fix: Kopfzeilen kürzen/Zellen schmaler oder Randverlauf (.table-wrap).
2. **[mittel] 10-dm-silbermuenzen-wert, iPhone:** Tabelle 350 vs 343, Werte bündig am Rand, Zellen „625er Silber, 15,5 g“ in 3 Zeilen. Gleiche Fix-Klasse wie 1.
3. **[mittel] 21-/22-karat-gold-preis, iPhone:** „18 Karat“, „21 Karat“ … brechen in 2 Zeilen (Zeilen doppelt hoch). Fix: `&nbsp;` zwischen Zahl und „Karat“ in der Tabelle.
4. **[mittel] Alle Seiten mit Kopf-Nav (Desktop/Tablet ≥ 768, auch silberrechner, 750-gold-wert):** Nav bricht in 2 Zeilen (Höhe 77 px); Desktop-Seiten dadurch +137…214 px höher (Desktop-Alarm 6 Seiten; bei vreneli/dukat/american-eagle/goldbarren zusätzlich Kurz-gesagt-Absatz). Kein Überlappen mit dem Hero, aber dicht. Gewollt? Sonst Nav kürzen/nowrap-Scroll oder kleinere Abstände.
5. **[niedrig] schilling-silbermuenzen-wert:** „Oesterreichische Nationalbank“ statt „Österreichische“ (src/pages.js). Zellen „640er, 7,5 g“ brechen, Tabelle passt aber in die Breite (kein Überlauf).
6. **[niedrig] 10-euro-silbermuenzen-wert, iPhone:** Auswahlfeld „10 Euro Gedenkmünze (2002–2010, 92…“ abgeschnitten (bestand schon bei 100-euro-Münze).
7. **[niedrig] maria-theresien-taler-wert:** Feingehalt „833,3“ ohne Einheit/„er“; Unterstreichung in Links läuft über das Wortende („Maria-Theresien-Taler “, Leerzeichen im Link). Einsames „Goldwert).“ im Kurz-gesagt (dukat/goldbarren, iPhone) – tolerierbar.
8. **[niedrig] Kopf-Nav iPhone:** scrollbar, Fade-Hinweis am Rand sehr schwach.

## Ohne Befund
Preis-Platzhalter: kein `data-price`, das „–“ bleibt (alle Schlüssel werden aufgelöst; gemessen 11 Breiten × 16 Seiten); Überlauf der Seite: 0 in allen Breiten; Fotoband im Kopf (nicht angeschnitten, keine harte Kante, 0 Hero-Handy-Funde); Fußzeilen-Nav (29/11/8/2 Links, 0 Überlauf, sauberer Umbruch); Schilling-Tabelle (7 Zeilen × 4 Spalten) passt bei 375; Kurz-gesagt-Absatz sauber; 925/800/835-silber, Maria-Theresien-Taler visuell ok; keine JS-Fehler.

## Scheinfehler
404 /api/price.php (lokal ohne PHP), „DEMO-KURS“, WebKit-Variable-Fonts (zusammengeklebte Überschriften), „bad“-Elemente = bewusst scrollende Kopf-Nav.
## Nicht gesichtet
Prüfer sah ~20 von 64 Montagen (Schwerpunkt iPhone), Android-Falz nicht.
