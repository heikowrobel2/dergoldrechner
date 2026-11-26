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

## Block 5 – Stand 13.11.2026
Live: /maple-leaf-silber-wert/ (maple leaf silber 8.100, KD 23), /kruegerrand-silber-wert/ (krügerrand silber 3.600, KD 16), /philharmoniker-silber-wert/ (wiener philharmoniker silber 2.400, KD 12), /100-euro-goldmuenze-wert/ (100 euro goldmünze 4.400, KD 15; dazu 20/50/200 Euro).
Nächste Kandidaten (Semrush DE 13.11.2026): gold silber ratio 12.100 (KD 16, Ratgeber), silberpreisentwicklung euro 9.900 (KD 19, braucht Kursverlauf), 1 kg silber preis 6.600 (KD 15, Abgrenzung zu /silberpreis-pro-gramm/ klären), silber 925 wert 2.900 (KD 27, gegen /silberrechner/ prüfen), american eagle silber 390.
Fotos Silbermünzen: Pexels 8442431 (Maple eigener Ausschnitt, Krügerrand/Philharmoniker weichgezeichnet, Übersicht scharf).

## Backlinks (laufend, kein Spam)
1. Launch-Pressemitteilung (pressemitteilung.ws), 2. Gold-Wikis: goldbarren-wiki.de, maple-leaf-wiki.de, 585gold.org,
3. Gastbeiträge: spar.gold, aktienkaufempfehlungen.de, Finanzblogs, 4. Fachforen (goldseiten-forum.com) nur mit
hilfreichen Antworten, 5. Einbettbares Kurs-/Rechner-Widget, 6. Verzeichnisse nur ab AS 10.
Nicht: Linknetzwerke (bhs-links-*.xyz), gekaufte Spam-Verzeichnisse.

## Messen
Search Console wöchentlich (Impressionen je Seite), Rankings der Kernbegriffe monatlich; nach 8 Wochen Plan anpassen.

## Prüfung und Block 6 – Stand 20.11.2026
- Sitemap: alle Seiten aus `pages.js`/`home.js`, ohne Impressum/Datenschutz, lastmod aus `lastmod.json`; neu eingereicht.
- Datenschutz: Impressum/Datenschutz `noindex` (Meta + X-Robots-Tag), nicht in Sitemap/llms.txt; Name/Anschrift nur dort, nicht in JSON-LD.
- Indexierung (GSC 20.11.): 28 indexiert; nicht indexiert ohne technische Ursache (200, eigenes canonical, kein noindex, von allen Seiten verlinkt): /silberrechner/, /silber-verkaufen/, /platin-verkaufen/ (Google unbekannt), /silberpreis-pro-gramm/, /so-rechnen-wir/, /100-euro-goldmuenze-wert/ (gefunden, nicht gecrawlt).
- Neu live: /gold-silber-ratio/ (gold silber ratio 12.100, KD 16; Ratio live aus den Kursen, `data-price="ratio"`), /silberbarren-wert/ (silberbarren kaufen 12.100, silberbarren 6.600, silber barren 2.900, 1oz silber 1.600, 1 kg silberbarren 1.000; Foto Pexels 20979927).
- Zugeordnet statt neuer Seite: „1 kg silber preis“ (6.600) → /silberpreis-pro-gramm/ (H2), „silber 925 wert“ (2.900) → /silberrechner/.
- Eigene Kursreihe läuft ab 20.11.2026: `data/price-history.json` (Server, alle vier Metalle, ~30 KB/Jahr, keine Kosten). Lücken möglich an Tagen ohne Seitenaufruf.
- Offen: silberpreisentwicklung euro (9.900) und ggf. Goldpreisentwicklung (vorher Kannibalisierung prüfen) – Seiten erst, wenn einige Monate Daten vorliegen; für Jahre davor kostenlose historische Quelle suchen; palladium (40.500, KD 46) nur über /platinpreis-pro-gramm/; edelmetalle kaufen (3.600); PageSpeed-API-Kontingent erschöpft (429).

## Block 7 – Nischen-Ausbau 26.11.2026 (Grundlage: docs/keyword-nischen-2026-11-26.md, docs/semrush-analyse-2026-11-26.md)
- Neu: /21-karat-gold-preis/, /22-karat-gold-preis/, /925-silber-wert/, /800-silber-wert/, /835-silber-wert/, /maria-theresien-taler-wert/,
  /10-euro-silbermuenzen-wert/, /5-dm-muenzen-wert/, /10-dm-silbermuenzen-wert/, /schilling-silbermuenzen-wert/ (Rechenkern: 875er Gold,
  11 historische Silbermünzen, Tests zuerst).
- Umgeschichtet: „925 silber wert“ und „800 silber“ von /silberrechner/ auf die neuen Legierungsseiten; Silberrechner = Oberbegriff.
- Kannibalisierung: /750-gold-wert/ auf „750 gold preis“ (8.100), /585-gold-wert/ auf „goldwert 585“ (5.400) geschärft.
- Quick Wins: „Kurz gesagt“ mit Live-Wert + schärfere Titel auf 9 Münz-/Barren-/Platinseiten.
- Block 8 (nächster): /gold-dichte/ (12.200, KD 10–22, braucht Volumen-Rechner), /unze-in-gramm/ (81.800 Cluster, KD 21–37, Umrechner;
  „wieviel ist eine unze gold“ von /goldpreis-pro-unze/ dorthin), /palladiumpreis-pro-gramm/ (21.100, KD 20–42, aus /platinpreis-pro-gramm/
  herauslösen), /silberpreis-pro-unze/ (25.100, KD 27–54), danach 900-gold-wert, gold-verkaufen-steuer, gold-stempel-bedeutung, karat-umrechnen,
  20-francs-gold-wert, goldpreis-pro-kilo (Entscheidung offen). Goldpreisentwicklung/-prognose, sobald Kursreihe reicht.
