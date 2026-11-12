# dergoldrechner.de

Statische Website mit Gold-, Zahngold-, Münz- und Silberrechner. Kein CMS, keine Datenbank, keine Cookies.
Nur der Goldkurs wird serverseitig per PHP abgerufen.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `src/pages.js` | Texte, Titel, FAQ aller Rechnerseiten (hier Inhalte ändern) |
| `src/legal.js` | Impressum und Datenschutz (Vorlagen mit gelben Platzhaltern) |
| `src/build.js` | erzeugt die HTML-Seiten in `site/` |
| `src/serve.js` | lokale Vorschau auf http://localhost:8080 |
| `site/assets/calc.js` | Rechenkern (Feingehalte, Münzen, Ankaufsspannen) |
| `site/assets/app.js` | verbindet Formular, Kurs und Ergebnis |
| `site/assets/partners.js` | Partnerlinks, erst nach Freigabe durch das Programm eintragen |
| `site/api/price.php` | holt den Kurs von gold-api.com, gleicht ihn ab, Cache 6 Stunden |
| `site/data/price.json` | letzter Kurs (am Anfang ein DEMO-Kurs) |
| `tests/calc.test.js` | Tests des Rechenkerns |

## Befehle

```
node src/build.js              # Seiten neu erzeugen (warnt bei Platzhaltern/Demo-Kurs)
node src/build.js --release    # bricht ab, solange Platzhalter oder Demo-Kurs vorhanden sind
node --test tests/calc.test.js # Tests
node src/serve.js              # Vorschau
```

## Vor dem Livegang

1. Domain bei denic.de prüfen und registrieren (z. B. Hetzner Webhosting S).
2. Kurse: Hauptquelle ist **gold-api.com** (kostenlos, kein Schlüssel, kommerzielle Nutzung laut AGB erlaubt).
   Läuft ohne Konfiguration, stündliche Aktualisierung. Empfohlen: kostenlosen Schlüssel bei **MetalCharts**
   (metalcharts.org/metals-api, 200 Abrufe/Monat, kommerziell erlaubt) anlegen. Er dient nur zum Abgleich
   (USD-Kurs über den EZB-Referenzkurs umgerechnet) und wird nie angezeigt. Keine kostenpflichtigen Dienste.
   Große Kursbewegungen (> 8 %) werden nie blockiert, nur bestätigt: durch die Vergleichsquelle oder eine
   zweite Messung mindestens 10 Minuten später in dieselbe Richtung, spätestens nach 1 Stunde.
   Widersprechen sich die Quellen, bleibt höchstens 1 Stunde der letzte gute Kurs stehen, danach gilt
   gold-api.com. Abgleich höchstens stündlich und max. 180 Abrufe/Monat.
3. `site/api/config.sample.php` nach `goldwert-config.php` **eine Ebene über dem Web-Verzeichnis** kopieren
   (oder als `site/api/config.php`) und den Schlüssel eintragen. PHP 8.x erforderlich (ChemiCloud: im cPanel
   unter „Select PHP Version“ 8.3 oder 8.4 wählen, Erweiterung `curl` aktiv lassen). `checked_at` in der
   Antwort von `/api/price.php` zeigt den letzten erfolgreichen Abgleich.
4. `site/data/price.json` (Demo-Kurs) **nicht** hochladen; `site/data/` muss für PHP beschreibbar sein.
   Der erste Aufruf von `/api/price.php` legt den echten Kurs an. Demo-Daten werden online nie angezeigt.
   Fehler (Schreibrechte, API) stehen im PHP-Fehlerlog mit dem Präfix `goldwert:`.
5. Impressum und Datenschutz ausfüllen (`src/legal.js`), `node src/build.js` ausführen.
   Rechtstexte prüfen lassen oder mit eRecht24/IT-Recht Kanzlei erzeugen.
6. Hochladen per GitHub Actions (`.github/workflows/deploy.yml`, wie bei wohin-mit.de): jeder Push auf `main`
   baut ohne Demo-Kurs (`--release`), testet und lädt `site/` per FTPS hoch. Secrets: `FTP_USER`, `FTP_PASSWORD`,
   optional `FTP_HOST` und `METALCHARTS_KEY`. Der Kurs-Cache auf dem Server (`data/price*.json`) wird nie
   überschrieben oder gelöscht (`scripts/deploy-ftp.mjs`, Tests in `tests/deploy.test.mjs`).
7. Google Search Console einrichten, `sitemap.xml` einreichen.
8. Danach bei Partnerprogrammen bewerben (Goldgarant über Awin, Goldankauf123, Kettner)
   und freigegebene Links in `site/assets/partners.js` eintragen.

## Annahmen im Rechner

- Ankaufsspannen (Anteil am Materialwert, Annahme, kein Marktbeleg): 333/375 Gold 72–88 %, 585/750 Gold 80–90 %,
  900+ Gold 86–95 %, Münzen 92–97 %, Zahngold 72–88 %, Silber 55–80 %. Die Annahme wird unter jedem Ergebnis angezeigt.
- Eingaben: Komma oder Punkt, Tausenderpunkte und „g“ werden verstanden. Ungültige Eingaben zeigen einen Hinweis statt 0 €.
  Grenzen: 100.000 g, 10.000 Münzen, Keramikanteil höchstens 90 %.
- Zahngold-Goldanteil: hochgoldhaltig 70–85 %, goldreduziert 40–60 %, unbekannt 40–80 %.
- Diese Werte stehen in `site/assets/calc.js` und sind bewusst als Spanne dargestellt.
