# Semrush-Analyse dergoldrechner.de (Modus A, Erst-Analyse)

Domain: dergoldrechner.de | Land: DE | Datum: 2026-11-26 | Datenquellen: Semrush-Weboberfläche (Edge, Datenstand 25.11.: Domain-Übersicht,
Organische Rankings, Mitbewerber, Backlinks, Top-Seiten goldpreis1.de, Keyword-Bulk-Analyse), Search Console 28 Tage (ja)

## Stand
- **Semrush:** AS n/v, 143 Keywords DE (AT 3), geschätzter Traffic 11/Monat, 0 Backlinks, 0 verweisende Domains, KI-Sichtbarkeit 0.
- **Search Console (29.10.–26.11.):** 3 Klicks, 2.098 Impressionen, CTR 0,14 %, Ø-Position 51,5. Impressionen erst ab 12.11., seither
  stabil 110–200/Tag. 29 Seiten haben Impressionen.
- **Einordnung:** Die Seite ist gut zwei Wochen im Index. Google testet sie breit (Position 40–80), aber ohne einen einzigen Backlink fehlt
  die Autorität für Seite 1 bei den großen Begriffen. Das ist normal für die Phase, kein Fehler.
- **Nicht in der Search Console sichtbar** (noch keine Impressionen): /silberrechner/, /silberpreis-pro-gramm/, /gold-silber-ratio/,
  /silberbarren-wert/, /silber-verkaufen/, /platin-verkaufen/, /philharmoniker-silber-wert/, /100-euro-goldmuenze-wert/, /so-rechnen-wir/.
  → Indexierung per URL-Prüfung kontrollieren.

## Top-Maßnahmen (Wirkung × Wahrscheinlichkeit ÷ Aufwand)
1. **Backlinks (größter Engpass).** 0 verweisende Domains. Outreach-Runde 1/2 (docs/outreach-*.md) weitertreiben; linkwürdige Formate
   sind das Goldpreis-Widget (/goldpreis-widget/, rankt schon auf 8,8) und eine künftige Kursverlauf-Seite. Aufwand mittel, Wirkung auf alles.
2. **Kannibalisierung Startseite ↔ Karatseiten auflösen** (siehe Tabelle). Startseite rankt für 585/750-Begriffe parallel zur Fachseite;
   für „750 gold preis“ (8.100) rankt *nur* die Startseite (63–83), nicht /750-gold-wert/. Fix: auf der Startseite 585/750 nur kurz
   anreißen und mit beschreibendem Anker auf die Fachseite verlinken; Titel/H1 der Fachseiten auf „Preis“ und „Wert“ schärfen. Aufwand klein.
3. **Quick Wins Münzseiten** (Positionen 8–23, KD niedrig): Vreneli, Känguru, Britannia, American Eagle, Dukat, 20 Mark, Sovereign.
   Je Seite: Antwortabsatz mit aktuellem Euro-Wert ganz oben, Tabelle Größe/Feingewicht/Wert, 2–3 interne Links von /goldmuenzen-wert/
   und der Startseite. Aufwand klein.
4. **Neue Seite „Goldpreisentwicklung“ mit eigenem Chart** aus `data/price-history.json` (läuft seit Commit f074b74). Großes,
   bisher unbesetztes Thema; Silber-Gegenstück danach. Aufwand mittel (Daten sammeln sich erst).
5. **Indexierung der Silber-/Platin-Neuseiten prüfen** und in der Search Console anstoßen. Aufwand klein.

## Quick Wins (Position ≤ 25)
| Keyword | Pos. | Volumen | KD | URL | Vorschlag |
|---|---|---|---|---|---|
| 20 vreneli wert in euro | 10 | 390 | 17 | /vreneli-wert/ | Euro-Wert in Titel + erster Satz; bringt schon 2 von 3 Klicks |
| goldbarren wert 1 kg | 12 | 110 | 33 | /goldbarren-wert/ | Abschnitt „1-kg-Barren“ mit Live-Wert, H2 „Was ist 1 kg Gold wert?“ |
| goldrechner online | 13 | 390 | 22 | /goldankauf-rechner/ (auch /) | klären, welche Seite das Ziel ist (Startseite = Goldrechner) |
| american eagle gold | 14 | 210 | 24 | /american-eagle-gold-wert/ | Größen 1/10–1 oz als Tabelle |
| 585 goldpreis ankauf | 18 | 260 | 28 | /585-gold-wert/ | Ankaufspreis-Spanne (Händlerabschlag) prominent |
| platinpreis gramm | 23 | 140 | 9 | /platinpreis-pro-gramm/ | KD 9: Titel auf „Platinpreis pro Gramm heute“ |
| GSC: Känguru, Britannia, Krügerrand Silber, Maple Leaf Silber | 8–15 | klein | – | Münzseiten | interne Links von /goldmuenzen-wert/ und /silbermuenzen-wert/ |
| GSC: Dukat (213 Impr.), Goldmünzen (80), Sovereign (51) | 22–23 | – | – | Münzseiten | auf Seite 1 schieben: FAQ „1-fach/4-fach Dukat Wert“ |

