# Ausbauplan dergoldrechner.de

Stand 12.11.2026 · Grundlage: `docs/semrush-themenspeicher.md` (Semrush DE, Testzugang). Ziel: die Nische
„Edelmetall-Wert und -Verkauf“ bei Google dominieren. Regel: **ein Suchbegriff-Cluster = genau eine Seite**
(keine Kannibalisierung), Rechner zuerst, dann Ratgeber. Ein Block nach dem anderen, jeder mit Prüfung und Abnahme.

## Block 0 – sofort (ohne neue Seiten)
1. Google Search Console: Domain bestätigen, `sitemap.xml` einreichen (Semrush kennt die Seite noch nicht).
2. Bestehende Seiten nachschärfen (Titel, H1, H2, FAQ mit exakten Fragen):
   - `/`: „Goldpreise“ (22.200, KD 26), „Gold wert“ (12.100), „Gold wert aktuell“ (3.600); FAQ „Wie viel ist Gold wert?“, „Was ist Gold wert?“.
   - `/goldpreis-pro-gramm/`: „Gold Gramm Preis“ (18.100, KD 22), Zeilen 10 g / 100 g / 1 kg in der Tabelle („Goldpreis 100 Gramm“ 2.400), FAQ „Was kosten heute 100 g Gold?“ (KD 16).
   - `/goldankauf-rechner/`: „Goldankauf Rechner“ (9.900), „Goldankauf Preise“ (4.400), „Gold verkaufen Rechner“ (8.100).
   - `/zahngold-wert/`: Abschnitt **Zahngold-Ankauf** („zahngold ankauf“ 3.600, CPC 4,19 $; „zahngold verkaufen“ 1.600); FAQ „Was ist Zahngold wert?“ (KD 5), „Wie viel ist 1 Gramm Zahngold wert?“ (KD 11). Keine eigene Ankauf-Seite (Kannibalisierung).
   - `/585-gold-wert/`: „585 Gold Ring Wert“ (1.900), FAQ „Was ist 585 Gold wert?“ (KD 28).
   - `/goldmuenzen-wert/`: „Goldmünzen“ (12.100, KD 20) in Titel/H1.
   - `/silberpreis-pro-gramm/`: FAQ „Wie hoch ist der Silberpreis pro Gramm?“.

## Block 1 – Verkaufen (größtes Volumen, schwache Konkurrenz, hoher Werbewert = Partner-Umsatz)
| Seite | Cluster | Volumen | KD |
|---|---|---|---|
| `/gold-verkaufen/` | gold verkaufen, gold verkaufen preis, wo kann man gold verkaufen, wo am besten gold verkaufen | ~60.000 | 14–47 |
| `/schmuck-verkaufen/` | schmuck verkaufen (CPC 3,07 $), goldschmuck verkaufen, goldkette verkaufen, goldring verkaufen, wo verkaufe ich am besten goldschmuck | ~7.000 | 7–43 |
| `/altgold-verkaufen/` | altgold verkaufen, altgold, altgold ankauf | ~4.900 | 22–40 |
Abgrenzung: `/goldankauf-rechner/` bleibt der Rechner für „Goldankauf“; `/gold-verkaufen/` ist der Ratgeber mit Rechner und Ablauf. Vor dem Bau die Top 10 je Begriff prüfen, ob Altgold und Schmuck dieselben Ergebnisse zeigen (dann zusammenlegen).

## Block 2 – Goldbarren (neues Feld, sehr großes Volumen, niedrige KD)
| Seite | Cluster | Volumen | KD |
|---|---|---|---|
| `/goldbarren-wert/` | goldbarren, goldbarren preis, gold barren, Gewichte 1 g – 1 kg | ~37.000 | 11–50 |
| Abschnitt oder eigene Seite „Goldbarren kaufen“ | goldbarren kaufen (40.500, KD 16) | 40.500 | 16 |
Rechner: Barrengewicht → Materialwert, Ankaufs- und typische Kaufspanne. Partnerprogramme für den Kauf nötig (neu suchen).

## Block 3 – Umrechnungen
| Seite | Cluster | Volumen | KD |
|---|---|---|---|
| `/goldpreis-pro-unze/` (mit Kilo-Tabelle) | feinunze gold preis (3.600, KD 14), wieviel ist eine unze gold (1.300, KD 22), unze gold (14.800, KD 58), goldpreis pro kilo | ~25.000 | 12–58 |
| `/feingold-999-wert/` nur falls nicht in Block 3 integrierbar | gold preis 999, gold 999 wert | ~1.400 | 28–64 |

## Block 4 – Platin, Palladium, Silber-Feinheiten
- `/platinpreis-pro-gramm/` bzw. Palladium-Abschnitt: „platin preis gramm“ (2.400, KD 53), „palladium“ (40.500, KD 46, breit).
- `/silber-925-wert/` prüfen gegen `/silberrechner/` (Kannibalisierung!) – eher Silberrechner um 925 schärfen.

## Block 5 – Langfristig: Glossar/Programmatisch
goldankauf123.de holt ~93.000 Besuche im Monat über ~1.200 Glossar-Seiten (Münzen, Legierungen, Währungen; je 250–350).
Für uns: je Gold- und Silbermünze eine Wertseite mit Rechner (aus `calc.js`-Daten), je Legierung eine Seite.
Erst nach Block 1–3 und nur mit echtem Mehrwert je Seite (keine Dünnseiten).

## Backlinks (laufend, kein Spam)
1. Launch-Pressemitteilung (pressemitteilung.ws), 2. Gold-Wikis: goldbarren-wiki.de, maple-leaf-wiki.de, 585gold.org,
3. Gastbeiträge: spar.gold, aktienkaufempfehlungen.de, Finanzblogs, 4. Fachforen (goldseiten-forum.com) nur mit
hilfreichen Antworten, 5. Einbettbares Kurs-/Rechner-Widget, 6. Verzeichnisse nur ab AS 10.
Nicht: Linknetzwerke (bhs-links-*.xyz), gekaufte Spam-Verzeichnisse.

## Messen
Search Console wöchentlich (Impressionen je Seite), Rankings der Kernbegriffe monatlich; nach 8 Wochen Plan anpassen.
