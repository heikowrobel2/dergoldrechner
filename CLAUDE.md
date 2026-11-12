# dergoldrechner.de – Projektregeln

- Mit Heiko immer Deutsch. Website-Texte Deutsch, Code-Kommentare Englisch.
- Aufbau, Befehle, Deploy: siehe `README.md`. Deploy = Push auf `main` (GitHub Actions, FTPS zu ChemiCloud).
- Inhalte in `src/pages.js`, Startseite `src/home.js`, Rechenkern `site/assets/calc.js` (Tests zuerst: `npm test`).
- Jeder Suchbegriff gehört genau einer Seite (keine Kannibalisierung). Grundlage: `docs/semrush-themenspeicher.md`,
  Reihenfolge `docs/ausbauplan.md`.
- Neue Inhalte immer unabhängig auf Fakten, Grammatik und SEO prüfen lassen; Ausrichtung per Messung (≤ 1 px).

## Entscheidungen (Heiko, 12.11.2026)
- **Keine Pressemitteilungen, keine Lokalzeitung.** Heiko möchte als Person nicht im Mittelpunkt stehen.
- **Linkaufbau nur über gezielte Anfragen an Ratgeberseiten** mit passendem Artikel (Status in `docs/outreach-*.md`).
  Neue Ziele laufend sammeln; Versand nur nach Heikos Freigabe, von kontakt@dergoldrechner.de mit Signatur
  „Der Goldrechner“ (Outlook).
- **Monetarisierung geparkt**, bis der wöchentliche Search-Console-Check „STARTSCHUSS“ meldet
  (geplante Aufgabe `goldrechner-traffic-check`). Partner-Links dann in `site/assets/partners.js`.
- Design der Unterseiten: nur mit Entwurf und Heikos Abnahme ändern.