## Kannibalisierung (Semrush-Rankings, mehrere URLs je Begriff)
| Keyword | Volumen | rankende URLs | Soll-Seite |
|---|---|---|---|
| goldwert 585 | 5.400 | /585-gold-wert/ (73), / (58) | /585-gold-wert/ |
| 14 karat gold wert | 1.300 | / (67), /585-gold-wert/ (56) | /585-gold-wert/ |
| wert 585 gold gramm / goldpreis berechnen 585 | 210/170 | / und /585-gold-wert/ | /585-gold-wert/ |
| 750 gold preis, goldpreis 750, gold 750 preis | 8.100 / 3.600 / 3.600 | nur / (63–83) | /750-gold-wert/ |
| goldrechner 750 | 70 | /, /750-gold-wert/, /goldbarren-wert/ | /750-gold-wert/ |
| gold 999 wert | 140 | / (49), /goldbarren-wert/ (47) | eine festlegen (Feingold-Abschnitt Startseite) |
| goldrechner online | 390 | /goldankauf-rechner/ (13), / (60) | Startseite (Marke „Goldrechner“) |

Hinweis: Positionen > 50 schwanken stark; die Doppel-Rankings sind trotzdem ein klares Muster, weil die Startseite die Karat-Begriffe mitbedient.

## Gap-Themen (Semrush Bulk-Analyse DE, 26.11.)
| Cluster | Volumen | KD | vorgeschlagene Seite | Bewertung |
|---|---|---|---|---|
| goldpreis aktuell / heute / goldkurs | 1,83 Mio. / 301.000 / 135.000 | 80 / 79 / 70 | keine eigene Seite | ohne Autorität aussichtslos; Startseite nennt den Tageskurs bereits |
| goldpreis prognose | 60.500 | 35 | /goldpreis-prognose/ (später) | KD niedrig, aber YMYL: nur mit Quellen (Banken-Prognosen), Datum, keine eigene Empfehlung |
| goldpreis chart / goldpreisentwicklung / goldpreis historisch | 22.200 / 14.800 / 1.000 | 71 / 57 / 64 | /goldpreisentwicklung/ mit eigenem Chart | bester mittelfristiger Kandidat, sobald Kursdaten reichen |
| silberpreisentwicklung | 2.900 | 55 | /silberpreisentwicklung/ | nach der Gold-Seite |
| gold silber ratio | 12.100 (Themenspeicher) | 16 | /gold-silber-ratio/ besteht | noch nicht indexiert → prüfen |

Vergleichs-Wettbewerber auf Augenhöhe: **goldpreis1.de** (2.900 Keywords, ~1.400 Traffic) holt seinen Traffic fast nur über
Kurs-/Chart-Seiten (/goldkurs/, /goldpreise/goldpreis-aktuell/, /goldpreisentwicklung/gold-chart/). Weitere ähnliche Rechner-/Ratgeber-Domains:
goldguru.one, gold-arche.de, bullionweb.de. Die Händler (proaurum, heraeus, feingoldhandel) sind keine realistischen Vergleichsgegner.
Semrushs eigene Mitbewerberliste ist wegen nur einem gemeinsamen Keyword je Domain noch nicht aussagekräftig.

## Technik
Kein Site Audit gelesen (würde ein Semrush-Projekt anlegen = Schreibaktion). Die Prüfstraße vom 26.11. (docs/pruefstrasse-bericht-2026-11-26.md)
deckt die Darstellung ab. Offen: Indexierungsprüfung der neun Seiten ohne Impressionen.

## Backlinks
0 Backlinks, 0 verweisende Domains (Semrush). Kein Backlink-Gap sinnvoll, solange die Vergleichsdomains klein sind; Ziele weiter über
die Ratgeber-Anfragen (docs/outreach-*.md). Zurückholbare Links: keine.

## Erfolgsmessung (Prüfdatum 2027-01-07, nach 6 Wochen)
- Klicks GSC 28 Tage: 3 → ≥ 60
- Seiten mit Ø-Position ≤ 20: 4 → ≥ 10
- /750-gold-wert/ rankt für „750 gold preis“ statt der Startseite
- verweisende Domains: 0 → ≥ 5

## Nicht geprüft / Annahmen
- Kein Site Audit, kein Position Tracking (beides wäre Projekt anlegen → nur mit Freigabe).
- Keyword-Gap-Werkzeug nicht genutzt, weil Semrush noch keine passenden Wettbewerber erkennt; ersetzt durch Top-Seiten von goldpreis1.de + Bulk-Analyse.
- Semrush-Traffic (11) ist bei so kleinen Seiten geschätzt; Search Console ist maßgeblich.

## Datenqualität und Kosten
Datenqualität: **niedrig bis mittel** (Seite erst ~2 Wochen sichtbar, Positionen > 50 schwanken). Kosten: Weboberfläche, keine API-Units;
Keyword-Übersicht-Kontingent 131/250 verbraucht. **Semrush-Paket läuft laut Hinweis in 16 Tagen aus.**
