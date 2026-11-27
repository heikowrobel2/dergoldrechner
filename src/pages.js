// Page definitions. Text is German (site language). Edit here, then run: node src/build.js
// Keyword mapping (Semrush DE, Nov 2026) is noted per page in `keywords` – used for review, not output.
// inNav:false keeps a page out of the top navigation (it is still linked in the footer and in texts).
const de = (x) => x.toLocaleString('de-DE');
const C = require('../site/assets/calc.js');
const band = (k) => `${Math.round(C.PAYOUT[k].min * 1000) / 10} – ${Math.round(C.PAYOUT[k].max * 1000) / 10} %`.replace(/\./g, ',');
const howText = {
  '333': ['eine Goldkette aus 333er Gold mit 8 g', 'Bei 333er Gold landet nur ein Drittel des Gewichts als Gold in der Rechnung – deshalb wirkt der Wert im Vergleich zum Gewicht oft gering.',
    'Wie Ankäufer ihren Preis für Altgold kalkulieren und wie Sie Angebote vergleichen, zeigt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.'],
  '585': ['ein 585er Goldring mit 4 g', 'Für die meisten Eheringe, Ketten und Ohrringe in Deutschland ist das die passende Rechnung.',
    'Wie viel Händler für 585er Schmuck tatsächlich auszahlen und wie Sie Angebote vergleichen, erklärt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.'],
  '750': ['ein 750er Armband mit 15 g', 'Durch den hohen Goldanteil steigt der Wert von 750er Gold mit jedem Gramm deutlich schneller als bei <a href="/333-gold-wert/">333er</a> oder <a href="/585-gold-wert/">585er Gold</a>.',
    'Was Ankäufer für 750er Schmuck auszahlen und worauf Sie beim Verkauf achten sollten, erklärt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.']
};
const how = (fin) => {
  const [ex, note, buyer] = howText[fin];
  const g = Number(ex.match(/(\d+) g/)[1]);
  return `<p>Gerechnet wird mit <strong>Gewicht × ${de(Number(fin) / 1000)} × Goldpreis pro Gramm</strong>. Beispiel: ${ex} enthält ${de(Math.round(g * Number(fin)) / 1000)} g Feingold. ${note} Den aktuellen <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a> für jeden Feingehalt finden Sie auf einer eigenen Seite.</p>
<p>${buyer}</p>`;
};
module.exports = [
  {
    slug: '',
    nav: 'Goldrechner',
    keywords: 'goldrechner 49.500 · gold rechner 8.100 · gold wert rechner 1.000 · goldwert rechner 880 · gold berechnen 720',
    title: 'Goldrechner: Was ist mein Gold wert? Sofort berechnen',
    description: 'Kostenloser Goldrechner mit aktuellen Goldpreisen: Gewicht und Feingehalt eingeben und den Goldwert von Altgold, Schmuck und Zahngold sofort sehen.',
    h1: 'Goldrechner: Was ist Ihr Gold heute wert?',
    intro: 'Gewicht eingeben, Stempel wählen – und sofort sehen, was Schmuck, Zahngold oder Münzen nach aktuellem Börsenkurs wert sind.',
    calc: { type: 'gold', preset: '585', weight: 10 },
    sections: [],
    faq: [
      ['Wie viel ist Gold wert?', 'Das hängt von Gewicht und Feingehalt ab. Ein Gramm reines Gold (999) ist so viel wert wie der aktuelle Goldpreis pro Gramm, ein Gramm 585er Gold 58,5 % davon, 333er Gold ein Drittel. Der Goldrechner oben rechnet es für Ihr Gewicht aus.'],
      ['Wie funktioniert der Goldrechner?', 'Sie geben das Gewicht und den Feingehalt (zum Beispiel 333, 585 oder 750) ein. Der Goldrechner multipliziert beides mit dem aktuellen Goldpreis pro Gramm und zeigt den Materialwert sowie einen unverbindlichen Ankaufs-Richtwert.'],
      ['Kann ich mit dem Gold-Rechner auch Zahngold, Münzen und Silber berechnen?', 'Ja. Für Zahngold, Goldmünzen wie den Krügerrand und für Silber gibt es eigene Rechner mit passenden Einstellungen – zum Beispiel Keramikanteil bei Zahngold oder die Münze aus einer Liste. Alle Rechner finden Sie im Menü und unten auf jeder Seite.'],
      ['Wie kann ich den Goldwert berechnen, wenn kein Stempel zu sehen ist?', 'Dann ist der Feingehalt unbekannt. Rechnen Sie zur Orientierung mit 333 und 585 und vergleichen Sie beide Werte. Den genauen Gehalt kann nur eine Prüfung beim Ankäufer oder Goldschmied feststellen.'],
      ['Wie genau ist der Goldrechner?', 'Der Materialwert ist so genau wie Gewicht, Feingehalt und Goldkurs. Der Ankaufs-Richtwert ist eine Spanne, weil jeder Ankäufer andere Abzüge hat. Ein verbindliches Angebot bekommen Sie nur vom Ankäufer nach Prüfung.'],
      ['Warum ist der Goldpreis hier so viel niedriger als an der Börse?', 'Ist er nicht – er ist nur in einer anderen Einheit angegeben. Börsen und Finanzportale nennen den Preis je Feinunze (31,1035 g), wir rechnen ihn auf ein Gramm um, weil Schmuck in Gramm gewogen wird. Kostet die Unze zum Beispiel 3.500 €, ist ein Gramm Feingold rund 112,50 € wert. Oben auf der Seite stehen beide Werte nebeneinander.'],
      ['Woher kommt der Goldpreis?', 'Wir verwenden den internationalen Spotpreis für Feingold und Feinsilber in Euro, aktualisieren ihn stündlich und gleichen ihn mit einer zweiten, unabhängigen Kursquelle ab. Unter jedem Ergebnis steht, von wann der Kurs ist.'],
      ['Zahlt mir ein Ankäufer den angezeigten Börsenkurs?', 'Nein. Der Börsenkurs gilt für reines Feingold in großen Mengen. Für Schmuck und Altgold zahlen Ankäufer einen Teil davon, deshalb zeigt der Rechner zusätzlich eine Spanne als Richtwert.'],
      ['Ist dieser Rechner ein Angebot?', 'Nein. Wir kaufen kein Gold an. Der Rechner liefert nur einen unverbindlichen Richtwert zur Orientierung.']
    ]
  },
  {
    slug: 'goldpreis-pro-gramm',
    nav: 'Goldpreis',
    tile: 'Aktueller Preis je Gramm',
    keywords: 'gold gramm preis 18.100 (KD 22) · goldpreis rechner 18.100 (KD 17) · goldpreis pro gramm 9.900 (KD 13) · goldpreis 100 gramm 2.400 · goldpreis berechnen 4.400 · was kosten heute 100 g gold 260 (KD 16)',
    title: 'Goldpreis pro Gramm heute: 1 g bis 100 g, alle Feingehalte',
    description: 'Aktueller Goldpreis pro Gramm in Euro für 333er, 585er, 750er und 999er Gold. Goldpreis berechnen mit dem Goldpreis-Rechner – inklusive Ankaufs-Richtwert.',
    h1: 'Goldpreis pro Gramm: aktueller Goldpreis für jeden Feingehalt',
    intro: 'Der Goldpreis wird an der Börse für reines Feingold angegeben. Was ein Gramm Ihres Schmucks wert ist, hängt vom Feingehalt ab – die Tabelle rechnet es für Sie um.',
    calc: { type: 'gold', preset: '999', weight: 1 },
    priceTable: true,
    sections: [
      {
        h: 'So entsteht der Goldpreis pro Gramm',
        html: `<p>Aktuell kostet eine Feinunze Gold <strong data-price="goldozv">–</strong>, ein Gramm Feingold <strong data-price="gold">–</strong>.</p>
<p>Gold wird international in US-Dollar je Feinunze gehandelt. Eine Feinunze sind 31,1035 Gramm. Rechnet man den Preis in Euro um und teilt ihn durch 31,1035, erhält man den <strong>Goldpreis pro Gramm Feingold</strong> (999,9).</p>
<p>Schmuckgold ist fast nie rein. Für 585er Gold sind deshalb nur 58,5 % dieses Grammpreises anzusetzen, für 333er Gold ein Drittel. Genau das zeigt die Tabelle oben – automatisch mit dem aktuellen Kurs.</p>`
      },
      {
        h: 'Was kosten 1 g, 10 g und 100 g Gold?',
        html: `<div class="table-wrap"><table><thead><tr><th>Menge Feingold (999)</th><th class="num">Materialwert heute</th></tr></thead><tbody>
<tr><td>1 g</td><td class="num"><span data-price="goldw1">–</span></td></tr>
<tr><td>10 g</td><td class="num"><span data-price="goldw10">–</span></td></tr>
<tr><td>100 g</td><td class="num"><span data-price="goldw100">–</span></td></tr>
</tbody></table></div>
<p>Preise je Unze und je Kilo finden Sie unter <a href="/goldpreis-pro-unze/">Goldpreis pro Unze</a>. Das ist der reine Börsenwert des Feingolds. Barren und Münzen kosten beim Kauf etwas mehr (Prägekosten, Händlermarge), beim Verkauf von Schmuck erhalten Sie weniger – je nach Ankäufer etwa 5 bis 20 % unter dem Materialwert.</p>`
      },
      {
        h: 'Goldpreis und Ankaufspreis sind zwei verschiedene Dinge',
        html: `<p>Der Börsenpreis gilt für große Barren zwischen Banken und Händlern. Wer Altgold verkauft, erhält einen Ankaufspreis, der darunter liegt: Das Gold muss geprüft, eingeschmolzen und getrennt werden. Die rechte Spalte der Tabelle zeigt deshalb einen vorsichtig geschätzten Richtwert. Wie Ankäufer ihren Preis kalkulieren, erklärt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.</p>
<p>Der Goldpreis ändert sich an jedem Handelstag. Vergleichen Sie Angebote deshalb möglichst am selben Tag.</p>`
      }
    ],
    faq: [
      ['Wie viel ist 1 Gramm Gold heute wert?', 'Ein Gramm Feingold (999,9) ist so viel wert wie der aktuelle Goldpreis pro Gramm in der Tabelle oben. Für Schmuckgold wird dieser Wert mit dem Feingehalt multipliziert, bei 585er Gold also mit 0,585.'],
      ['Was kosten heute 100 g Gold?', '100 g Feingold sind hundertmal so viel wert wie der Goldpreis pro Gramm. Den aktuellen Betrag zeigt die Tabelle „Was kosten 1 g, 10 g und 100 g Gold?“ auf dieser Seite.'],
      ['Was kostet 1 Gramm 585er Gold?', 'Ein Gramm 585er Gold enthält 0,585 g Feingold. Sein Materialwert beträgt 58,5 % des Goldpreises pro Gramm; der aktuelle Betrag steht in der Tabelle.'],
      ['Warum ist der Goldpreis hier so viel niedriger als an der Börse?', 'Ist er nicht – er ist nur in einer anderen Einheit angegeben. Börsen und Finanzportale nennen den Preis je Feinunze (31,1035 g), wir rechnen ihn auf ein Gramm um, weil Schmuck in Gramm gewogen wird. Kostet die Unze zum Beispiel 3.500 €, ist ein Gramm Feingold rund 112,50 € wert. Oben auf der Seite stehen beide Werte nebeneinander.'],
      ['Warum unterscheidet sich der Goldpreis auf verschiedenen Seiten?', 'Manche Seiten zeigen den Verkaufspreis von Händlern inklusive Aufschlag, andere den Börsenkurs oder einen Ankaufspreis. Wir zeigen den Börsenkurs und getrennt davon einen Ankaufs-Richtwert.']
    ]
  },
  {
    slug: 'goldpreis-pro-unze',
    nav: 'Goldpreis pro Unze',
    inNav: false,
    tile: 'Feinunze und Kilo',
    keywords: 'feinunze gold preis 3.600 (KD 14) · unze gold 14.800 (KD 58) · preis von einer unze gold 880 · goldpreis pro kilo · was kostet ein kg gold in euro 110 · was kostet heute eine feinunze gold 140',
    title: 'Goldpreis pro Unze heute: Feinunze und Kilo in Euro',
    description: 'Was kostet eine Feinunze Gold heute? Goldpreis pro Unze und pro Kilo in Euro, dazu Werte für 1/10 bis 10 Unzen – live aktualisiert.',
    h1: 'Goldpreis pro Unze: Was kostet eine Feinunze Gold heute?',
    intro: 'An der Börse wird Gold in Feinunzen gehandelt. Hier sehen Sie den aktuellen Goldpreis pro Unze und pro Kilo in Euro.',
    calc: { type: 'gold', preset: '999', weight: '31,1035' },
    sections: [
      {
        h: 'Goldpreis pro Unze und Kilo in Euro',
        html: `<div class="table-wrap"><table><thead><tr><th>Menge Feingold</th><th class="num">Wert heute</th></tr></thead><tbody>
<tr><td>1/10 Unze (3,11 g)</td><td class="num"><span data-price="goldq3110">–</span></td></tr>
<tr><td>1/4 Unze (7,78 g)</td><td class="num"><span data-price="goldq7776">–</span></td></tr>
<tr><td>1/2 Unze (15,55 g)</td><td class="num"><span data-price="goldq15552">–</span></td></tr>
<tr><td>1 Unze (31,10 g)</td><td class="num"><span data-price="goldozv">–</span></td></tr>
<tr><td>5 Unzen (155,5 g)</td><td class="num"><span data-price="goldq155517">–</span></td></tr>
<tr><td>10 Unzen (311,0 g)</td><td class="num"><span data-price="goldq311035">–</span></td></tr>
<tr><td>1 kg (32,15 Unzen)</td><td class="num"><span data-price="goldw1000">–</span></td></tr>
</tbody></table></div>
<p>Das ist der reine Börsenwert des Feingolds. Beim Kauf von Münzen und Barren kommt ein Aufschlag hinzu, beim Verkauf erhalten Sie etwas weniger. Den Preis je Gramm für jeden Feingehalt finden Sie unter <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>.</p>`
      },
      {
        h: 'Feinunze und Kilogramm',
        html: `<p>Ein Kilogramm Feingold entspricht rund 32,15 Feinunzen. Wie viel Gramm eine Unze hat und wie Sie Unzen und Gramm umrechnen, zeigt der <a href="/unze-in-gramm/">Unze-in-Gramm-Rechner</a>.</p>`
      },
      {
        h: 'Warum wird Gold in Unzen gehandelt?',
        html: `<p>Die Feinunze ist die internationale Handelseinheit für Edelmetalle. Börsen und Banken nennen den Goldpreis deshalb je Unze in US-Dollar. Für Schmuck rechnet man besser in Gramm – unser <a href="/">Goldrechner</a> rechnet den Unzenpreis automatisch um.</p>`
      }
    ],
    faq: [
      ['Was kostet eine Feinunze Gold heute?', 'Den aktuellen Preis in Euro zeigt die Tabelle auf dieser Seite. Er wird aus dem internationalen Börsenkurs berechnet und stündlich aktualisiert.'],
      ['Wie viel ist eine Unze Gold wert?', 'Eine Feinunze Gold ist so viel wert wie der aktuelle Goldpreis pro Unze. Beim Verkauf einer Anlagemünze oder eines Barrens zahlen Händler meist etwas weniger als diesen Börsenwert.'],
      ['Warum ist der Goldpreis auf manchen Seiten so viel niedriger als an der Börse?', 'Meist ist er nur in einer anderen Einheit angegeben: Börsen nennen den Preis je Feinunze (31,1035 g), Rechner für Schmuck je Gramm. Ein Unzenpreis von 3.500 € entspricht rund 112,50 € pro Gramm.'],
      ['Was kostet ein Kilo Gold in Euro?', 'Ein Kilogramm Feingold entspricht rund 32,15 Feinunzen. Den aktuellen Wert sehen Sie in der Tabelle oben in der Zeile „1 kg“.']
    ]
  },
  {
    slug: 'goldankauf-rechner',
    nav: 'Goldankauf',
    inNav: false,
    tile: 'Was zahlt der Ankäufer?',
    keywords: 'goldankauf rechner 9.900 (KD 14) · goldankauf preise 4.400 · goldankauf 18.100 (KD 65)',
    title: 'Goldankauf-Rechner: Was zahlt der Ankäufer für mein Gold?',
    description: 'Goldankauf-Rechner: Was zahlen Ankäufer für Ihr Gold? Materialwert, realistische Spanne und so kalkulieren Goldankäufer ihren Preis.',
    h1: 'Goldankauf-Rechner: Was zahlt der Ankäufer für mein Gold?',
    intro: 'Bevor Sie Gold verkaufen, sollten Sie wissen, was es wert ist – und was Ankäufer davon üblicherweise auszahlen. Dieser Goldankauf-Rechner zeigt beides.',
    calc: { type: 'gold', preset: '585', weight: 20 },
    sections: [
      {
        h: 'So kalkulieren Goldankäufer',
        html: `<p>Ausgangspunkt ist immer der <strong>Materialwert</strong>: Gewicht × Feingehalt × <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>. Davon ziehen Ankäufer ihre Kosten ab:</p>
<ul>
<li><strong>Prüfung</strong> des Feingehalts, zum Beispiel per Röntgenfluoreszenz,</li>
<li><strong>Scheidung</strong> in einer Scheideanstalt, bei der Gold von anderen Metallen getrennt wird,</li>
<li><strong>Versand und Versicherung</strong> beim Ankauf per Post,</li>
<li>die eigene <strong>Marge</strong>.</li>
</ul>
<p>Ein Blick in die veröffentlichten Ankaufspreise zeigt: Gute Ankäufer zahlen für Altgold rund 90 % des Materialwerts, einzelne etwas mehr, andere deutlich weniger. Für <a href="/goldmuenzen-wert/">Goldmünzen</a> und Barren liegt der Ankaufspreis meist noch näher am Goldpreis. Unser Rechner zeigt deshalb eine Spanne statt einer einzigen Zahl.</p>`
      },
      {
        h: 'Tipps für den Goldankauf',
        html: `<p>Den kompletten Ablauf mit allen Ankäufer-Arten finden Sie unter <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>
<ul>
<li><strong>Vorher rechnen:</strong> Mit dem Materialwert aus diesem Rechner erkennen Sie sofort, ob ein Angebot fair ist.</li>
<li><strong>Nach Feingehalt sortieren:</strong> Legen Sie 333er, 585er und 750er Gold getrennt. Gemischte Posten werden oft zum niedrigsten Feingehalt bewertet.</li>
<li><strong>Münzen und Barren separat anbieten:</strong> Sie werden nah am Goldwert angekauft und sollten nicht im Schmuckposten verschwinden.</li>
<li><strong>Sammlerwert prüfen:</strong> Markenschmuck, Antikes und seltene Münzen können mehr wert sein als ihr Gold.</li>
<li><strong>Mehrere Angebote einholen:</strong> Die Unterschiede zwischen Ankäufern sind groß. Seriöse Anbieter nennen ihren Preis vorab und schicken Ware kostenlos zurück, wenn Sie ablehnen.</li>
<li><strong>Ausweis bereithalten:</strong> Seriöse Ankäufer lassen sich in der Regel den Ausweis zeigen; bei Barzahlungen ab 2.000 € ist das nach dem Geldwäschegesetz vorgeschrieben.</li>
</ul>`
      },
      {
        h: 'Ankauf per Post oder im Laden?',
        html: `<p>Beim <strong>Postankauf</strong> schicken Sie Ihr Gold versichert ein, es wird im Labor geprüft und Sie erhalten ein Angebot. Das ist bequem und oft günstig, weil Online-Ankäufer weniger Ladenkosten haben. Im <strong>Ladengeschäft</strong> sehen Sie die Prüfung direkt und erhalten das Geld sofort. Achten Sie in beiden Fällen auf transparente Preise je Feingehalt.</p>`
      }
    ],
    faq: [
      ['Wie viel Prozent vom Goldpreis zahlen Ankäufer?', 'Das ist von Händler zu Händler verschieden und hängt vom Feingehalt ab. Unser Rechner zeigt eine geschätzte Spanne und nennt die zugrunde gelegte Annahme direkt unter dem Ergebnis.'],
      ['Ist der Goldankauf-Rechner ein verbindliches Angebot?', 'Nein. Wir kaufen kein Gold an. Der Rechner hilft Ihnen, Angebote von Ankäufern einzuordnen.'],
      ['Muss ich beim Goldankauf Steuern zahlen?', 'Nach mehr als einem Jahr Haltedauer ist der Verkauf für Privatpersonen in der Regel steuerfrei. Die Einzelheiten stehen unter „Gold verkaufen“.']
    ]
  },
  {
    slug: 'gold-verkaufen',
    nav: 'Gold verkaufen',
    tile: 'Ablauf, Preise, Tipps',
    keywords: 'gold verkaufen 49.500 (KD 14) · gold verkaufen rechner 8.100 (KD 33) · gold verkaufen preis 8.100 (KD 47) · gold verkauf 2.400 · wo kann man gold verkaufen 720 (KD 40) · wo am besten gold verkaufen 590 (KD 38) · gold verkaufen online 1.000',
    title: 'Gold verkaufen: so bekommen Sie einen fairen Preis',
    description: 'Gold verkaufen ohne Verlust: Wert vorher berechnen, Ankäufer vergleichen, Fallen vermeiden. Mit Goldrechner, Ablauf in 5 Schritten und Steuer-Tipps.',
    h1: 'Gold verkaufen: so bekommen Sie einen fairen Preis',
    intro: 'Wer Gold verkauft, sollte vorher wissen, was es wert ist. Rechnen Sie den Materialwert aus, vergleichen Sie mehrere Angebote – und erkennen Sie so sofort, ob ein Preis fair ist.',
    calc: { type: 'gold', preset: '750', weight: 10 },
    sections: [
      {
        h: 'Gold verkaufen in 5 Schritten',
        html: `<ol>
<li><strong>Sortieren:</strong> Legen Sie Schmuck nach Stempel getrennt (333, 585, 750). Münzen und Barren kommen extra, Zahngold ebenfalls.</li>
<li><strong>Wiegen:</strong> Eine Küchen- oder Briefwaage genügt. Große Steine und Uhrwerke möglichst herausrechnen.</li>
<li><strong>Wert berechnen:</strong> Mit dem Rechner oben sehen Sie Materialwert und eine realistische Ankaufs-Spanne. Für einen gemischten Posten nutzen Sie den <a href="/altgold-verkaufen/">Altgold-Rechner für mehrere Stücke</a>.</li>
<li><strong>Angebote vergleichen:</strong> Holen Sie mindestens zwei bis drei Angebote ein – am besten am selben Tag, weil sich der Goldpreis täglich ändert.</li>
<li><strong>Verkaufen mit Beleg:</strong> Lassen Sie sich Gewicht, Feingehalt und Preis je Gramm schriftlich geben.</li>
</ol>`
      },
      {
        h: 'Wo kann man Gold verkaufen?',
        html: `<div class="table-wrap"><table><thead><tr><th>Ankäufer</th><th>Vorteile</th><th>Worauf achten</th></tr></thead><tbody>
<tr><td>Goldankauf im Ladengeschäft</td><td>Prüfung vor Ort, Geld sofort</td><td>Preis je Gramm und Feingehalt vorher erfragen</td></tr>
<tr><td>Online-Ankauf per Post</td><td>Oft gute Preise, bequem</td><td>Versicherter Versand, kostenlose Rücksendung bei Ablehnung</td></tr>
<tr><td>Scheideanstalt</td><td>Genaue Analyse, auch Zahngold und Platin</td><td>Für kleine Mengen manchmal Mindestgebühren</td></tr>
<tr><td>Juwelier oder Goldschmied</td><td>Kann Schmuck- und Markenwert einschätzen</td><td>Ankaufspreise sehr unterschiedlich</td></tr>
<tr><td>Münzhändler</td><td>Richtiger Ort für Goldmünzen und Barren</td><td>Sammlerwert seltener Münzen gesondert prüfen lassen</td></tr>
</tbody></table></div>
<p>Vorsicht bei Haustür-Ankäufern, „Goldpartys“ und mobilen Ankaufsständen: Dort fehlt oft die Zeit, Angebote zu vergleichen.</p>`
      },
      {
        h: 'Welcher Preis ist beim Goldverkauf fair?',
        html: `<p>Ausgangspunkt ist der <strong>Materialwert</strong>: Gewicht × Feingehalt × <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>. Ankäufer zahlen davon einen Teil, weil sie das Gold prüfen, einschmelzen und scheiden lassen – die Unterschiede zwischen Anbietern sind groß. Wie Ankäufer im Detail kalkulieren und wie viel Prozent sie üblicherweise zahlen, zeigt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.</p>
<p>Ein seriöses Angebot nennt den Feingehalt, das Gewicht und den Preis je Gramm. Wird nur ein Gesamtbetrag genannt, fragen Sie nach.</p>`
      },
      {
        h: 'Nicht alles einschmelzen lassen',
        html: `<p>Markenschmuck, Antikes, Schmuck mit größeren Steinen und seltene Münzen können mehr wert sein als ihr Gold. Lassen Sie solche Stücke vorher von einem Juwelier oder Münzhändler einschätzen. Mehr dazu unter <a href="/schmuck-verkaufen/">Schmuck verkaufen</a> und <a href="/goldmuenzen-wert/">Goldmünzen Wert</a>. Für Zahngold gibt es einen eigenen <a href="/zahngold-wert/">Zahngold-Rechner</a>, für Silber die Seite <a href="/silber-verkaufen/">Silber verkaufen</a>.</p>`
      }
    ],
    faq: [
      ['Wo verkaufe ich Gold am besten?', 'Dort, wo Sie den Preis je Gramm und Feingehalt vorher erfahren und mehrere Angebote vergleichen können – im Ladengeschäft oder online per Post. Für Goldmünzen und Barren ist ein Münzhändler oft die beste Wahl, für Zahngold eine Scheideanstalt.'],
      ['Wie viel bekomme ich für 1 Gramm Gold beim Verkauf?', 'Das hängt vom Feingehalt ab. Ein Gramm 585er Gold enthält 0,585 g Feingold; Ankäufer zahlen davon einen Teil des aktuellen Goldpreises. Der Rechner oben zeigt Materialwert und eine realistische Spanne für Ihr Gewicht.'],
      ['Muss ich Steuern zahlen, wenn ich Gold verkaufe?', 'Für Privatpersonen ist der Verkauf von physischem Gold in Deutschland nach einer Haltedauer von mehr als einem Jahr steuerfrei (§ 23 EStG). Bei kürzerer Haltedauer ist ein Gewinn steuerpflichtig, sofern alle privaten Veräußerungsgewinne des Jahres die Freigrenze von 1.000 € erreichen. Geerbtes Gold übernimmt die Haltedauer des Erblassers. Im Zweifel fragen Sie eine Steuerberatung.'],
      ['Brauche ich beim Goldverkauf einen Ausweis?', 'Ankäufer verlangen in der Regel einen Ausweis. Bei Barzahlungen ab 2.000 € ist die Prüfung der Identität nach dem Geldwäschegesetz vorgeschrieben.'],
      ['Ist es sicher, Gold online zu verkaufen?', 'Bei seriösen Anbietern ja: Achten Sie auf versicherten Versand, eine nachvollziehbare Prüfung im Labor, ein schriftliches Angebot vor der Auszahlung und eine kostenlose Rücksendung, wenn Sie ablehnen.']
    ]
  },
  {
    slug: 'schmuck-verkaufen',
    nav: 'Schmuck verkaufen',
    inNav: false,
    tile: 'Ketten, Ringe, Armbänder',
    keywords: 'goldschmuck verkaufen 3.600 (KD 41) · schmuck verkaufen 1.900 (KD 13) · goldkette verkaufen · goldring verkaufen · wo verkaufe ich am besten goldschmuck 590 (KD 22) · verkauf von goldschmuck preis 320',
    title: 'Goldschmuck verkaufen: Was ist mein Schmuck wert?',
    description: 'Goldschmuck verkaufen: Goldkette, Ring oder Armband bewerten, Steine und Markenwert richtig einschätzen und den besten Ankäufer finden – mit Goldrechner.',
    h1: 'Goldschmuck verkaufen: Was ist mein Schmuck wert?',
    intro: 'Ob Goldkette, Ring oder Armband: Der Rechner zeigt den Goldwert Ihres Schmucks nach Gewicht und Stempel. Darunter erfahren Sie, wann ein Stück mehr wert ist als sein Gold.',
    calc: { type: 'gold', preset: '585', weight: 15 },
    sections: [
      {
        h: 'Goldwert oder Schmuckwert?',
        html: `<p>Beim Ankauf zählt meist nur das Gold: Der Schmuck wird eingeschmolzen, bezahlt wird der <strong>Materialwert</strong> abzüglich der Kosten des Ankäufers. Das ist für defekte, unmoderne oder einfache Stücke der realistische Preis.</p>
<p>Anders bei <strong>Markenschmuck, Antikem und Designerstücken</strong>: Hier kann der Wiederverkaufswert deutlich über dem Goldwert liegen. Solche Stücke sollten Sie bei einem Juwelier, einem Auktionshaus oder im Gebrauchtschmuck-Handel anbieten – und nicht einschmelzen lassen.</p>`
      },
      {
        h: 'Goldkette verkaufen',
        html: `<p>Den Stempel finden Sie meist am Verschluss oder an einem kleinen Plättchen daneben. Ketten wiegen je nach Machart sehr unterschiedlich: Hohl gearbeitete Ketten sehen schwer aus, enthalten aber wenig Gold. Wiegen Sie die Kette deshalb immer und rechnen Sie mit dem tatsächlichen Gewicht.</p>`
      },
      {
        h: 'Goldring verkaufen',
        html: `<p>Bei Ringen steht der Stempel innen in der Schiene. Ein schmaler Ring wiegt oft 2 bis 4 g, ein breiter Ehering 5 bis 10 g und mehr. Was ein Ring mit 585er Gold wert ist, zeigt auch die Seite <a href="/585-gold-wert/">585 Gold Wert</a>. Sitzen Steine im Ring, ziehen Sie deren Gewicht grob ab.</p>`
      },
      {
        h: 'Schmuck mit Steinen',
        html: `<p>Kleine Steine und Zirkonia werden beim Goldankauf in der Regel nicht bezahlt. Größere Diamanten oder Farbsteine können dagegen viel wert sein – lassen Sie sie vor dem Verkauf von einem Juwelier oder Gemmologen prüfen und gegebenenfalls ausfassen.</p>`
      },
      {
        h: 'Vergoldet ist nicht Gold',
        html: `<p>Stempel wie <strong>GP</strong> (gold plated), <strong>GF</strong> (gold filled), <strong>RG</strong> (rolled gold), „vergoldet“ oder „Doublé“ bedeuten: Das Stück ist nur mit Gold überzogen – galvanisch hauchdünn (vergoldet, GP) oder als aufgewalzte Schicht (GF, RG, Doublé). Der Goldanteil ist dann sehr gering. Echtes Gold trägt in Deutschland meist einen Feingehalt wie 333, 585 oder 750.</p>
<p>Steht auf goldfarbenem Schmuck <strong>925</strong> oder <strong>800</strong>, ist es vergoldetes Silber – bewerten Sie es mit dem <a href="/silberrechner/">Silberrechner</a>.</p>
<p>Wie Sie beim Verkauf vorgehen und welche Ankäufer es gibt, steht unter <a href="/gold-verkaufen/">Gold verkaufen</a>. Mehrere Stücke mit unterschiedlichem Stempel rechnen Sie mit dem <a href="/altgold-verkaufen/">Altgold-Rechner</a> zusammen.</p>`
      }
    ],
    faq: [
      ['Wo verkaufe ich am besten Goldschmuck?', 'Einfachen oder defekten Goldschmuck bei einem Goldankauf im Laden oder online, nachdem Sie mehrere Angebote verglichen haben. Markenschmuck und Antikes eher beim Juwelier, Auktionshaus oder im Gebrauchtschmuck-Handel, weil dort der Schmuckwert zählt.'],
      ['Was ist eine Goldkette wert?', 'Das ergibt sich aus Gewicht und Feingehalt. Eine 585er Kette mit 10 g enthält 5,85 g Feingold. Geben Sie Gewicht und Stempel oben ein, um den aktuellen Wert zu sehen.'],
      ['Wie erkenne ich echten Goldschmuck?', 'Am Feingehaltsstempel wie 333, 585 oder 750. Fehlt der Stempel oder steht dort GP, GF, RG oder Doublé, ist es meist kein massives Gold. Sicher ist nur eine Prüfung beim Ankäufer oder Goldschmied.'],
      ['Bekomme ich für die Steine im Schmuck Geld?', 'Für kleine Steine und Zirkonia meist nicht. Größere Diamanten und Farbsteine sollten Sie vor dem Verkauf gesondert schätzen lassen.']
    ]
  },
  {
    slug: 'altgold-verkaufen',
    nav: 'Altgold verkaufen',
    inNav: false,
    tile: 'Rechner für mehrere Stücke',
    keywords: 'altgold verkaufen 2.900 (KD 37) · altgold 880 (KD 22) · altgold rechner 480 · altgold ankauf · altgold schmuck verkaufen 90',
    title: 'Altgold verkaufen: Altgold-Rechner für mehrere Stücke',
    description: 'Altgold verkaufen: Mit dem Altgold-Rechner mehrere Stücke mit unterschiedlichem Stempel zusammenrechnen und sehen, was Ankäufer dafür zahlen.',
    h1: 'Altgold verkaufen: Was ist mein Altgold wert?',
    intro: 'Altgold besteht selten aus nur einem Feingehalt. Tragen Sie jedes Stück mit Gewicht und Stempel ein – der Rechner zählt alles zusammen und zeigt, was Ankäufer dafür ungefähr zahlen.',
    calc: { type: 'mix' },
    sections: [
      {
        h: 'Was zählt als Altgold?',
        html: `<p>Altgold ist alles Gold, das nicht mehr getragen oder gebraucht wird: defekte Ketten, einzelne Ohrringe, alte Ringe, verbogene Armbänder, Bruchgold. Beim Ankauf wird es eingeschmolzen, bezahlt wird der Goldanteil. Zahngold hat einen eigenen <a href="/zahngold-wert/">Zahngold-Rechner</a>, Münzen den <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>`
      },
      {
        h: 'Altgold richtig sortieren',
        html: `<p>Sortieren Sie Ihr Altgold vor dem Verkauf nach Stempel: 333, 585 und 750 getrennt. Wird ein gemischter Posten ungeprüft angekauft, wird er oft zum niedrigsten Feingehalt bewertet – dann verschenken Sie Geld. Stücke ohne erkennbaren Stempel legen Sie extra; der Ankäufer prüft sie, zum Beispiel per Röntgenfluoreszenz.</p>`
      },
      {
        h: 'So viel zahlen Ankäufer für Altgold',
        html: `<p>Grundlage ist der Materialwert: Gewicht × Feingehalt × <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>. Ankäufer ziehen davon Kosten für Prüfung, Scheidung und ihre Marge ab, deshalb zeigt der Rechner eine Spanne. Wie die Kalkulation im Detail aussieht, erklärt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>; den Ablauf beim Verkauf finden Sie unter <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>`
      }
    ],
    faq: [
      ['Was ist Altgold wert?', 'So viel wie das enthaltene Feingold: Gewicht × Feingehalt × Goldpreis pro Gramm. Ankäufer zahlen davon einen Teil. Tragen Sie Ihre Stücke oben ein, um den aktuellen Wert zu sehen.'],
      ['Wie viel bekomme ich für 1 Gramm Altgold?', 'Ein Gramm 585er Altgold enthält 0,585 g Feingold, ein Gramm 333er Altgold 0,333 g. Davon zahlen Ankäufer je nach Anbieter einen Teil des aktuellen Goldpreises.'],
      ['Lohnt es sich, kleine Mengen Altgold zu verkaufen?', 'Oft ja, schon wenige Gramm sind beim heutigen Goldpreis einiges wert. Achten Sie bei kleinen Mengen auf Mindestgebühren und Versandkosten des Ankäufers.'],
      ['Kann ich Zahngold zusammen mit Altgold verkaufen?', 'Viele Ankäufer nehmen beides an, bewerten Zahngold aber getrennt, weil die Legierungen anders sind. Geben Sie Zahngold deshalb separat an.']
    ]
  },
  {
    slug: '333-gold-wert',
    nav: '333er Gold',
    inNav: false,
    tile: '8 Karat · 33,3 % Gold',
    keywords: '333 gold wert 2.900 (KD 22) · goldpreis 333 pro gramm 1.000 (KD 20) · 333 gold rechner 40 · 333 gold preis pro gramm 70 · 8 karat gold wert 20',
    title: '333 Gold Wert berechnen – 8 Karat Gold mit Tageskurs',
    description: 'Was ist 333er Gold wert? Gewicht eingeben und den Wert von 8-Karat-Gold mit aktuellem Goldpreis sehen – inklusive Preis pro Gramm und Ankaufs-Richtwert.',
    h1: '333 Gold Wert: Was ist 333er Gold heute wert?',
    intro: '333er Gold enthält 33,3 % reines Gold, das entspricht 8 Karat. Geben Sie das Gewicht ein und Sie sehen sofort, was Ihr Schmuck nach aktuellem Goldkurs wert ist.',
    calc: { type: 'gold', preset: '333', weight: 10 },
    example: { fineness: '333', metal: 'gold' },
    sections: [
      { h: 'So berechnen Sie den Wert von 333er Gold', html: how('333') },
      {
        h: 'Goldpreis 333 pro Gramm',
        html: `<p>Aktuell ist ein Gramm 333er Gold (8 Karat) als Material <strong data-price="g333">–</strong> wert. Das ist der Goldpreis pro Gramm Feingold multipliziert mit ${de(Number('333') / 1000)}. Ankäufer zahlen davon einen Teil – die Tabelle oben zeigt Materialwert und Ankaufs-Richtwert für verschiedene Gewichte. Alle Feingehalte im Vergleich finden Sie unter <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>.</p>`,
      },
      {
        h: '333er Gold: günstiges Alltagsgold mit niedrigem Goldanteil',
        html: `<p>Bei 333er Gold ist nur ein Drittel des Gewichts Gold, der Rest sind vor allem Silber und Kupfer. Die Legierung ist hart, kratzfest und preiswert und wurde deshalb häufig für Alltagsschmuck wie Ketten, Armbänder und einfache Ringe verwendet. Typisch ist ein etwas blasserer, leicht rötlicher Farbton; mit der Zeit kann 333er Gold dunkler anlaufen.</p>
<p>In Deutschland darf 333er Gold als Gold verkauft werden. In einigen anderen Ländern gilt erst ein höherer Feingehalt als „Gold“ – Schmuck aus dem Ausland ist deshalb seltener 333 gestempelt. Steht <strong>585</strong> im Stempel, nutzen Sie den <a href="/585-gold-wert/">Rechner für 585er Gold</a>.</p>`
      },
      {
        h: 'Lohnt sich der Verkauf von 333er Gold?',
        html: `<p>Das hängt vor allem von der Menge ab: Weil nur ein Drittel Gold enthalten ist, kommt bei wenigen Gramm kein großer Betrag zusammen. Gute Ankäufer zahlen für 333er Gold aber einen ähnlichen Anteil am Materialwert wie für <a href="/585-gold-wert/">585er</a> oder <a href="/750-gold-wert/">750er Gold</a>. Vergleichen Sie mehrere Angebote und bieten Sie 333er Schmuck getrennt von höherwertigem Gold an, damit er nicht zum niedrigsten Feingehalt im Posten bewertet wird.</p>`
      }
    ],
    faq: [
      ['Wie viel ist 1 Gramm 333er Gold wert?', 'Ein Gramm 333er Gold enthält 0,333 g Feingold. Sein Materialwert ist also ein Drittel des aktuellen Goldpreises pro Gramm. Den genauen Betrag zeigt die Tabelle oben mit dem aktuellen Kurs.'],
      ['Ist 333er Gold echtes Gold?', 'Ja. 333er Gold ist eine Goldlegierung mit einem Drittel Feingold. Vergoldeter Schmuck oder Doublé ist dagegen nur mit einer dünnen Goldschicht überzogen und hat kaum Materialwert.'],
      ['Wie viel Karat hat 333er Gold?', '333er Gold entspricht 8 Karat. 24 Karat stehen für reines Gold, 8 von 24 Teilen sind ein Drittel.']
    ]
  },
  {
    slug: '585-gold-wert',
    nav: '585er Gold',
    tile: '14 Karat · 58,5 % Gold',
    keywords: 'goldwert 585 5.400 (KD 30) · 14 karat gold wert 1.300 (KD 28) · 585 gold wert 4.400 (KD 35) · goldpreis 585 pro gramm 1.300 (KD 28) · 14 karat gold wert 1.600 (KD 25) · 585 gold rechner 480 · 585 gold preis pro gramm 110',
    title: '585 Gold Wert und Preis pro Gramm heute – 14 Karat',
    description: 'Was ist 585er Gold (14 Karat) wert? Gewicht eingeben und den Wert mit aktuellem Goldpreis sehen – für Gelb-, Rot- und Weißgold.',
    h1: '585 Gold Wert: Was ist 585er Gold (14 Karat) heute wert?',
    intro: '585er Gold enthält 58,5 % reines Gold und entspricht 14 Karat. Es ist der häufigste Feingehalt bei Schmuck in Deutschland – vom Ehering bis zur Halskette.',
    calc: { type: 'gold', preset: '585', weight: 10 },
    example: { fineness: '585', metal: 'gold' },
    sections: [
      { h: 'So berechnen Sie den Wert von 585er Gold', html: how('585') },
      {
        h: 'Goldpreis 585 pro Gramm',
        html: `<p>Aktuell ist ein Gramm 585er Gold (14 Karat) als Material <strong data-price="g585">–</strong> wert. Das ist der Goldpreis pro Gramm Feingold multipliziert mit ${de(Number('585') / 1000)}. Ankäufer zahlen davon einen Teil – die Tabelle oben zeigt Materialwert und Ankaufs-Richtwert für verschiedene Gewichte. Alle Feingehalte im Vergleich finden Sie unter <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>.</p>`,
      },
      {
        h: '14 Karat Gold Wert: 585 und 14K sind dasselbe',
        html: `<p>Karat beschreibt den Goldanteil in 24 Teilen: 24 Karat sind reines Gold, 14 Karat sind 14/24 = 58,3 %. In Deutschland wird dafür der Stempel <strong>585</strong> verwendet, international oft <strong>14K</strong> oder <strong>14 kt</strong>. Für den Goldwert rechnen Sie beides gleich – geben Sie im Rechner einfach 585er Gold an. Schmuck mit 18 Karat bewerten Sie mit dem <a href="/750-gold-wert/">Rechner für 750er Gold</a>.</p>`
      },
      {
        h: '585er Gelbgold, Rotgold und Weißgold',
        html: `<p>Die Farbe entsteht durch die übrigen 41,5 % der Legierung: Mehr Kupfer ergibt Rotgold, Silber Gelbgold, Palladium oder Silber Weißgold. Der <strong>Goldanteil bleibt bei allen gleich</strong>. 585er Weißgold ist deshalb genauso viel Gold wert wie 585er Gelbgold; manche Ankäufer vergüten bei Weißgold zusätzlich enthaltenes Palladium.</p>`
      }
    ],
    faq: [
      ['Was ist 585 Gold wert?', '585er Gold besteht zu 58,5 % aus reinem Gold. Sein Wert ist Gewicht × 0,585 × Goldpreis pro Gramm – der Rechner oben zeigt den aktuellen Betrag für Ihr Gewicht.'],
      ['Wie viel ist 1 Gramm 585er Gold wert?', 'Ein Gramm 585er Gold enthält 0,585 g Feingold, also 58,5 % des Goldpreises pro Gramm. Die Tabelle oben zeigt den Wert mit dem aktuellen Kurs.'],
      ['Was ist ein 585er Goldring wert?', 'Ein schmaler Ring wiegt oft 2 bis 4 g, ein breiter Ehering 5 bis 10 g und mehr. Wiegen Sie Ihren Ring und geben Sie das Gewicht oben ein – Steine sollten Sie möglichst abziehen.'],
      ['Ist 14 Karat Gold dasselbe wie 585er Gold?', 'Ja. 14 Karat entsprechen rechnerisch 58,3 % Gold; in Deutschland wird der Feingehalt mit 585 gestempelt.']
    ]
  },
  {
    slug: '750-gold-wert',
    nav: '750er Gold',
    tile: '18 Karat · 75 % Gold',
    keywords: '750 gold preis 8.100 (KD 29) · goldpreis 750 3.600 (KD 20) · 750 gold wert 2.400 (KD 26) · goldpreis 750 pro gramm 1.000 (KD 22) · 18 karat gold wert 480 (KD 23) · weißgold wert 480 (KD 10) · 750 gold rechner 20',
    title: '750 Gold Preis pro Gramm heute – 18 Karat Wert berechnen',
    description: 'Was ist 750er Gold (18 Karat) wert? Gewicht eingeben und den Goldwert mit aktuellem Kurs sehen – auch für 750er Weißgold, Uhren und Markenschmuck.',
    h1: '750 Gold Wert: Was ist 750er Gold (18 Karat) heute wert?',
    intro: '750er Gold besteht zu drei Vierteln aus reinem Gold und entspricht 18 Karat. Es ist der Feingehalt für hochwertigen Schmuck, Uhrengehäuse und viele Weißgold-Stücke.',
    calc: { type: 'gold', preset: '750', weight: 10 },
    example: { fineness: '750', metal: 'gold' },
    sections: [
      { h: 'So berechnen Sie den Wert von 750er Gold', html: how('750') },
      {
        h: 'Goldpreis 750 pro Gramm',
        html: `<p>Aktuell ist ein Gramm 750er Gold (18 Karat) als Material <strong data-price="g750">–</strong> wert. Das ist der Goldpreis pro Gramm Feingold multipliziert mit ${de(Number('750') / 1000)}. Ankäufer zahlen davon einen Teil – die Tabelle oben zeigt Materialwert und Ankaufs-Richtwert für verschiedene Gewichte. Alle Feingehalte im Vergleich finden Sie unter <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>.</p>`,
      },
      {
        h: '18 Karat Gold Wert',
        html: `<p>18 von 24 Karat entsprechen genau 75 % Gold – deshalb der Stempel <strong>750</strong>, international auch <strong>18K</strong>. 750er Gold ist weicher und farbintensiver als <a href="/585-gold-wert/">585er Gold</a> und wird vor allem für Schmuck mit Edelsteinen, Trauringe gehobener Preisklassen und Uhrengehäuse verwendet.</p>`
      },
      {
        h: 'Weißgold Wert: 750er Weißgold richtig bewerten',
        html: `<p>Weißgold ist echtes Gold, das mit hellen Metallen wie Palladium oder Silber legiert ist. Viele Stücke sind zusätzlich <strong>rhodiniert</strong> – eine hauchdünne Schicht, die sie strahlend weiß macht, am Wert aber nichts ändert. Entscheidend ist der Stempel: 750er Weißgold enthält genauso 75 % Gold wie Gelbgold. Weißgold gibt es auch als 585er Legierung.</p>
<p>Bei Markenschmuck und Uhren kann der Wiederverkaufswert deutlich über dem reinen Goldwert liegen. Lassen Sie solche Stücke vor dem Einschmelzen einschätzen.</p>`
      }
    ],
    faq: [
      ['Wie viel ist 1 Gramm 750er Gold wert?', 'Ein Gramm 750er Gold enthält 0,75 g Feingold, also drei Viertel des Goldpreises pro Gramm. Den aktuellen Wert sehen Sie in der Tabelle oben.'],
      ['Ist 750er Gold 18 Karat?', 'Ja. 750er Gold besteht zu 75 % aus Gold, das entspricht 18 von 24 Karat.'],
      ['Ist Weißgold weniger wert als Gelbgold?', 'Nein. Bei gleichem Feingehalt enthält Weißgold genauso viel Gold. 750er Weißgold hat denselben Goldwert wie 750er Gelbgold.']
    ]
  },
  {
    slug: '21-karat-gold-preis',
    nav: '21 Karat Gold',
    inNav: false,
    keywords: '21 karat gold preis 3.600 (KD 21) · gold 21 karat preis 3.600 · arabisches gold 21 karat preis heute 880 · 875 gold',
    title: '21 Karat Gold Preis heute pro Gramm – 875er Gold berechnen',
    description: 'Was kostet 21 Karat Gold heute? Preis pro Gramm für 875er Gold nach aktuellem Kurs, Rechner für Ihr Gewicht und Hinweise zu arabischem Goldschmuck.',
    h1: '21 Karat Gold Preis: Was ist 875er Gold heute wert?',
    intro: '21 Karat Gold ist vor allem als arabischer und orientalischer Goldschmuck verbreitet. Gewicht eingeben – der Rechner zeigt den Wert nach aktuellem Goldkurs.',
    calc: { type: 'gold', preset: '875', weight: 10 },
    example: { fineness: '875', metal: 'gold', weights: '1,5,10,20,50' },
    sections: [
      { h: '21 Karat Gold: Preis pro Gramm', html: `<p><strong>Kurz gesagt:</strong> 1 Gramm 21 Karat Gold ist heute rund <span data-price="g875">–</span> wert (reiner Goldwert). 21 Karat bedeutet 21 von 24 Teilen Gold, also 87,5 % Feingold. Der Stempel lautet <strong>875</strong> oder <strong>21K</strong>.</p>
<div class="table-wrap"><table><thead><tr><th>Karat</th><th>Stempel</th><th class="num">Goldanteil</th><th class="num">Wert je Gramm heute</th></tr></thead><tbody><tr><td>18&nbsp;Karat</td><td>750</td><td class="num">75,0 %</td><td class="num"><span data-price="g750">–</span></td></tr><tr><td>21&nbsp;Karat</td><td>875</td><td class="num">87,5 %</td><td class="num"><span data-price="g875">–</span></td></tr><tr><td>22&nbsp;Karat</td><td>916</td><td class="num">91,7 %</td><td class="num"><span data-price="g916">–</span></td></tr><tr><td>24&nbsp;Karat</td><td>999</td><td class="num">99,9 %</td><td class="num"><span data-price="g999">–</span></td></tr></tbody></table></div>` },
      { h: 'Woher stammt 21 Karat Gold?', html: `<p>In Deutschland ist 21-karätiges Gold selten. Typisch ist es für Schmuck aus arabischen Ländern, Ägypten und Teilen Nordafrikas – etwa Armreifen, Ketten und Brautschmuck. Dort wird Schmuck meist nach Gewicht und Tageskurs gehandelt, zuzüglich eines Arbeitslohns. Hierzulande zählt beim Verkauf in der Regel nur der Goldgehalt.</p>` },
      { h: '21 Karat Gold verkaufen', html: `<p>Ankäufer zahlen für 875er Gold einen Preis nah am Materialwert, weil der Goldanteil hoch ist. Prüfen Sie vorher den Stempel: Fehlt er, testet der Händler das Gold. Holen Sie mehrere Angebote ein und vergleichen Sie sie mit dem Wert aus dem Rechner. Mehr dazu unter <a href="/gold-verkaufen/">Gold verkaufen</a> und im <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>. Für 22-karätigen Schmuck gibt es eine eigene Seite zum <a href="/22-karat-gold-preis/">22 Karat Gold Preis</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in 21 Karat?','21 Karat Gold besteht zu 87,5 % aus reinem Gold. Der Rest sind meist Silber und Kupfer.'],['Welcher Stempel steht auf 21 Karat Gold?','Üblich sind 875 oder 21K, bei arabischem Schmuck manchmal auch arabische Ziffern.'],['Ist 21 Karat mehr wert als 18 Karat?','Ja, pro Gramm. 21 Karat enthält 87,5 % Gold, 18 Karat (750) nur 75 %.']]
  },
  {
    slug: '22-karat-gold-preis',
    nav: '22 Karat Gold',
    inNav: false,
    keywords: '22 karat gold preis 5.400 (KD 24) · preis 22 karat gold 2.400 · 22 karat gold 1.900 · türkisches gold 22 karat preis 880 · 916 gold',
    title: '22 Karat Gold Preis heute pro Gramm – 916er Gold berechnen',
    description: 'Was kostet 22 Karat Gold heute? Preis pro Gramm für 916er Gold nach aktuellem Kurs und Rechner für türkischen und indischen Goldschmuck sowie Münzen.',
    h1: '22 Karat Gold Preis: Was ist 916er Gold heute wert?',
    intro: '22 Karat Gold steckt in türkischem und indischem Schmuck und in vielen Goldmünzen. Gewicht eingeben – der Rechner zeigt den Wert nach aktuellem Goldkurs.',
    calc: { type: 'gold', preset: '916', weight: 10 },
    example: { fineness: '916', metal: 'gold', weights: '1,5,10,20,50' },
    sections: [
      { h: '22 Karat Gold: Preis pro Gramm', html: `<p><strong>Kurz gesagt:</strong> 1 Gramm 22 Karat Gold ist heute rund <span data-price="g916">–</span> wert (reiner Goldwert). 22 Karat bedeutet 22 von 24 Teilen Gold, also rund 91,7 % Feingold. Der Stempel lautet <strong>916</strong> oder <strong>22K</strong>.</p>
<p>Zum Vergleich: 18 Karat (750) liegt bei <span data-price="g750">–</span>, 24 Karat (999) bei <span data-price="g999">–</span> je Gramm.</p>` },
      { h: 'Wo kommt 22 Karat Gold vor?', html: `<ul><li><strong>Türkischer Goldschmuck</strong> wie Armreifen und Ketten ist häufig 22-karätig.</li><li><strong>Indischer Schmuck</strong> wird traditionell in 22 Karat gefertigt, oft mit dem Stempel 916.</li><li><strong>Goldmünzen</strong> wie <a href="/kruegerrand-wert/">Krügerrand</a>, <a href="/sovereign-gold-wert/">Sovereign</a> und <a href="/american-eagle-gold-wert/">American Eagle</a> bestehen ebenfalls aus 22-karätigem Gold. Für Münzen rechnen Sie besser mit dem Münzrechner, weil dort das Feingewicht hinterlegt ist.</li></ul>` },
      { h: '22 Karat Gold verkaufen', html: `<p>Wegen des hohen Goldanteils liegen Ankaufspreise für 916er Gold nah am Materialwert. Fehlt ein Stempel, prüft der Händler das Metall. Vergleichen Sie mehrere Angebote mit dem Wert aus dem Rechner – siehe <a href="/gold-verkaufen/">Gold verkaufen</a>. Arabischen Schmuck mit 875er Stempel berechnen Sie auf der Seite <a href="/21-karat-gold-preis/">21 Karat Gold Preis</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in 22 Karat?','22 Karat Gold enthält rund 91,7 % reines Gold, gestempelt als 916.'],['Ist 916 Gold echtes Gold?','Ja. 916 ist der Stempel für 22 Karat Gold mit rund 91,7 % Goldanteil.'],['Warum ist türkisches Gold oft 22 Karat?','In der Türkei und in Indien wird Schmuck traditionell als Wertanlage gekauft und deshalb mit hohem Goldanteil gefertigt.']]
  },
  {
    slug: 'zahngold-wert',
    nav: 'Zahngold',
    tile: 'Kronen, Brücken, Inlays',
    keywords: 'zahngold wert 3.600 (KD 19) · zahngold ankauf 3.600 (CPC 4,19 $) · zahngold verkaufen 1.600 (KD 20) · zahngold rechner 480 (KD 11) · was ist zahngold wert 390 (KD 5) · wie viel ist 1 gramm zahngold wert 210 (KD 11)',
    title: 'Zahngold Wert berechnen – Zahngold-Rechner & Ankauf',
    description: 'Was ist Zahngold wert? Mit dem Zahngold-Rechner Kronen, Brücken und Inlays bewerten – und erfahren, worauf Sie beim Zahngold verkaufen achten sollten.',
    h1: 'Zahngold Wert: Was sind alte Kronen und Brücken wert?',
    intro: 'Alte Kronen, Brücken und Inlays enthalten oft mehr Gold, als man denkt. Mit dem Zahngold-Rechner schätzen Sie den Wert in wenigen Sekunden – auch wenn Sie die genaue Legierung nicht kennen.',
    calc: { type: 'dental', weight: 5 },
    sections: [
      {
        h: 'Warum der Zahngold-Wert nur eine Spanne sein kann',
        html: `<p>Zahngold ist eine Legierung aus Gold und anderen Metallen wie Platin, Palladium oder Silber. Der Goldanteil schwankt je nach Legierung stark. Hochgoldhaltige Legierungen sind kräftig gelb und schwer, goldreduzierte wirken blasser.</p>
<p>An Kronen und Brücken hängen oft noch Keramik oder Zahnreste, die nichts wert sind. Geben Sie deren geschätzten Anteil im Rechner an. Wenn Sie unsicher sind, wählen Sie bei der Legierung „Weiß ich nicht“ – dann ist die Spanne breiter.</p>
<p>Der Rechner bewertet nur den Goldanteil. Viele Ankäufer vergüten zusätzlich Platin und Palladium, der tatsächliche Erlös kann deshalb höher sein.</p>`
      },
      {
        h: 'Zahngold-Ankauf: wer kauft Zahngold?',
        html: `<p>Zahngold kaufen vor allem <strong>Scheideanstalten</strong> und spezialisierte Edelmetall-Ankäufer an, oft auch per Post. Sie analysieren die Legierung im Labor und vergüten Gold – gute Anbieter zusätzlich Platin, Palladium und Silber. Juweliere und allgemeine Goldankäufer nehmen Zahngold teils an, zahlen aber oft nur den Goldanteil. Vergleichen Sie deshalb, ob alle Edelmetalle bezahlt werden und ob die Analyse kostenlos ist.</p>`
      },
      {
        h: 'Zahngold verkaufen: so gehen Sie vor',
        html: `<ol>
<li><strong>Aushändigen lassen:</strong> In der Regel können Sie sich entfernten Zahnersatz von Ihrer Zahnarztpraxis mitgeben lassen – sprechen Sie das am besten schon vor der Behandlung an.</li>
<li><strong>Sammeln und wiegen:</strong> Grob reinigen, Keramik nicht mit Gewalt entfernen – das übernimmt der Ankäufer.</li>
<li><strong>Wert schätzen:</strong> Mit dem Zahngold-Rechner oben bekommen Sie eine realistische Spanne.</li>
<li><strong>Ankäufer wählen:</strong> Seriöse Scheideanstalten analysieren die Legierung genau und vergüten alle enthaltenen Edelmetalle. Fragen Sie vorab, ob Platin und Palladium mitbezahlt werden. Wie Ankäufer allgemein kalkulieren, zeigt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.</li>
<li><strong>Angebot prüfen:</strong> Ein gutes Angebot nennt Feingoldgehalt und Preis je Gramm. Stimmt es nicht, sollte die Rücksendung kostenlos sein.</li>
</ol>`
      }
    ],
    faq: [
      ['Was ist Zahngold wert?', 'So viel wie das enthaltene Gold und andere Edelmetalle. Goldfarbenes Zahngold enthält je nach Legierung etwa 40 bis über 80 % Gold, silberfarbene Legierungen oft kaum Gold, dafür Palladium oder Silber. Der Rechner oben schätzt den Goldanteil aus Gewicht, Legierung und Keramikanteil.'],
      ['Wie viel ist 1 Gramm Zahngold wert?', 'Ein Gramm hochgoldhaltiges Zahngold enthält etwa 0,7 bis 0,85 g Gold, selten mehr; goldreduzierte Legierungen deutlich weniger. Geben Sie 1 g in den Rechner ein, um die Spanne mit dem aktuellen Goldpreis zu sehen.'],
      ['Wie viel Gold ist in einer Zahnkrone?', 'Das hängt von Größe und Legierung ab. Eine Krone wiegt grob wenige Gramm, davon ist je nach Legierung etwa 40 % bis über drei Viertel Gold.'],
      ['Darf ich Zahngold verkaufen?', 'In aller Regel ja. Wenn Ihnen die Praxis den entfernten Zahnersatz aushändigt, können Sie ihn behalten, verkaufen oder spenden.'],
      ['Warum zeigt der Zahngold-Rechner eine so große Spanne?', 'Weil der Goldanteil von Zahngold je nach Legierung stark schwankt. Den genauen Gehalt ermittelt erst die Analyse beim Ankäufer.']
    ]
  },
  {
    slug: 'goldbarren-wert',
    nav: 'Goldbarren',
    inNav: false,
    tile: '1 g bis 1 kg',
    keywords: 'goldbarren 22.200 · goldbarren kaufen 40.500 (KD 16) · goldbarren preis 6.600 · gold barren 4.400 · goldbarren 100g · goldbarren 1 kg · goldbarren 1g',
    title: 'Goldbarren Wert heute: 1 g bis 1 kg – was ist 1 kg Gold wert?',
    description: 'Was ist ein Goldbarren wert? Aktueller Goldwert für Barren von 1 g bis 1 kg, was Händler beim Ankauf zahlen und worauf Sie beim Goldbarren kaufen achten.',
    h1: 'Goldbarren Wert: Was ist mein Goldbarren heute wert?',
    intro: 'Wählen Sie Gewicht und Anzahl Ihrer Goldbarren. Der Rechner zeigt den aktuellen Goldwert und was Händler beim Ankauf ungefähr zahlen – kleine Barren etwas weniger als große.',
    calc: { type: 'bars', preset: 'bar-100', count: 1 },
    sections: [
      {
        h: 'Goldbarren-Preise nach Gewicht',
        html: `<p><strong>Kurz gesagt:</strong> 1 kg Gold (Feingold 999,9) ist heute rund <span data-price="goldw1000">–</span> wert, ein 100-g-Barren rund <span data-price="goldw100">–</span> (reiner Goldwert ohne Händleraufschlag).</p>
<div class="table-wrap"><table><thead><tr><th>Barren (999,9 Feingold)</th><th class="num">Goldwert heute</th></tr></thead><tbody>
<tr><td>1 g</td><td class="num"><span data-price="goldq1000">–</span></td></tr>
<tr><td>5 g</td><td class="num"><span data-price="goldq5000">–</span></td></tr>
<tr><td>10 g</td><td class="num"><span data-price="goldq10000">–</span></td></tr>
<tr><td>20 g</td><td class="num"><span data-price="goldq20000">–</span></td></tr>
<tr><td>1 Unze (31,1 g)</td><td class="num"><span data-price="goldozv">–</span></td></tr>
<tr><td>50 g</td><td class="num"><span data-price="goldq50000">–</span></td></tr>
<tr><td>100 g</td><td class="num"><span data-price="goldq100000">–</span></td></tr>
<tr><td>250 g</td><td class="num"><span data-price="goldq250000">–</span></td></tr>
<tr><td>500 g</td><td class="num"><span data-price="goldq500000">–</span></td></tr>
<tr><td>1 kg</td><td class="num"><span data-price="goldw1000">–</span></td></tr>
</tbody></table></div>
<p>Die Tabelle zeigt den reinen Goldwert. Was Sie beim Kauf bezahlen und beim Verkauf erhalten, weicht davon ab – siehe unten.</p>`
      },
      {
        h: 'Goldbarren verkaufen: Was zahlen Händler?',
        html: `<p>Anlagebarren aus Feingold (999,9) müssen nicht eingeschmolzen werden. Händler kaufen sie deshalb nah am Goldpreis an – deutlich näher als Schmuck oder <a href="/altgold-verkaufen/">Altgold</a>. Barren bekannter Hersteller mit Zertifikat und unbeschädigter Verpackung lassen sich am einfachsten verkaufen. Wie der Verkauf abläuft, steht unter <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>`
      },
      {
        h: 'Goldbarren kaufen: worauf achten?',
        html: `<ul>
<li><strong>Aufschlag:</strong> Beim Kauf zahlen Sie mehr als den Goldwert, weil Herstellung und Händlermarge dazukommen. Bei kleinen Barren ist dieser Aufschlag im Verhältnis deutlich höher als bei großen.</li>
<li><strong>Keine Mehrwertsteuer:</strong> Anlagegold ist in Deutschland und der EU von der Umsatzsteuer befreit.</li>
<li><strong>Stückelung:</strong> Mehrere kleinere Barren kosten mehr, lassen sich später aber flexibler verkaufen als ein großer.</li>
<li><strong>Seriöse Herkunft:</strong> Kaufen Sie bei etablierten Händlern; Barren bekannter Hersteller tragen Gewicht, Feingehalt, Hersteller und oft eine Seriennummer.</li>
</ul>`
      }
    ],
    faq: [
      ['Was ist ein 100-g-Goldbarren wert?', 'Ein 100-g-Barren aus 999,9er Feingold wird mit 100 g Feingold gerechnet. Seinen aktuellen Goldwert zeigt die Tabelle; beim Verkauf zahlen Händler etwas weniger, beim Kauf etwas mehr.'],
      ['Muss ich auf Goldbarren Mehrwertsteuer zahlen?', 'Nein. Anlagegold, zu dem Goldbarren mit einem Feingehalt von mindestens 995 gehören, ist in der EU von der Umsatzsteuer befreit.'],
      ['Sind kleine Goldbarren sinnvoll?', 'Kleine Barren sind flexibel, haben aber einen höheren Aufschlag je Gramm. Bei größeren Beträgen sind größere Barren meist günstiger.'],
      ['Wie viel bekomme ich beim Verkauf eines Goldbarrens?', 'Händler zahlen für Anlagebarren meist nah am Goldpreis. Der Rechner oben zeigt eine realistische Spanne für Ihren Barren.']
    ]
  },
  {
    slug: 'goldmuenzen-wert',
    nav: 'Goldmünzen',
    tile: 'Krügerrand, 20 Mark, Vreneli …',
    keywords: 'goldmünzen wert 1.300 (KD 12) · goldmünzen 12.100 (KD 20) · wert von goldmünzen 4.100 (Thema) · münzen aus gold 260',
    title: 'Goldmünzen Wert berechnen: Anlagemünzen und alte Münzen',
    description: 'Was ist Ihre Goldmünze wert? Münze und Anzahl wählen und den Goldwert sehen – für Maple Leaf, Philharmoniker, Vreneli, 20 Mark, Dukaten und mehr.',
    h1: 'Goldmünzen Wert: Was ist meine Goldmünze heute wert?',
    intro: 'Wählen Sie Ihre Goldmünze und die Anzahl. Der Rechner zeigt den Goldwert nach aktuellem Kurs und einen Richtwert, was Händler beim Ankauf typischerweise zahlen.',
    calc: { type: 'coins', preset: 'philharmoniker' },
    coinTable: true,
    sections: [
      {
        h: 'Anlagemünzen und historische Münzen',
        html: `<p><strong>Anlagemünzen</strong> wie <a href="/kruegerrand-wert/">Krügerrand</a>, Maple Leaf oder Wiener Philharmoniker enthalten genau definierte Mengen Feingold, meist eine Unze (31,1 g). Händler kaufen sie nah am Goldwert an.</p>
<p><strong>Historische Münzen</strong> wie 20 Mark aus dem Kaiserreich, Vreneli oder Dukaten haben ebenfalls einen festen Goldgehalt. Bei seltenen Jahrgängen oder sehr gutem Zustand kann der Sammlerwert aber deutlich über dem Goldwert liegen. Lassen Sie solche Münzen vor dem Verkauf von einem Münzhändler einschätzen. Was Händler beim Ankauf üblicherweise abziehen, erklärt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.</p>`
      },
      {
        h: 'Einzelne Goldmünzen im Detail',
        html: `<p>Eigene Seiten mit Daten, Größen und Hinweisen zum Sammlerwert gibt es für <a href="/maple-leaf-gold-wert/">Maple Leaf</a>, <a href="/philharmoniker-gold-wert/">Wiener Philharmoniker</a>, <a href="/kruegerrand-wert/">Krügerrand</a>, <a href="/american-eagle-gold-wert/">American Eagle</a>, <a href="/britannia-gold-wert/">Britannia</a>, <a href="/kaenguru-gold-wert/">Känguru</a>, <a href="/vreneli-wert/">Vreneli</a>, <a href="/20-mark-gold-wert/">20 Mark</a>, <a href="/sovereign-gold-wert/">Sovereign</a>, <a href="/dukat-gold-wert/">Dukaten</a> und die deutschen <a href="/100-euro-goldmuenze-wert/">100-Euro-Goldmünzen</a>.</p>`
      }
    ],
    faq: [
      ['Wie viel Gold ist in einem Krügerrand?', 'Ein Krügerrand zu einer Unze enthält 31,1 g Feingold. Alle Größen und Daten finden Sie auf der Seite Krügerrand Wert.'],
      ['Welche Goldmünzen werden am besten angekauft?', 'Bekannte Anlagemünzen wie Krügerrand, Maple Leaf oder Wiener Philharmoniker werden am nächsten am Goldpreis angekauft. Historische Münzen wie 20 Mark oder Vreneli liegen meist etwas darunter, sofern sie keinen Sammlerwert haben.'],
      ['Warum zahlen Händler bei Münzen mehr als bei Altgold?', 'Anlagemünzen müssen nicht eingeschmolzen werden, sondern können direkt weiterverkauft werden. Deshalb ist der Abschlag kleiner.']
    ]
  },
  {
    slug: 'kruegerrand-wert',
    nav: 'Krügerrand',
    inNav: false,
    group: 'muenzen',
    tile: 'Die bekannteste Goldmünze',
    keywords: 'krügerrand wert 22.200 (KD 27)',
    title: 'Krügerrand Wert heute – was ist ein Krügerrand wert?',
    description: 'Krügerrand Wert heute: Goldwert einer Krügerrand-Münze mit aktuellem Goldpreis berechnen – für 1 Unze und Teilstücke, inklusive Ankaufs-Richtwert.',
    h1: 'Krügerrand Wert: Was ist ein Krügerrand heute wert?',
    intro: 'Der Krügerrand ist die bekannteste Goldmünze der Welt. Ein Krügerrand zu einer Unze enthält genau eine Feinunze, also 31,1035 g Feingold – sein Wert folgt deshalb fast eins zu eins dem Goldpreis.',
    calc: { type: 'coins', preset: 'kruegerrand' },
    sections: [
      {
        h: 'Was macht den Wert eines Krügerrands aus?',
        html: `<p>Der Krügerrand wird seit 1967 in Südafrika geprägt. Er besteht aus 22-karätigem Gold (916,7) und Kupfer, wiegt 33,93 g und enthält genau eine Feinunze Gold. Das Kupfer macht die Münze kratzfester und gibt ihr den typischen rötlichen Goldton.</p>
<p>Weil der Krügerrand weltweit bekannt ist, kaufen Händler ihn sehr nah am Goldwert an. Der Rechner zeigt den aktuellen Goldwert und eine Spanne für den Ankauf; den Kurs je Gramm finden Sie unter <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>.</p>`
      },
      {
        h: 'Krügerrand-Teilstücke',
        html: `<p>Neben der Unze gibt es den Krügerrand seit 1980 auch als 1/2, 1/4 und 1/10 Unze. Wählen Sie im Rechner einfach das passende Teilstück.</p>
<div class="table-wrap"><table><thead><tr><th>Krügerrand</th><th class="num">Gesamtgewicht</th><th class="num">Feingold</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">33,93 g</td><td class="num">31,10 g</td></tr><tr><td>1/2 Unze</td><td class="num">16,97 g</td><td class="num">15,55 g</td></tr><tr><td>1/4 Unze</td><td class="num">8,48 g</td><td class="num">7,78 g</td></tr><tr><td>1/10 Unze</td><td class="num">3,39 g</td><td class="num">3,11 g</td></tr></tbody></table></div>`
      },
      {
        h: 'Krügerrand verkaufen',
        html: `<p>Bieten Sie Krügerrand-Münzen getrennt von Altgold an und vergleichen Sie die Ankaufspreise mehrerer Händler. Gut erhaltene Münzen ohne Kratzer und in Originalverpackung erzielen eher den Höchstpreis. Weitere Münzen finden Sie im <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>
<p>Den Krügerrand aus Silber bewerten Sie unter <a href="/kruegerrand-silber-wert/">Krügerrand Silber</a>.</p>`
      }
    ],
    faq: [
      ['Wie viel ist ein Krügerrand heute wert?', 'Sein Goldwert entspricht dem aktuellen Preis einer Feinunze Gold. Den genauen Betrag zeigt der Rechner oben mit dem aktuellen Kurs.'],
      ['Wie schwer ist ein Krügerrand?', 'Ein Krügerrand zu einer Unze wiegt 33,93 g und enthält 31,1035 g Feingold.'],
      ['Ist der Krügerrand aus reinem Gold?', 'Nein. Er besteht zu 91,67 % aus Gold und zu einem Rest aus Kupfer. Die Gesamtmenge an Feingold beträgt trotzdem genau eine Unze.']
    ]
  },
  {
    slug: 'maple-leaf-gold-wert',
    nav: 'Maple Leaf',
    inNav: false,
    group: 'muenzen',
    keywords: 'maple leaf gold wert · maple leaf goldmünze wert · maple leaf 1 oz gold · maple leaf 1/10 unze',
    title: 'Maple Leaf Gold Wert heute: Goldwert und Ankauf',
    description: 'Was ist ein Maple Leaf aus Gold wert? Aktueller Goldwert für 1 Unze und Teilstücke, Daten zur kanadischen Münze und was Händler beim Ankauf zahlen.',
    h1: 'Maple Leaf Gold: Was ist die Münze heute wert?',
    intro: 'Der Maple Leaf aus Kanada ist eine der meistgehandelten Goldmünzen der Welt. Wählen Sie die Münze und die Anzahl – Teilstücke finden Sie in der Liste als „Teilstück 1/2 Unze“ usw. Der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'maple' },
    sections: [
      { h: 'Maple Leaf: Daten und Größen', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Kanada (Royal Canadian Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>1979</td></tr><tr><th scope="row">Nennwert (1 Unze)</th><td>50 Kanadische Dollar</td></tr><tr><th scope="row">Feingehalt</th><td>999,9 (seit Ende 1982, zuvor 999)</td></tr><tr><th scope="row">Gewicht</th><td>31,1035 g</td></tr><tr><th scope="row">Feingold</th><td>31,1035 g (1 Unze)</td></tr></tbody></table></div>
<p>Der Maple Leaf besteht aus reinem Feingold ohne Beimischung. Er zeigt auf der Rückseite das kanadische Ahornblatt, auf der Vorderseite das Porträt des Monarchen (bis 2023 Elizabeth II., seither Charles III.). Neuere Jahrgänge tragen feine Radiallinien und ein mikrograviertes Ahornblatt als Sicherheitsmerkmale.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldozv">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr></tbody></table></div>` },
      { h: 'Kratzer und Flecken beim Maple Leaf', html: `<p>Reines Feingold ist weich. Beim Maple Leaf sieht man deshalb häufig Kratzer, Kontaktspuren oder kleine Milchflecken. Am Goldgehalt ändern sie nichts – einige Händler ziehen für stark beschädigte Münzen aber etwas ab. Bewahren Sie Münzen am besten in der Originalkapsel auf.</p>` },
      { h: 'Maple Leaf verkaufen', html: `<p>Die Münze wird nicht eingeschmolzen, sondern direkt weiterverkauft. Händler zahlen deshalb nah am Goldpreis – der Rechner oben zeigt eine realistische Spanne. Vergleichen Sie mindestens zwei Angebote am selben Tag; den Ablauf beschreibt die Seite <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>
<p>Den Maple Leaf aus Silber bewerten Sie unter <a href="/maple-leaf-silber-wert/">Maple Leaf Silber</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einem Maple Leaf?','Ein Maple Leaf zu einer Unze enthält 31,1035 g Feingold mit einem Feingehalt von 999,9.'],['Gibt es den Maple Leaf auch kleiner?','Ja, unter anderem als 1/2, 1/4 und 1/10 Unze. Den Goldwert der Teilstücke zeigt die Tabelle auf dieser Seite.'],['Ist der Maple Leaf mehrwertsteuerfrei?','Der Maple Leaf erfüllt die Voraussetzungen für Anlagegold und ist in Deutschland beim Kauf von der Mehrwertsteuer befreit; beim Verkauf durch Privatpersonen fällt ohnehin keine an.']]
  },
  {
    slug: 'philharmoniker-gold-wert',
    nav: 'Wiener Philharmoniker',
    inNav: false,
    group: 'muenzen',
    keywords: 'philharmoniker gold wert · wiener philharmoniker goldmünze wert · philharmoniker 1 unze',
    title: 'Wiener Philharmoniker Gold Wert: Goldwert und Ankauf',
    description: 'Was ist ein Wiener Philharmoniker aus Gold wert? Aktueller Goldwert für 1 Unze und Teilstücke, Daten zur österreichischen Münze und Ankaufspreise.',
    h1: 'Wiener Philharmoniker Gold: Was ist die Münze heute wert?',
    intro: 'Der Wiener Philharmoniker ist eine der beliebtesten Goldmünzen in Deutschland und Österreich. Wählen Sie die Münze und die Anzahl – Teilstücke finden Sie in der Liste als „Teilstück 1/2 Unze“ usw. Der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'philharmoniker' },
    sections: [
      { h: 'Wiener Philharmoniker: Daten und Größen', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Österreich (Münze Österreich)</td></tr><tr><th scope="row">Erstausgabe</th><td>1989</td></tr><tr><th scope="row">Nennwert (1 Unze)</th><td>2.000 Schilling (bis 2001), seit 2002 100 Euro</td></tr><tr><th scope="row">Feingehalt</th><td>999,9</td></tr><tr><th scope="row">Gewicht</th><td>31,1035 g</td></tr><tr><th scope="row">Feingold</th><td>31,1035 g (1 Unze)</td></tr></tbody></table></div>
<p>Die Vorderseite zeigt die große Orgel im Goldenen Saal des Wiener Musikvereins, die Rückseite Instrumente der Wiener Philharmoniker. Die Münze gilt als einzige Gold-Anlagemünze mit einem Nennwert in Euro.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldozv">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr><tr><td>1/25 Unze (seit 2014)</td><td class="num">1,24 g</td><td class="num"><span data-price="goldq1244">–</span></td></tr></tbody></table></div>` },
      { h: 'Schilling oder Euro – spielt das eine Rolle?', html: `<p>Für den Goldwert nicht: Ausgaben mit Schilling-Nennwert (1989–2001) enthalten genauso viel Gold wie die Euro-Ausgaben. Händler kaufen beide Varianten zum gleichen Preis an. Nur sehr gut erhaltene Stücke in Originalverpackung lassen sich manchmal etwas leichter verkaufen.</p>` },
      { h: 'Wiener Philharmoniker verkaufen', html: `<p>Die Münze wird nicht eingeschmolzen, sondern direkt weiterverkauft. Händler zahlen deshalb nah am Goldpreis – der Rechner oben zeigt eine realistische Spanne. Vergleichen Sie mindestens zwei Angebote am selben Tag; den Ablauf beschreibt die Seite <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>
<p>Den Philharmoniker aus Silber bewerten Sie unter <a href="/philharmoniker-silber-wert/">Wiener Philharmoniker Silber</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einem Wiener Philharmoniker?','Die 1-Unzen-Münze enthält 31,1035 g Feingold mit einem Feingehalt von 999,9.'],['Ist ein Philharmoniker in Schilling weniger wert?','Nein. Der Goldgehalt ist identisch, Händler zahlen für Schilling- und Euro-Ausgaben denselben Preis.'],['Ist der Wiener Philharmoniker mehrwertsteuerfrei?','Der Wiener Philharmoniker erfüllt die Voraussetzungen für Anlagegold und ist in Deutschland beim Kauf von der Mehrwertsteuer befreit; beim Verkauf durch Privatpersonen fällt ohnehin keine an.']]
  },
  {
    slug: 'american-eagle-gold-wert',
    nav: 'American Eagle',
    inNav: false,
    group: 'muenzen',
    keywords: 'american eagle gold wert · american eagle goldmünze · gold eagle 1 oz',
    title: 'American Eagle Gold: Wert heute in Euro, 1 bis 1/10 Unze',
    description: 'Was ist ein American Eagle aus Gold wert? Goldwert der 22-karätigen US-Münze nach aktuellem Kurs, Daten zu Gewicht und Legierung und Ankaufspreise.',
    h1: 'American Eagle Gold: Was ist die Münze heute wert?',
    intro: 'Der American Eagle ist die offizielle Goldmünze der USA. Sie wiegt mehr als eine Unze, enthält aber genau eine Feinunze Gold – der Rechner zeigt den aktuellen Wert.',
    calc: { type: 'coins', preset: 'eagle' },
    sections: [
      { h: 'American Eagle: Daten und Größen', html: `<p><strong>Kurz gesagt:</strong> Ein American Eagle zu 1 Unze enthält 31,1 g Feingold und ist heute rund <span data-price="goldozv">–</span> wert (reiner Goldwert).</p>
<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>USA (United States Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>1986</td></tr><tr><th scope="row">Nennwert (1 Unze)</th><td>50 US-Dollar</td></tr><tr><th scope="row">Feingehalt</th><td>916,7 (22 Karat), legiert mit Silber und Kupfer</td></tr><tr><th scope="row">Gewicht</th><td>33,93 g</td></tr><tr><th scope="row">Feingold</th><td>31,1035 g (1 Unze)</td></tr></tbody></table></div>
<p>Die Vorderseite zeigt Lady Liberty nach dem Entwurf von Augustus Saint-Gaudens. Die Rückseite zeigte bis 2021 eine Adlerfamilie, seit Mitte 2021 einen Adlerkopf.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldozv">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr></tbody></table></div>` },
      { h: 'Warum wiegt ein American Eagle mehr als eine Unze?', html: `<p>Die Münze besteht aus 22-karätigem Gold. Silber und Kupfer machen sie härter und kratzfester, erhöhen aber das Gewicht auf 33,93 g. Für den Wert zählt nur das Feingold: genau eine Unze, also gleich viel wie beim <a href="/maple-leaf-gold-wert/">Maple Leaf</a> oder <a href="/kruegerrand-wert/">Krügerrand</a>.</p>` },
      { h: 'American Eagle verkaufen', html: `<p>Die Münze wird nicht eingeschmolzen, sondern direkt weiterverkauft. Händler zahlen deshalb nah am Goldpreis – der Rechner oben zeigt eine realistische Spanne. Vergleichen Sie mindestens zwei Angebote am selben Tag; den Ablauf beschreibt die Seite <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einem American Eagle?','Eine 1-Unzen-Münze enthält 31,1035 g Feingold, obwohl sie insgesamt 33,93 g wiegt.'],['Ist ein American Eagle weniger wert als ein Maple Leaf?','Nein. Beide enthalten genau eine Unze Gold und werden nah am Goldpreis angekauft.'],['Ist der American Eagle mehrwertsteuerfrei?','Der American Eagle erfüllt die Voraussetzungen für Anlagegold und ist in Deutschland beim Kauf von der Mehrwertsteuer befreit; beim Verkauf durch Privatpersonen fällt ohnehin keine an.']]
  },
  {
    slug: 'britannia-gold-wert',
    nav: 'Britannia',
    inNav: false,
    group: 'muenzen',
    keywords: 'britannia gold wert · britannia goldmünze · britannia 1 oz gold',
    title: 'Britannia Gold: Wert heute in Euro, 1 bis 1/10 Unze',
    description: 'Was ist eine Britannia aus Gold wert? Aktueller Goldwert der britischen Anlagemünze, Unterschiede alter und neuer Jahrgänge und was Händler zahlen.',
    h1: 'Britannia Gold: Was ist die Münze heute wert?',
    intro: 'Die Britannia ist die Anlagemünze der britischen Royal Mint. Alte und neue Jahrgänge unterscheiden sich in der Legierung – der Goldgehalt ist gleich.',
    calc: { type: 'coins', preset: 'britannia' },
    sections: [
      { h: 'Britannia: Daten und Größen', html: `<p><strong>Kurz gesagt:</strong> Eine Britannia zu 1 Unze enthält 31,1 g Feingold und ist heute rund <span data-price="goldozv">–</span> wert (reiner Goldwert).</p>
<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Großbritannien (The Royal Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>1987</td></tr><tr><th scope="row">Nennwert (1 Unze)</th><td>100 Pfund</td></tr><tr><th scope="row">Feingehalt</th><td>999,9 seit 2013; 1987–2012: 916,7 (22 Karat)</td></tr><tr><th scope="row">Gewicht</th><td>31,1035 g (seit 2013), davor 34,05 g</td></tr><tr><th scope="row">Feingold</th><td>31,1035 g (1 Unze)</td></tr></tbody></table></div>
<p>Die Britannia zeigt die Personifikation Großbritanniens mit Schild und Dreizack. Seit 2021 tragen neue Jahrgänge zusätzliche Sicherheitsmerkmale gegen Fälschungen.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldozv">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr></tbody></table></div>` },
      { h: 'Alte und neue Britannia unterscheiden', html: `<p>Bis 2012 war die Britannia aus 22-karätigem Gold: 1987 bis 1989 mit Kupfer, ab 1990 mit Silber legiert. Diese Münzen wiegen 34,05 g und enthalten trotzdem genau eine Unze Gold. Seit 2013 ist die Britannia aus Feingold (999,9). Für den Goldwert ist der Jahrgang deshalb egal.</p>` },
      { h: 'Britannia verkaufen', html: `<p>Die Münze wird nicht eingeschmolzen, sondern direkt weiterverkauft. Händler zahlen deshalb nah am Goldpreis – der Rechner oben zeigt eine realistische Spanne. Vergleichen Sie mindestens zwei Angebote am selben Tag; den Ablauf beschreibt die Seite <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einer Britannia?','Jede 1-Unzen-Britannia enthält 31,1035 g Feingold – die alten 22-karätigen Jahrgänge genauso wie die neuen aus 999,9er Gold.'],['Warum wiegen alte Britannias mehr?','Weil sie bis 2012 mit Kupfer oder Silber legiert waren. Das zusätzliche Metall erhöht das Gewicht, nicht den Goldgehalt.'],['Ist die Britannia mehrwertsteuerfrei?','Die Britannia erfüllt die Voraussetzungen für Anlagegold und ist in Deutschland beim Kauf von der Mehrwertsteuer befreit; beim Verkauf durch Privatpersonen fällt ohnehin keine an.']]
  },
  {
    slug: 'kaenguru-gold-wert',
    nav: 'Känguru (Nugget)',
    inNav: false,
    group: 'muenzen',
    keywords: 'känguru gold wert · nugget goldmünze wert · australian kangaroo gold · känguru 1 oz',
    title: 'Känguru Gold (Nugget): Wert heute in Euro, alle Größen',
    description: 'Was ist eine Känguru-Goldmünze aus Australien wert? Goldwert der Nugget-Münze nach aktuellem Kurs, Daten zur Perth Mint und Ankaufspreise.',
    h1: 'Känguru Gold: Was ist die australische Goldmünze heute wert?',
    intro: 'Die australische Goldmünze der Perth Mint ist auch als „Nugget“ bekannt. Wählen Sie die Münze und die Anzahl – Teilstücke finden Sie in der Liste als „Teilstück 1/2 Unze“ usw. Der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'kaenguru' },
    sections: [
      { h: 'Känguru-Goldmünze: Daten und Größen', html: `<p><strong>Kurz gesagt:</strong> Eine Känguru-Goldmünze zu 1 Unze enthält 31,1 g Feingold und ist heute rund <span data-price="goldozv">–</span> wert (reiner Goldwert).</p>
<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Australien (Perth Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>1986, zunächst mit Nugget-Motiv</td></tr><tr><th scope="row">Nennwert (1 Unze)</th><td>100 Australische Dollar</td></tr><tr><th scope="row">Feingehalt</th><td>999,9</td></tr><tr><th scope="row">Gewicht</th><td>31,1035 g</td></tr><tr><th scope="row">Feingold</th><td>31,1035 g (1 Unze)</td></tr></tbody></table></div>
<p>In den ersten Jahren zeigte die Münze Goldnuggets, seit 1989 ein Känguru. Das Motiv wechselt jedes Jahr – deshalb sprechen viele Händler bis heute vom „Nugget“.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldozv">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr></tbody></table></div>` },
      { h: 'Jährlich neues Motiv – spielt der Jahrgang eine Rolle?', html: `<p>Für den Goldwert nicht: Jeder Jahrgang enthält gleich viel Gold. Einzelne frühe Nugget-Jahrgänge oder limitierte Sonderausgaben werden unter Sammlern teils höher gehandelt. Prüfen lassen lohnt sich nur bei besonderen Stücken.</p>` },
      { h: 'Känguru (Nugget) verkaufen', html: `<p>Die Münze wird nicht eingeschmolzen, sondern direkt weiterverkauft. Händler zahlen deshalb nah am Goldpreis – der Rechner oben zeigt eine realistische Spanne. Vergleichen Sie mindestens zwei Angebote am selben Tag; den Ablauf beschreibt die Seite <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>` }
    ],
    faq: [['Ist Känguru dasselbe wie Nugget?','Ja. Es ist dieselbe Münze der Perth Mint – bis 1988 mit Nugget-Motiv, seither mit Känguru.'],['Wie viel Gold ist in einer Känguru-Münze?','Die 1-Unzen-Münze enthält 31,1035 g Feingold mit einem Feingehalt von 999,9.'],['Ist die Känguru-Goldmünze mehrwertsteuerfrei?','Die Känguru-Goldmünze erfüllt die Voraussetzungen für Anlagegold und ist in Deutschland beim Kauf von der Mehrwertsteuer befreit; beim Verkauf durch Privatpersonen fällt ohnehin keine an.']]
  },
  {
    slug: 'vreneli-wert',
    nav: 'Vreneli',
    inNav: false,
    group: 'muenzen',
    keywords: 'vreneli wert 390 (KD 18) · vreneli gold wert · 20 franken gold wert · 10 franken vreneli wert',
    title: 'Vreneli Wert in Euro: Was ist ein 20-Franken-Vreneli wert?',
    description: 'Was ist ein Vreneli wert? Goldwert für 20 und 10 Franken Vreneli nach aktuellem Kurs, Gewicht und Feingehalt sowie Hinweise zu seltenen Jahrgängen.',
    h1: 'Vreneli Wert: Was ist ein 20-Franken-Vreneli heute wert?',
    intro: 'Das Vreneli ist die bekannteste Schweizer Goldmünze. Wählen Sie 20 oder 10 Franken und die Anzahl – der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'vreneli' },
    sections: [
      { h: 'Vreneli: 20 und 10 Franken im Vergleich', html: `<p><strong>Kurz gesagt:</strong> Ein 20-Franken-Vreneli ist heute rund <span data-price="goldq5806">–</span> wert (reiner Goldwert), ein 10-Franken-Vreneli rund <span data-price="goldq2903">–</span>.</p>
<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Schweiz</td></tr><tr><th scope="row">Prägejahre</th><td>1897 bis 1949 (nicht in jedem Jahr)</td></tr><tr><th scope="row">Feingehalt</th><td>900</td></tr><tr><th scope="row">Gewicht</th><td>6,45 g (20 Franken) · 3,226 g (10 Franken)</td></tr><tr><th scope="row">Feingold</th><td>5,806 g (20 Franken) · 2,903 g (10 Franken)</td></tr></tbody></table></div>
<p>Die Vorderseite zeigt einen Frauenkopf vor Alpenpanorama, im Volksmund „Vreneli“ genannt. Das 10-Franken-Vreneli wurde von 1911 bis 1922 geprägt und enthält genau halb so viel Gold.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>20 Franken</td><td class="num">5,806 g</td><td class="num"><span data-price="goldq5806">–</span></td></tr><tr><td>10 Franken</td><td class="num">2,903 g</td><td class="num"><span data-price="goldq2903">–</span></td></tr></tbody></table></div>` },
      { h: 'Seltene Vreneli-Jahrgänge', html: `<p>Die meisten Vreneli werden nah am Goldwert gehandelt. Einige Jahrgänge mit kleiner Auflage sind dagegen gesuchte Sammlerstücke und können ein Vielfaches wert sein. Prüfen Sie die Jahreszahl und lassen Sie auffällige Stücke von einem Münzhändler bewerten, bevor Sie verkaufen.</p>` },
      { h: 'Vreneli verkaufen', html: `<p>Für gängige Stücke zahlen Händler einen Preis nah am Goldwert. Ausnahme sind Sammlerstücke – lassen Sie seltene Jahrgänge oder Stücke in sehr gutem Erhaltungszustand vorher von einem Münzhändler bewerten, denn dort kann der Sammlerwert deutlich über dem Goldwert liegen. Weitere historische Münzen finden Sie im <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einem Vreneli?','Ein 20-Franken-Vreneli enthält 5,806 g Feingold, ein 10-Franken-Vreneli 2,903 g.'],['Sind alle Vreneli gleich viel wert?','Beim Goldwert ja. Seltene Jahrgänge können aber einen deutlich höheren Sammlerwert haben.'],['Ist das Vreneli mehrwertsteuerfrei?','Gängige Stücke gelten als Anlagegold und sind beim Kauf mehrwertsteuerfrei. Liegt der Preis wegen eines Sammlerwerts über 180 % des Goldwerts, kann Mehrwertsteuer anfallen, meist in Form der Differenzbesteuerung. Beim Verkauf durch Privatpersonen fällt keine an.']]
  },
  {
    slug: '20-mark-gold-wert',
    nav: '20 Mark Gold',
    inNav: false,
    group: 'muenzen',
    keywords: '20 mark gold wert 40 · 20 goldmark wert · 20 mark goldmünze kaiserreich · 10 mark gold wert',
    title: '20 Mark Gold Wert: Was ist eine 20-Mark-Goldmünze wert?',
    description: 'Was ist eine 20-Mark-Goldmünze aus dem Kaiserreich wert? Goldwert für 20 und 10 Mark nach aktuellem Kurs, Prägeländer und Hinweise zum Sammlerwert.',
    h1: '20 Mark Gold: Was ist eine 20-Mark-Goldmünze heute wert?',
    intro: 'Goldmünzen zu 20 und 10 Mark aus dem Deutschen Kaiserreich liegen in vielen Familien im Schrank. Der Rechner zeigt ihren aktuellen Goldwert.',
    calc: { type: 'coins', preset: '20mark' },
    sections: [
      { h: '20 und 10 Mark Gold im Vergleich', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Deutsches Kaiserreich (verschiedene Länder)</td></tr><tr><th scope="row">Prägejahre</th><td>1871 bis 1915</td></tr><tr><th scope="row">Feingehalt</th><td>900</td></tr><tr><th scope="row">Gewicht</th><td>7,965 g (20 Mark) · 3,982 g (10 Mark)</td></tr><tr><th scope="row">Feingold</th><td>7,168 g (20 Mark) · 3,584 g (10 Mark)</td></tr></tbody></table></div>
<p>Jedes Land des Kaiserreichs prägte eigene Goldmünzen mit dem Porträt seines Herrschers. Die freien Städte Hamburg, Bremen und Lübeck zeigen statt eines Porträts ihr Wappen. Die Rückseite trägt immer den Reichsadler.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>20 Mark</td><td class="num">7,168 g</td><td class="num"><span data-price="goldq7168">–</span></td></tr><tr><td>10 Mark</td><td class="num">3,584 g</td><td class="num"><span data-price="goldq3584">–</span></td></tr></tbody></table></div>` },
      { h: 'Prägeland und Münzzeichen', html: `<p>Häufige Prägungen, etwa aus Preußen mit Wilhelm II., werden nah am Goldwert gehandelt. Münzen kleiner Länder oder seltener Jahrgänge haben dagegen oft einen Sammlerwert über dem Goldwert. Das Münzzeichen (ein Buchstabe unter dem Porträt oder Adler) verrät die Prägestätte, etwa A für Berlin.</p>` },
      { h: '20 Mark Gold verkaufen', html: `<p>Für gängige Stücke zahlen Händler einen Preis nah am Goldwert. Ausnahme sind Sammlerstücke – lassen Sie seltene Jahrgänge oder Stücke in sehr gutem Erhaltungszustand vorher von einem Münzhändler bewerten, denn dort kann der Sammlerwert deutlich über dem Goldwert liegen. Weitere historische Münzen finden Sie im <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einer 20-Mark-Münze?','Eine 20-Mark-Goldmünze enthält 7,168 g Feingold, eine 10-Mark-Münze 3,584 g.'],['Sind 20-Mark-Goldmünzen mehr wert als ihr Gold?','Gängige Stücke werden nah am Goldwert gehandelt. Seltene Länder, Jahrgänge oder sehr gut erhaltene Münzen können mehr wert sein.'],['Ist die 20-Mark-Goldmünze mehrwertsteuerfrei?','Gängige Stücke gelten als Anlagegold und sind beim Kauf mehrwertsteuerfrei. Liegt der Preis wegen eines Sammlerwerts über 180 % des Goldwerts, kann Mehrwertsteuer anfallen, meist in Form der Differenzbesteuerung. Beim Verkauf durch Privatpersonen fällt keine an.']]
  },
  {
    slug: 'sovereign-gold-wert',
    nav: 'Sovereign',
    inNav: false,
    group: 'muenzen',
    keywords: 'sovereign gold wert · sovereign goldmünze · half sovereign wert',
    title: 'Sovereign Gold Wert in Euro: Sovereign und Half Sovereign',
    description: 'Was ist ein Sovereign aus Gold wert? Goldwert für Sovereign und Half Sovereign nach aktuellem Kurs, Daten der Royal Mint und was Händler zahlen.',
    h1: 'Sovereign Gold: Was ist ein Sovereign heute wert?',
    intro: 'Der Sovereign ist eine der ältesten noch geprägten Goldmünzen. Wählen Sie Sovereign oder Half Sovereign und die Anzahl – der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'sovereign' },
    sections: [
      { h: 'Sovereign und Half Sovereign im Vergleich', html: `<p><strong>Kurz gesagt:</strong> Ein Sovereign (7,322 g Feingold) ist heute rund <span data-price="goldq7322">–</span> wert, ein Half Sovereign rund <span data-price="goldq3661">–</span> (reiner Goldwert).</p>
<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Großbritannien (The Royal Mint)</td></tr><tr><th scope="row">Erstausgabe (moderner Sovereign)</th><td>1817</td></tr><tr><th scope="row">Nennwert</th><td>1 Pfund</td></tr><tr><th scope="row">Feingehalt</th><td>916,7 (22 Karat)</td></tr><tr><th scope="row">Gewicht</th><td>7,988 g (Sovereign) · 3,994 g (Half Sovereign)</td></tr><tr><th scope="row">Feingold</th><td>7,322 g (Sovereign) · 3,661 g (Half Sovereign)</td></tr></tbody></table></div>
<p>Die Rückseite zeigt den heiligen Georg im Kampf mit dem Drachen nach einem Entwurf von Benedetto Pistrucci, die Vorderseite den jeweiligen britischen Monarchen. Größe und Goldgehalt sind seit über 200 Jahren nahezu unverändert.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>Sovereign</td><td class="num">7,322 g</td><td class="num"><span data-price="goldq7322">–</span></td></tr><tr><td>Half Sovereign</td><td class="num">3,661 g</td><td class="num"><span data-price="goldq3661">–</span></td></tr></tbody></table></div>` },
      { h: 'Alte und neue Sovereigns', html: `<p>Sovereigns werden seit 1817 geprägt und bis heute ausgegeben. Häufige Jahrgänge werden nah am Goldwert gehandelt, ältere Stücke mit seltenem Monarchen oder Prägeort teils darüber. Für den Goldwert zählen nur die 7,322 g Feingold.</p>` },
      { h: 'Sovereign verkaufen', html: `<p>Für gängige Stücke zahlen Händler einen Preis nah am Goldwert. Ausnahme sind Sammlerstücke – lassen Sie seltene Jahrgänge oder Stücke in sehr gutem Erhaltungszustand vorher von einem Münzhändler bewerten, denn dort kann der Sammlerwert deutlich über dem Goldwert liegen. Weitere historische Münzen finden Sie im <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einem Sovereign?','Ein Sovereign enthält 7,322 g Feingold, ein Half Sovereign 3,661 g.'],['Ist ein alter Sovereign mehr wert?','Nicht automatisch. Viele alte Jahrgänge werden nah am Goldwert gehandelt, nur seltene Stücke erzielen einen Sammlerwert.'],['Ist der Sovereign mehrwertsteuerfrei?','Gängige Stücke gelten als Anlagegold und sind beim Kauf mehrwertsteuerfrei. Liegt der Preis wegen eines Sammlerwerts über 180 % des Goldwerts, kann Mehrwertsteuer anfallen, meist in Form der Differenzbesteuerung. Beim Verkauf durch Privatpersonen fällt keine an.']]
  },
  {
    slug: 'dukat-gold-wert',
    nav: 'Dukat',
    inNav: false,
    group: 'muenzen',
    keywords: 'dukat gold wert · 1 dukat wert · 4 dukaten wert · dukat 1915',
    title: 'Dukat Gold Wert: Was sind 1 und 4 Dukaten wert?',
    description: 'Was ist ein österreichischer Dukat wert? Goldwert für 1 und 4 Dukaten nach aktuellem Kurs und warum alle Dukaten die Jahreszahl 1915 tragen.',
    h1: 'Dukat Gold: Was ist ein österreichischer Dukat heute wert?',
    intro: 'Österreichische Dukaten sind beliebte Geschenkmünzen. Wählen Sie 1 oder 4 Dukaten und die Anzahl – der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'dukat1' },
    sections: [
      { h: '1 und 4 Dukaten im Vergleich', html: `<p><strong>Kurz gesagt:</strong> Ein 1-fach Dukat (3,442 g Feingold) ist heute rund <span data-price="goldq3442">–</span> wert, ein 4-fach Dukat (13,768 g) rund <span data-price="goldq13768">–</span> (reiner Goldwert).</p>
<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Österreich (Münze Österreich)</td></tr><tr><th scope="row">Jahreszahl</th><td>1915 (offizielle Nachprägung)</td></tr><tr><th scope="row">Feingehalt</th><td>986 (rund 23,7 Karat)</td></tr><tr><th scope="row">Gewicht</th><td>3,491 g (1 Dukat) · 13,964 g (4 Dukaten)</td></tr><tr><th scope="row">Feingold</th><td>3,442 g (1 Dukat) · 13,768 g (4 Dukaten)</td></tr></tbody></table></div>
<p>Das 1-Dukaten-Stück zeigt Kaiser Franz Joseph I., das 4-Dukaten-Stück zusätzlich Kaiserin Elisabeth. Mit 986er Gold sind Dukaten fast so rein wie Feingold.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Dukat</td><td class="num">3,442 g</td><td class="num"><span data-price="goldq3442">–</span></td></tr><tr><td>4 Dukaten</td><td class="num">13,768 g</td><td class="num"><span data-price="goldq13768">–</span></td></tr></tbody></table></div>` },
      { h: 'Warum steht auf jedem Dukaten 1915?', html: `<p>Die Münze Österreich prägt Dukaten bis heute als offizielle Nachprägung mit der Jahreszahl 1915. Ein Dukat mit dieser Jahreszahl ist deshalb kein seltenes Stück aus dem Ersten Weltkrieg, sondern eine Anlage- und Geschenkmünze, die nah am Goldwert gehandelt wird. Echte ältere Dukaten mit anderen Jahreszahlen können einen Sammlerwert haben.</p>` },
      { h: 'Dukat verkaufen', html: `<p>Für gängige Stücke zahlen Händler einen Preis nah am Goldwert. Ausnahme sind Sammlerstücke – lassen Sie seltene Jahrgänge oder Stücke in sehr gutem Erhaltungszustand vorher von einem Münzhändler bewerten, denn dort kann der Sammlerwert deutlich über dem Goldwert liegen. Weitere historische Münzen finden Sie im <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einem Dukaten?','Ein 1-Dukaten-Stück enthält 3,442 g Feingold, ein 4-Dukaten-Stück 13,768 g.'],['Ist ein Dukat von 1915 selten?','Nein. Alle heute geprägten Dukaten tragen die Jahreszahl 1915; es sind offizielle Nachprägungen, die nah am Goldwert gehandelt werden.'],['Ist der Dukat mehrwertsteuerfrei?','Gängige Stücke gelten als Anlagegold und sind beim Kauf mehrwertsteuerfrei. Liegt der Preis wegen eines Sammlerwerts über 180 % des Goldwerts, kann Mehrwertsteuer anfallen, meist in Form der Differenzbesteuerung. Beim Verkauf durch Privatpersonen fällt keine an.']]
  },
  {
    slug: '100-euro-goldmuenze-wert',
    nav: '100 Euro Gold',
    inNav: false,
    group: 'muenzen',
    keywords: '100 euro goldmünze 4.400 (KD 15) · 100 euro goldmünze wert 390 (KD 10) · 20 euro goldmünze 390 · 50 euro goldmünze 210',
    title: '100 Euro Goldmünze Wert: Was ist sie heute wert?',
    description: 'Was ist eine 100-Euro-Goldmünze wert? Goldwert der deutschen 20-, 50-, 100- und 200-Euro-Goldmünzen nach aktuellem Kurs und was Händler beim Ankauf zahlen.',
    h1: '100-Euro-Goldmünze: Was ist sie heute wert?',
    intro: 'Deutschland gibt jedes Jahr Goldmünzen zu 20, 50 und 100 Euro aus. Wählen Sie Ihre Münze und die Anzahl – der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'goldeuro100' },
    sections: [
      { h: 'Deutsche Euro-Goldmünzen im Vergleich', html: `<div class="table-wrap"><table><thead><tr><th>Münze</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>200 Euro (nur 2002)</td><td class="num">31,10 g (1 Unze)</td><td class="num"><span data-price="goldozv">–</span></td></tr><tr><td>100 Euro</td><td class="num">15,55 g (1/2 Unze)</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>50 Euro</td><td class="num">7,78 g (1/4 Unze)</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>20 Euro</td><td class="num">3,89 g (1/8 Unze)</td><td class="num"><span data-price="goldq3888">–</span></td></tr></tbody></table></div>
<p>Alle Münzen bestehen aus Feingold mit einem Feingehalt von 999,9 und werden im Auftrag des Bundesministeriums der Finanzen geprägt. Die erste 100-Euro-Goldmünze erschien 2002 zur Einführung des Euro. Von 2003 bis 2019 zeigte die Serie Stätten des UNESCO-Welterbes in Deutschland, seitdem folgen weitere Themenreihen. Die 200-Euro-Münze gab es nur 2002.</p>` },
      { h: 'Ist die 100-Euro-Goldmünze nur 100 Euro wert?', html: `<p>Nein. Die Münze ist in Deutschland zwar gesetzliches Zahlungsmittel, aber nur zu ihrem Nennwert von 100 Euro. Ihr Goldwert liegt um ein Vielfaches darüber – geben Sie sie deshalb nie als Zahlungsmittel aus. Dasselbe gilt für die 20- und 50-Euro-Goldmünzen.</p>
<p>Der Ausgabepreis bei der Erstausgabe liegt über dem Goldwert, weil er Prägekosten und einen Sammleraufschlag enthält. Beim späteren Verkauf zahlen Händler meist einen Preis nah am Goldwert.</p>` },
      { h: '100-Euro-Goldmünze verkaufen', html: `<p>Für gängige Jahrgänge zahlen Händler einen Preis nah am Goldwert. Jedes Motiv wird in den fünf deutschen Prägestätten geprägt, erkennbar am Buchstaben A, D, F, G oder J. Komplette Sätze aller fünf Prägestätten, Münzen in Originaletui mit Zertifikat und frühe Jahrgänge erzielen bei Sammlern teils mehr – fragen Sie in diesem Fall auch einen Münzhändler.</p>
<p>Weitere Anlage- und Sammlermünzen finden Sie im <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>, Silbermünzen wie die 10- und 20-Euro-Gedenkmünzen im <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einer 100-Euro-Goldmünze?', 'Eine halbe Unze, also 15,55 g Feingold mit einem Feingehalt von 999,9.'], ['Kann ich mit der 100-Euro-Goldmünze bezahlen?', 'Ja, sie ist in Deutschland gesetzliches Zahlungsmittel, aber nur zum Nennwert von 100 Euro. Ihr Goldwert liegt um ein Vielfaches höher.'], ['Ist die 100-Euro-Goldmünze mehrwertsteuerfrei?', 'Sie gilt in der Regel als Anlagegold und ist beim Kauf mehrwertsteuerfrei. Liegt der Preis wegen eines Sammlerwerts über 180 % des Goldwerts, kann Mehrwertsteuer anfallen, meist in Form der Differenzbesteuerung. Beim Verkauf durch Privatpersonen fällt keine an.']]
  },
  {
    slug: 'silberrechner',
    nav: 'Silber',
    tile: 'Besteck, Schmuck, Barren',
    keywords: 'silberrechner 2.400 (KD 10) · silber wert rechner · silber berechnen (925 → /925-silber-wert/, 800 → /800-silber-wert/)',
    title: 'Silberrechner: Silber Wert berechnen mit aktuellem Kurs',
    description: 'Silberrechner mit aktuellem Kurs: Wert von 925er Sterlingsilber, 800er Silberbesteck und Silberschmuck berechnen – mit Materialwert und Ankaufs-Richtwert.',
    h1: 'Silberrechner: Was ist mein Silber wert?',
    intro: 'Silberbesteck, Schmuck oder Münzen: Geben Sie Gewicht und Feingehalt ein und sehen Sie den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silver', preset: '925', weight: 100 },
    example: { fineness: '925', metal: 'silver', weights: '50,100,250,500,1000' },
    sections: [
      {
        h: 'Stempel 925, 835 und 800',
        html: `<p>Die Zahl im Stempel nennt den Silberanteil in Tausendsteln: 925 (Sterlingsilber) sind 92,5 %, 835 sind 83,5 % und 800 sind 80 % reines Silber. Den aktuellen Wert je Gramm zeigt die Tabelle oben. Ausführlich je Legierung: <a href="/925-silber-wert/">925 Silber Wert</a>, <a href="/835-silber-wert/">835 Silber Wert</a> und <a href="/800-silber-wert/">800 Silber Preis</a>.</p>`
      },
      {
        h: '800 Silber und Silberbesteck',
        html: `<p>Deutsches Silberbesteck ist häufig mit <strong>800</strong> gestempelt, oft zusammen mit Halbmond und Krone. Es enthält 80 % Silber. Für den Wert zählt das Gesamtgewicht; bei Messern sollten Sie den Griff getrennt betrachten, denn die Klinge ist meist aus Stahl und der Griff oft mit Füllmasse gefüllt. Ausführlich: <a href="/silberbesteck-wert/">Silberbesteck bewerten und verkaufen</a>. Für Münzen gibt es den Rechner für <a href="/silbermuenzen-wert/">Silbermünzen</a>.</p>`
      },
      {
        h: 'Echtes Silber oder versilbert?',
        html: `<p>Echtes Silber trägt einen Stempel wie <strong>800</strong>, <strong>835</strong> oder <strong>925</strong>. Besteck mit <strong>90</strong> oder <strong>100</strong> ist dagegen <em>versilbert</em>: nur eine dünne Silberschicht auf einem anderen Metall, mit sehr geringem Silberwert.</p>
<p>Silber wird beim Ankauf mit höheren Abschlägen bewertet als Gold, weil der Wert pro Gramm viel niedriger ist und die Aufbereitung gleich viel kostet.</p>`
      }
    ],
    faq: [
      ['Was bedeutet 925 auf Silber?', '925 bedeutet, dass 92,5 % des Gewichts reines Silber sind. Diese Legierung heißt Sterlingsilber.'],
      ['Was ist versilbertes Besteck wert?', 'Sehr wenig. Die Silberschicht wiegt nur wenige Gramm pro Besteckset. Viele Ankäufer nehmen versilberte Ware gar nicht an.'],
      ['Wie viel ist 1 kg 800er Silber wert?', 'Ein Kilogramm 800er Silber enthält 800 g Feinsilber. Geben Sie 1000 g und 800er Silber in den Rechner ein, um den aktuellen Wert zu sehen.']
    ]
  },
  {
    slug: '925-silber-wert',
    nav: '925 Silber',
    inNav: false,
    keywords: '925 silber wert 5.400 (KD 25) · 925 silber 6.600 · 925 silber preis 4.400 · silber 925 wert 2.900 (KD 27) · sterling silber wert',
    title: '925 Silber Wert heute: Preis pro Gramm Sterlingsilber',
    description: 'Was ist 925er Silber wert? Preis pro Gramm für Sterlingsilber nach aktuellem Kurs, Rechner für Schmuck, Besteck und Münzen und Tipps zum Verkauf.',
    h1: '925 Silber Wert: Was ist Sterlingsilber heute wert?',
    intro: 'Die meisten Silberketten, Ringe und viel modernes Besteck tragen den Stempel 925. Gewicht eingeben – der Rechner zeigt den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silver', preset: '925', weight: 100 },
    example: { fineness: '925', metal: 'silver', weights: '10,50,100,500,1000' },
    sections: [
      { h: '925 Silber: Preis pro Gramm', html: `<p><strong>Kurz gesagt:</strong> 1 Gramm 925er Silber ist heute rund <span data-price="silverq925">–</span> wert, 100 Gramm rund <span data-price="silverq92500">–</span> (reiner Silberwert). 925 bedeutet 92,5 % reines Silber, der Rest ist meist Kupfer. Man nennt diese Legierung Sterlingsilber.</p>` },
      { h: 'Stempel: 925, Sterling und Löwe', html: `<p>Sterlingsilber trägt den Stempel <strong>925</strong>, oft auch <strong>Sterling</strong> oder <strong>STG</strong>. Britisches Silber zeigt einen schreitenden Löwen. Achtung bei Schmuck mit Zusatz wie „925 vergoldet“: Das Grundmetall ist trotzdem Silber, die dünne Goldschicht hat kaum Wert. Steht dagegen „versilbert“ oder „EPNS“ auf dem Stück, ist es kein massives Silber.</p>` },
      { h: '925 Silber verkaufen', html: `<p>Für Silberschmuck zahlen Ankäufer meist deutlich unter dem Materialwert, weil Verschlüsse, Steine und das Einschmelzen abgezogen werden. Lohnend wird der Verkauf vor allem bei größeren Mengen. Schwere Stücke und Besteck bewerten Sie unter <a href="/silberbesteck-wert/">Silberbesteck Wert</a>, ältere Legierungen unter <a href="/800-silber-wert/">800 Silber</a> und <a href="/835-silber-wert/">835 Silber</a>. Den Ablauf beim Ankauf erklärt <a href="/silber-verkaufen/">Silber verkaufen</a>.</p>` }
    ],
    faq: [['Wie viel Silber ist in 925er Silber?','925er Silber besteht zu 92,5 % aus reinem Silber, also 925 Tausendstel.'],['Ist 925 Silber echtes Silber?','Ja. 925 ist der Stempel für Sterlingsilber, die übliche Legierung für Silberschmuck.'],['Warum läuft 925er Silber an?','Silber reagiert mit Schwefel aus der Luft zu dunklem Silbersulfid, der Kupferanteil beschleunigt das. Am Silberwert ändert das nichts.']]
  },
  {
    slug: '800-silber-wert',
    nav: '800 Silber',
    inNav: false,
    keywords: '800 silber preis 1.900 (KD 12) · silber 800 preis 1.600 · 800 silber 880 · 800 silber wert 140 (KD 5)',
    title: '800 Silber Preis heute: Was ist 800er Silber pro Gramm wert?',
    description: 'Was ist 800er Silber wert? Preis pro Gramm nach aktuellem Silberkurs, Rechner für Ihr Gewicht und woran Sie 800er Silber mit Halbmond und Krone erkennen.',
    h1: '800 Silber Preis: Was ist 800er Silber heute wert?',
    intro: '800er Silber ist die klassische Legierung für altes deutsches Tafelsilber und Silberwaren. Gewicht eingeben – der Rechner zeigt den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silver', preset: '800', weight: 100 },
    example: { fineness: '800', metal: 'silver', weights: '50,100,250,500,1000' },
    sections: [
      { h: '800 Silber: Preis pro Gramm', html: `<p><strong>Kurz gesagt:</strong> 1 Gramm 800er Silber ist heute rund <span data-price="silverq800">–</span> wert, 1 Kilogramm rund <span data-price="silverq800000">–</span> (reiner Silberwert). 800 bedeutet 80 % reines Silber, der Rest ist Kupfer.</p>
<div class="table-wrap"><table><thead><tr><th>Stempel</th><th class="num">Silberanteil</th><th class="num">Wert je Gramm heute</th></tr></thead><tbody><tr><td>800</td><td class="num">80,0 %</td><td class="num"><span data-price="silverq800">–</span></td></tr><tr><td>835</td><td class="num">83,5 %</td><td class="num"><span data-price="silverq835">–</span></td></tr><tr><td>925</td><td class="num">92,5 %</td><td class="num"><span data-price="silverq925">–</span></td></tr><tr><td>999</td><td class="num">99,9 %</td><td class="num"><span data-price="silverq999">–</span></td></tr></tbody></table></div>` },
      { h: '800er Silber erkennen', html: `<p>Deutsche Silberwaren tragen seit 1888 oft die Zahl <strong>800</strong> zusammen mit <strong>Halbmond und Krone</strong>. Dazu kommt häufig eine Herstellermarke. Fehlt eine Zahl und stehen nur 90 oder 100 auf Besteck, ist es versilbert und hat kaum Silberwert. Vasen, Schalen und Leuchter können mit Füllmasse oder Holzsockel beschwert sein – wiegen Sie solche Teile nicht einfach komplett.</p>` },
      { h: '800 Silber verkaufen', html: `<p>Ankäufer rechnen mit dem Silberanteil und ziehen ihre Kosten ab. Bei großen Mengen Tafelsilber lohnt es sich, mehrere Angebote einzuholen. Besteck mit hohlen Messergriffen bewerten Sie besser unter <a href="/silberbesteck-wert/">Silberbesteck Wert</a>. Den Ablauf erklärt <a href="/silber-verkaufen/">Silber verkaufen</a>; für Schmuck mit 925-Stempel gibt es <a href="/925-silber-wert/">925 Silber Wert</a>.</p>` }
    ],
    faq: [['Wie viel ist 800er Silber pro Gramm wert?','Ein Gramm 800er Silber enthält 0,8 g Feinsilber. Der aktuelle Wert steht oben auf der Seite und wird mit dem Silberkurs aktualisiert.'],['Was bedeutet Halbmond und Krone?','Das Zeichen wurde in Deutschland für Silberwaren eingeführt und steht zusammen mit der Feingehaltszahl, meist 800. Es zeigt echtes Silber an.'],['Ist 800 Silber weniger wert als 925?','Pro Gramm ja, weil es nur 80 % statt 92,5 % Silber enthält.']]
  },
  {
    slug: '835-silber-wert',
    nav: '835 Silber',
    inNav: false,
    keywords: '835 silber 2.900 (KD 9) · preis für 835 silber 1.000 · silber 835 1.000 · 835 silber wert · 835 gold oder silber',
    title: '835 Silber Wert heute: Preis pro Gramm für 835er Silber',
    description: 'Was ist 835er Silber wert? Preis pro Gramm nach aktuellem Silberkurs, Rechner für Ihr Gewicht und wo der Stempel 835 vorkommt – Besteck, Schmuck und Silberwaren.',
    h1: '835 Silber Wert: Was ist 835er Silber heute wert?',
    intro: 'Der Stempel 835 steht vor allem auf älterem Silberbesteck und Silberschmuck. Gewicht eingeben – der Rechner zeigt den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silver', preset: '835', weight: 100 },
    example: { fineness: '835', metal: 'silver', weights: '50,100,250,500,1000' },
    sections: [
      { h: '835 Silber: Preis pro Gramm', html: `<p><strong>Kurz gesagt:</strong> 1 Gramm 835er Silber ist heute rund <span data-price="silverq835">–</span> wert, 100 Gramm rund <span data-price="silverq83500">–</span> (reiner Silberwert). 835 bedeutet 83,5 % reines Silber, der Rest ist Kupfer.</p>` },
      { h: 'Ist 835 Gold oder Silber?', html: `<p>835 ist eine <strong>Silber</strong>-Legierung. Für Gold sind andere Stempel üblich, etwa 333, 585 oder 750. Wenn ein gelbliches Stück 835 trägt, ist es meist vergoldetes Silber. Den Wert bestimmt dann der Silberanteil. Typische Gegenstände mit 835 sind Besteck, Becher, Dosen und Schmuck, häufig aus Deutschland und den Niederlanden.</p>` },
      { h: '835 Silber verkaufen', html: `<p>Wiegen Sie massive Teile und rechnen Sie mit dem Rechner den Silberwert aus. Ankäufer ziehen ihre Kosten ab, deshalb lohnen sich Vergleichsangebote. Für Besteck mit Messern beachten Sie die Hinweise unter <a href="/silberbesteck-wert/">Silberbesteck Wert</a>. Weitere Legierungen: <a href="/800-silber-wert/">800 Silber</a> und <a href="/925-silber-wert/">925 Silber</a>.</p>` }
    ],
    faq: [['Wie viel Silber ist in 835er Silber?','835er Silber enthält 83,5 % reines Silber.'],['Ist 835 echtes Silber?','Ja. 835 ist ein gängiger Feingehalt für Silberwaren und Schmuck.'],['Was ist besser, 835 oder 925?','925 enthält mehr Silber und ist pro Gramm etwas mehr wert. Für die Echtheit sind beide Stempel gleich gut.']]
  },
  {
    slug: 'silberbesteck-wert',
    nav: 'Silberbesteck',
    inNav: false,
    tile: 'Besteck bewerten und verkaufen',
    keywords: 'silberbesteck verkaufen 5.400 (KD 14) · silberbesteck wert 1.600 (KD 15)',
    title: 'Silberbesteck Wert berechnen – und richtig verkaufen',
    description: 'Was ist Silberbesteck wert? Gewicht und Stempel (800, 835, 925) eingeben, Silberwert sehen und erfahren, wie Sie Silberbesteck zum fairen Preis verkaufen.',
    h1: 'Silberbesteck verkaufen: Was ist mein Silberbesteck wert?',
    intro: 'Geerbtes Tafelsilber liegt oft jahrelang in der Schublade. Bevor Sie Silberbesteck verkaufen, zeigt der Rechner in Sekunden, wie viel Silber darin steckt – und worauf es beim Verkauf ankommt.',
    calc: { type: 'silver', preset: '800', weight: 1000 },
    example: { fineness: '800', metal: 'silver', weights: '250,500,1000,2000,3000' },
    sections: [
      {
        h: 'Echtes Silberbesteck erkennen',
        html: `<p>Massives Silberbesteck trägt eine Feingehaltsangabe, meist <strong>800</strong>, seltener <strong>835</strong> oder <strong>925</strong>. Deutsches Besteck zeigt oft zusätzlich Halbmond und Krone. Steht dagegen <strong>90</strong> oder <strong>100</strong> auf dem Besteck, ist es <em>versilbert</em>: Die Zahl nennt die Gramm Silberauflage für einen Satz Besteck, nicht den Feingehalt. Versilbertes Besteck hat kaum Materialwert.</p>`
      },
      {
        h: 'So wiegen Sie Silberbesteck richtig',
        html: `<ul>
<li><strong>Gabeln und Löffel</strong> sind meist komplett aus Silber und können ganz gewogen werden.</li>
<li><strong>Messer</strong> haben fast immer eine Stahlklinge und einen hohlen Silbergriff, der mit Füllmasse gefüllt ist. Ankäufer rechnen bei Messern oft nur mit rund 10 % des Gewichts als Silber.</li>
<li><strong>Vorlegeteile</strong> wie Tortenheber oder Salatbesteck können ebenfalls Stahl- oder Kunststoffteile haben.</li>
</ul>`
      },
      {
        h: 'Silberbesteck verkaufen: so bekommen Sie einen fairen Preis',
        html: `<ul>
<li><strong>Erst rechnen, dann verkaufen:</strong> Mit dem Silberwert aus dem Rechner erkennen Sie, ob ein Angebot fair ist.</li>
<li><strong>Nach Stempel sortieren:</strong> 800er, 925er und versilbertes Besteck getrennt anbieten.</li>
<li><strong>Sammlerwert prüfen:</strong> Komplette Garnituren bekannter Hersteller oder Jugendstil-Besteck können über dem Materialwert verkauft werden – etwa über Auktionen oder Silberbesteck-Händler, die einzelne Teile nachkaufen.</li>
<li><strong>Angebote vergleichen:</strong> Silber wird mit größeren Abschlägen angekauft als Gold. Online-Ankäufer, Scheideanstalten und Juweliere zahlen teils sehr unterschiedlich.</li>
</ul>
<p>Für andere Silbergegenstände nutzen Sie den <a href="/silberrechner/">Silberrechner</a>, für Münzen den Rechner für <a href="/silbermuenzen-wert/">Silbermünzen</a>. Alles rund um den Silberankauf finden Sie unter <a href="/silber-verkaufen/">Silber verkaufen</a>, den Kurs unter <a href="/silberpreis-pro-gramm/">Silberpreis pro Gramm</a>.</p>`
      }
    ],
    faq: [
      ['Was ist ein Kilo 800er Silberbesteck wert?', 'Ein Kilogramm 800er Silber enthält 800 g Feinsilber. Den aktuellen Materialwert zeigt die Tabelle oben. Bei Besteck mit Messern ist der tatsächliche Silberanteil wegen der Stahlklingen geringer.'],
      ['Wie erkenne ich, ob mein Besteck versilbert ist?', 'Versilbertes Besteck trägt meist die Zahl 90 oder 100 oder Herstellerangaben wie „versilbert“. Echtes Silber ist mit 800, 835 oder 925 gestempelt.'],
      ['Lohnt es sich, Silberbesteck zu verkaufen?', 'Bei größeren Mengen massiven Silbers durchaus. Vergleichen Sie mehrere Angebote und prüfen Sie bei kompletten Markengarnituren, ob ein Verkauf als Besteck mehr bringt als der Materialwert.']
    ]
  },
  {
    slug: 'silbermuenzen-wert',
    nav: 'Silbermünzen',
    inNav: false,
    tile: 'Maple Leaf, 5 DM, 10 Euro …',
    keywords: 'silbermünzen verkaufen 6.600 (KD 19) · silbermünzen wert 1.300 (KD 26) · unze silber verkaufen 210 · silbermünzen ankauf online 320',
    title: 'Silbermünzen Wert berechnen – Silbermünzen verkaufen',
    description: 'Was sind Ihre Silbermünzen wert? Münze wählen, Anzahl eingeben und den Silberwert sehen – für Silberunzen, 5-DM-Adler, 10-DM- und 10-Euro-Gedenkmünzen.',
    h1: 'Silbermünzen Wert: Was sind meine Silbermünzen wert?',
    intro: 'Silberunzen, alte 5-Mark-Stücke oder 10-Euro-Gedenkmünzen: Wählen Sie Ihre Münze und die Anzahl – der Rechner zeigt den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silvercoins', preset: 'maple-ag', count: 10 },
    sections: [
      {
        h: 'Anlagemünzen und Gedenkmünzen',
        html: `<p><strong>Silberunzen</strong> wie Maple Leaf, Wiener Philharmoniker oder Krügerrand Silber enthalten genau eine Feinunze Silber (31,1 g). Sie werden weltweit gehandelt und lassen sich leicht verkaufen.</p>
<p><strong>Deutsche Gedenk- und Umlaufmünzen</strong> wie der 5-DM-Silberadler, 10-DM-, 10-Euro- und 20-Euro-Gedenkmünzen bestehen aus einer Silberlegierung (625er oder 925er). Ihr Silbergehalt ist geringer, als ihr Gewicht vermuten lässt. Achtung bei 10-Euro-Münzen ab 2011: Nur die Spiegelglanz-Ausgaben sind aus Silber, die normalen Stempelglanz-Münzen bestehen aus Kupfernickel. Euro-Gedenkmünzen sind in Deutschland gesetzliches Zahlungsmittel; bei heutigen Silberpreisen liegt der Silberwert aber über dem Nennwert.</p>`
      },
      {
        h: 'Silbermünzen verkaufen',
        html: `<ul>
<li><strong>Silberwert kennen:</strong> Der Rechner zeigt, was Ihre Münzen als Silber wert sind.</li>
<li><strong>Ausgabe prüfen:</strong> Bei 10-Euro-Münzen ab 2011 zuerst klären, ob es die silberne Spiegelglanz-Ausgabe ist.</li>
<li><strong>Sammlerwert beachten:</strong> Seltene Jahrgänge, Prägestätten oder Spiegelglanz-Ausgaben können mehr wert sein als ihr Silber.</li>
<li><strong>Online oder vor Ort:</strong> Silberankäufer im Internet zahlen oft transparente Preise je Unze; bei kleinen Mengen lohnt sich der Weg zum Händler vor Ort.</li>
</ul>
<p>Eigene Seiten mit Münzdaten gibt es für <a href="/5-dm-muenzen-wert/">5 DM Münzen</a>, <a href="/10-dm-silbermuenzen-wert/">10 DM Silbermünzen</a>, <a href="/10-euro-silbermuenzen-wert/">10 Euro Silbermünzen</a>, <a href="/schilling-silbermuenzen-wert/">Schilling-Silbermünzen</a>, den <a href="/maria-theresien-taler-wert/">Maria-Theresien-Taler</a>, <a href="/maple-leaf-silber-wert/">Maple Leaf Silber</a>, <a href="/kruegerrand-silber-wert/">Krügerrand Silber</a> und <a href="/philharmoniker-silber-wert/">Wiener Philharmoniker Silber</a>. Silberbarren und den Ablauf beim Silberankauf finden Sie unter <a href="/silber-verkaufen/">Silber verkaufen</a>, den aktuellen <a href="/silberpreis-pro-gramm/">Silberpreis pro Gramm</a> auf einer eigenen Seite. Goldmünzen bewerten Sie mit dem <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>`
      }
    ],
    faq: [
      ['Wie viel Silber ist in einem 5-DM-Stück?', 'Der 5-DM-Silberadler (1951–1974) wiegt 11,2 g und besteht aus 625er Silber. Er enthält damit 7 g Feinsilber.'],
      ['Sind 10-Euro-Gedenkmünzen aus Silber?', 'Die Ausgaben von 2002 bis 2010 bestehen aus 925er Silber (16,65 g Feinsilber). Von 2011 bis 2015 ist nur die Spiegelglanz-Ausgabe aus 625er Silber (10 g Feinsilber), die Stempelglanz-Ausgabe aus Kupfernickel. Spätere 10-Euro-Münzen enthalten kein Silber; seit 2016 gibt es dafür 20-Euro-Gedenkmünzen aus 925er Silber.'],
      ['Wie viel ist eine Unze Silber wert?', 'Eine Silberunze enthält 31,1 g Feinsilber. Ihr Materialwert ergibt sich aus dem aktuellen Silberpreis; der Rechner oben zeigt ihn für Maple Leaf, Philharmoniker und andere Unzen.']
    ]
  },
  {
    slug: 'maple-leaf-silber-wert',
    nav: 'Maple Leaf Silber',
    inNav: false,
    group: 'silbermuenzen',
    keywords: 'maple leaf silber 8.100 (KD 23) · silber maple leaf 1.300 (KD 15) · maple leaf silber wert 90 (KD 15)',
    title: 'Maple Leaf Silber Wert heute: Was ist die Silberunze wert?',
    description: 'Was ist ein Maple Leaf aus Silber wert? Silberwert der 1-Unzen-Münze nach aktuellem Kurs, Münzdaten, Echtheitsmerkmale und was Händler beim Ankauf zahlen.',
    h1: 'Maple Leaf Silber: Was ist die Silberunze heute wert?',
    intro: 'Der Maple Leaf aus Kanada ist eine der meistverkauften Silbermünzen der Welt. Geben Sie die Anzahl ein – der Rechner zeigt den aktuellen Silberwert.',
    calc: { type: 'silvercoins', preset: 'maple-ag' },
    sections: [
      { h: 'Maple Leaf Silber: Daten im Überblick', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Kanada (Royal Canadian Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>1988</td></tr><tr><th scope="row">Nennwert</th><td>5 Kanadische Dollar</td></tr><tr><th scope="row">Feingehalt</th><td>999,9</td></tr><tr><th scope="row">Feinsilber</th><td>31,10 g (1 Unze)</td></tr><tr><th scope="row">Durchmesser</th><td>38 mm</td></tr></tbody></table></div>
<p>Die Rückseite zeigt das Ahornblatt, das Wahrzeichen Kanadas, die Vorderseite den britischen Monarchen: ältere Jahrgänge Elizabeth II., neuere Charles III. Für den Silberwert spielt der Jahrgang bei Anlagemünzen keine Rolle.</p>
<div class="table-wrap"><table><thead><tr><th>Menge</th><th class="num">Feinsilber</th><th class="num">Silberwert heute</th></tr></thead><tbody><tr><td>1 Münze</td><td class="num">31,10 g</td><td class="num"><span data-price="silverozv">–</span></td></tr><tr><td>25 Münzen (Tube)</td><td class="num">777,6 g</td><td class="num"><span data-price="silverq777587">–</span></td></tr><tr><td>500 Münzen (Monsterbox)</td><td class="num">15,55 kg</td><td class="num"><span data-price="silverq15551738">–</span></td></tr></tbody></table></div>` },
      { h: 'Echten Maple Leaf erkennen', html: `<p>Seit 2014 trägt der Silber-Maple feine radiale Linien im Hintergrund und ein kleines, per Laser eingraviertes Ahornblatt als Sicherheitsmerkmal. Prüfen Sie zusätzlich Gewicht und Größe: 31,1 g bei 38 mm Durchmesser. Silber ist nicht magnetisch – haftet die Münze an einem Magneten, ist sie gefälscht.</p>
<p>Weißliche Flecken, sogenannte Milchflecken, sind bei Silber-Maples häufig. Sie entstehen bei der Herstellung und ändern nichts am Silbergehalt.</p>` },
      { h: 'Maple Leaf Silber verkaufen', html: `<p>Händler zahlen für Silber-Maples einen Preis nah am Silberwert. Beim Kauf haben Sie allerdings mehr bezahlt: Silbermünzen werden in Deutschland mit Mehrwertsteuer verkauft, beim Maple meist differenzbesteuert, dazu kommt die Händlermarge. Beim Verkauf durch Privatpersonen fällt keine Mehrwertsteuer an. Rechnen Sie deshalb damit, dass der Ankaufspreis spürbar unter Ihrem damaligen Kaufpreis liegt, solange der Silberpreis nicht deutlich gestiegen ist.</p>
<p>Andere Silbermünzen bewerten Sie mit dem <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a>, den Maple Leaf aus Gold unter <a href="/maple-leaf-gold-wert/">Maple Leaf Gold</a>. Den Ablauf beim Silberankauf erklärt <a href="/silber-verkaufen/">Silber verkaufen</a>.</p>` }
    ],
    faq: [["Wie viel Silber ist in einem Maple Leaf?","Ein Maple Leaf aus Silber enthält eine Feinunze, also 31,10 g Feinsilber mit einem Feingehalt von 999,9."],["Warum bekomme ich beim Verkauf weniger, als ich bezahlt habe?","Im Kaufpreis steckten Mehrwertsteuer und Händlermarge. Beim Verkauf zahlt der Händler einen Preis nah am Silberwert, ohne diese Aufschläge."],["Spielt der Nennwert von 5 Dollar eine Rolle?","Nein. Der Nennwert ist symbolisch, der Silberwert liegt um ein Vielfaches darüber."]]
  },
  {
    slug: 'kruegerrand-silber-wert',
    nav: 'Krügerrand Silber',
    inNav: false,
    group: 'silbermuenzen',
    keywords: 'krügerrand silber 3.600 (KD 16) · krügerrand silber wert 880 (KD 11)',
    title: 'Krügerrand Silber Wert heute: Was ist die Silberunze wert?',
    description: 'Was ist ein Krügerrand aus Silber wert? Silberwert der 1-Unzen-Münze nach aktuellem Kurs, Münzdaten, Unterschiede zum Gold-Krügerrand und Hinweise zum Verkauf.',
    h1: 'Krügerrand Silber: Was ist die Silberunze heute wert?',
    intro: 'Den berühmten Krügerrand gibt es seit einigen Jahren auch in Silber. Geben Sie die Anzahl ein – der Rechner zeigt den aktuellen Silberwert.',
    calc: { type: 'silvercoins', preset: 'kruegerrand-ag' },
    sections: [
      { h: 'Krügerrand Silber: Daten im Überblick', html: `<p><strong>Kurz gesagt:</strong> Ein Krügerrand Silber enthält 1 Unze (31,1 g) Feinsilber und ist heute rund <span data-price="silverozv">–</span> wert (reiner Silberwert).</p>
<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Südafrika (South African Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>2017, zum 50. Jubiläum des Krügerrands</td></tr><tr><th scope="row">Nennwert</th><td>1 Rand</td></tr><tr><th scope="row">Feingehalt</th><td>999</td></tr><tr><th scope="row">Feinsilber</th><td>31,10 g (1 Unze)</td></tr><tr><th scope="row">Durchmesser</th><td>rund 38,7 mm</td></tr></tbody></table></div>
<p>Das Motiv entspricht dem Gold-Krügerrand: Paul Kruger auf der Vorderseite, ein Springbock auf der Rückseite. Die Unterschiede zur Goldmünze: Der Silber-Krügerrand besteht aus Feinsilber (999) statt aus 22-karätigem Gold (916,7), ist mit rund 38,7 mm deutlich größer als der Gold-Krügerrand (32,77 mm) und trägt einen Nennwert von 1 Rand, die Goldmünze dagegen keinen.</p>
<div class="table-wrap"><table><thead><tr><th>Menge</th><th class="num">Feinsilber</th><th class="num">Silberwert heute</th></tr></thead><tbody><tr><td>1 Münze</td><td class="num">31,10 g</td><td class="num"><span data-price="silverozv">–</span></td></tr><tr><td>25 Münzen (Tube)</td><td class="num">777,6 g</td><td class="num"><span data-price="silverq777587">–</span></td></tr><tr><td>500 Münzen (Monsterbox)</td><td class="num">15,55 kg</td><td class="num"><span data-price="silverq15551738">–</span></td></tr></tbody></table></div>` },

      { h: 'Krügerrand Silber verkaufen', html: `<p>Händler zahlen für den Silber-Krügerrand einen Preis nah am Silberwert. Beim Kauf haben Sie mehr bezahlt: Silbermünzen werden in Deutschland mit Mehrwertsteuer verkauft, der Krügerrand meist differenzbesteuert. Dazu kommt die Händlermarge. Beim Verkauf durch Privatpersonen fällt keine Mehrwertsteuer an.</p>
<p>Ausgaben in polierter Platte mit kleiner Auflage können einen Sammlerwert über dem Silberwert haben – lassen Sie solche Stücke vorher von einem Münzhändler bewerten. Den Gold-Krügerrand finden Sie unter <a href="/kruegerrand-wert/">Krügerrand Wert</a>, weitere Silbermünzen im <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a>.</p>` }
    ],
    faq: [["Wie viel Silber ist in einem Krügerrand Silber?","Ein Silber-Krügerrand enthält eine Feinunze, also 31,10 g Feinsilber mit einem Feingehalt von 999."],["Hat der Silber-Krügerrand einen Nennwert?","Ja, 1 Rand. Der Gold-Krügerrand hat dagegen keinen aufgeprägten Nennwert."],["Ist der Krügerrand Silber mehr wert als ein Maple Leaf?","Beim Silberwert nicht: Beide enthalten eine Unze Feinsilber. Unterschiede gibt es nur beim Kauf- und Ankaufspreis einzelner Händler."]]
  },
  {
    slug: 'maria-theresien-taler-wert',
    nav: 'Maria-Theresien-Taler',
    inNav: false,
    group: 'silbermuenzen',
    keywords: 'maria theresien taler 1.300 (KD 9) · maria theresien taler wert 720 · maria theresien taler silber 720 · maria theresien taler 1780',
    title: 'Maria-Theresien-Taler Wert heute: Silberwert in Euro',
    description: 'Was ist ein Maria-Theresien-Taler wert? Silberwert nach aktuellem Kurs, Gewicht und Feingehalt, woran Sie Nachprägungen von 1780 erkennen und was Händler zahlen.',
    h1: 'Maria-Theresien-Taler Wert: Was ist der Taler heute wert?',
    intro: 'Fast jeder Maria-Theresien-Taler trägt die Jahreszahl 1780 – auch wenn er viel jünger ist. Anzahl wählen, der Rechner zeigt den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silvercoins', preset: 'mtt' },
    sections: [
      { h: 'Maria-Theresien-Taler: Daten', html: `<p><strong>Kurz gesagt:</strong> Ein Maria-Theresien-Taler enthält 23,389 g Feinsilber und ist heute rund <span data-price="silverq23389">–</span> wert (reiner Silberwert).</p>
<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Österreich (heute Münze Österreich)</td></tr><tr><th scope="row">Jahreszahl</th><td>1780 (Todesjahr Maria Theresias, bei Nachprägungen beibehalten)</td></tr><tr><th scope="row">Gewicht</th><td>28,0668 g</td></tr><tr><th scope="row">Feingehalt</th><td>833,3/1000</td></tr><tr><th scope="row">Feinsilber</th><td>23,389 g</td></tr></tbody></table></div>` },
      { h: 'Original oder Nachprägung?', html: `<p>Der Taler wurde nach 1780 millionenfach nachgeprägt, vor allem als Handelsmünze für Arabien und Ostafrika. Nachprägungen sind echte Silbermünzen mit vollem Silbergehalt und werden nah am Silberwert gehandelt. Echte Stücke aus der Regierungszeit vor 1780 tragen andere Jahreszahlen und sind selten. Lassen Sie auffällige Stücke von einem Münzhändler prüfen.</p>` },
      { h: 'Maria-Theresien-Taler verkaufen', html: `<p>Für gängige Nachprägungen zahlen Händler einen Preis in der Nähe des Silberwerts. Mehrere Angebote zu vergleichen lohnt sich. Weitere Silbermünzen bewerten Sie im <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a>; österreichische Gedenkmünzen unter <a href="/schilling-silbermuenzen-wert/">Schilling-Silbermünzen</a>.</p>` }
    ],
    faq: [['Wie viel Silber hat ein Maria-Theresien-Taler?','23,389 g Feinsilber bei einem Gesamtgewicht von 28,0668 g.'],['Warum steht auf jedem Taler 1780?','1780 ist das Todesjahr Maria Theresias. Die Jahreszahl wurde bei allen späteren Prägungen beibehalten.'],['Wird der Maria-Theresien-Taler noch geprägt?','Ja, die Münze Österreich prägt ihn bis heute nach.']]
  },
  {
    slug: '10-euro-silbermuenzen-wert',
    nav: '10 Euro Silber',
    inNav: false,
    group: 'silbermuenzen',
    keywords: '10 euro silbermünzen 1.300 (KD 18) · 10 euro silbermünzen wert tabelle 1.000 · wert einer 10 euro silbermünze 590 · 20 euro silbermünze wert',
    title: '10 Euro Silbermünzen Wert: Tabelle nach Jahrgang (2002–2015)',
    description: 'Was sind 10-Euro-Silbermünzen wert? Silberwert nach Jahrgang als Tabelle, welche Ausgaben Silber enthalten und was 20-Euro-Gedenkmünzen wert sind.',
    h1: '10 Euro Silbermünzen Wert: Was ist meine Gedenkmünze wert?',
    intro: 'Deutsche 10-Euro-Gedenkmünzen enthalten je nach Jahrgang 925er, 625er oder gar kein Silber. Ausgabe wählen – der Rechner zeigt den Silberwert.',
    calc: { type: 'silvercoins', preset: '10eur-925' },
    sections: [
      { h: 'Wert nach Jahrgang', html: `<p><strong>Kurz gesagt:</strong> Eine 10-Euro-Silbermünze von 2002 bis 2010 ist heute rund <span data-price="silverq16650">–</span> wert (Silberwert), also mehr als ihr Nennwert.</p>
<div class="table-wrap"><table><thead><tr><th>Ausgabe</th><th>Silber</th><th class="num">Feinsilber</th><th class="num">Silberwert heute</th></tr></thead><tbody><tr><td>10 Euro 2002–2010</td><td>925er, 18 g</td><td class="num">16,65 g</td><td class="num"><span data-price="silverq16650">–</span></td></tr><tr><td>10 Euro 2011–2015, Spiegelglanz</td><td>625er, 16 g</td><td class="num">10,0 g</td><td class="num"><span data-price="silverq10000">–</span></td></tr><tr><td>10 Euro 2011–2015, Stempelglanz</td><td>kein Silber</td><td class="num">–</td><td class="num">Nennwert</td></tr><tr><td>20 Euro ab 2016</td><td>925er, 18 g</td><td class="num">16,65 g</td><td class="num"><span data-price="silverq16650">–</span></td></tr></tbody></table></div>` },
      { h: 'Silbermünze oder Kupfernickel?', html: `<p>Ab 2011 gab es die 10-Euro-Münzen in zwei Ausführungen: Spiegelglanz für Sammler aus Silber und Stempelglanz aus Kupfernickel. Seit 2016 erscheinen die Silber-Gedenkmünzen als 20-Euro-Stücke. Am Gewicht lassen sich nur die 925er-Münzen bis 2010 erkennen (18 g); Silber- und Kupfernickel-Ausgaben von 2011 bis 2015 wiegen beide 16 g. Spiegelglanz-Münzen haben eine spiegelnde Oberfläche mit mattem Motiv und wurden meist in einer Kapsel verkauft.</p>` },
      { h: 'Gedenkmünzen verkaufen oder ausgeben?', html: `<p>Euro-Gedenkmünzen sind in Deutschland gesetzliches Zahlungsmittel und können bei der Bundesbank zum Nennwert eingetauscht werden. Liegt der Silberwert über dem Nennwert, ist ein Verkauf an einen Silberankäufer meist die bessere Wahl. Weitere Münzen bewerten Sie im <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a>; ältere Stücke unter <a href="/10-dm-silbermuenzen-wert/">10 DM Silbermünzen</a>.</p>` }
    ],
    faq: [['Welche 10-Euro-Münzen sind aus Silber?','Alle Ausgaben von 2002 bis 2010 (925er Silber) und von 2011 bis 2015 nur die Spiegelglanz-Ausgaben (625er Silber).'],['Wie viel Silber hat eine 10-Euro-Münze?','Die Ausgaben 2002–2010 enthalten 16,65 g Feinsilber, die Spiegelglanz-Münzen 2011–2015 10 g.'],['Sind 20-Euro-Münzen aus Silber?','Ja, die 20-Euro-Gedenkmünzen seit 2016 bestehen aus 925er Silber mit 16,65 g Feinsilber.']]
  },
  {
    slug: '5-dm-muenzen-wert',
    nav: '5 DM Münzen',
    inNav: false,
    group: 'silbermuenzen',
    keywords: '5 dm münzen wert tabelle 3.600 (KD 14) · 5 dm münzen wert 1.300 · 5 dm münze wert 1.000 · 5 mark silber 480 · 5 dm silberadler',
    title: '5 DM Münzen Wert: Tabelle für Silberadler und Gedenkmünzen',
    description: 'Was sind 5-DM-Münzen wert? Tabelle mit Silberwert für Silberadler und silberne Gedenkmünzen, welche Stücke kein Silber enthalten und Hinweise zu Sammlerwerten.',
    h1: '5 DM Münzen Wert: Was ist mein 5-Mark-Stück heute wert?',
    intro: 'Silberadler und silberne Gedenkmünzen zu 5 DM liegen in vielen Schubladen. Ausgabe und Anzahl wählen – der Rechner zeigt den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silvercoins', preset: '5dm-adler' },
    sections: [
      { h: '5 DM Münzen: Wert-Tabelle', html: `<p><strong>Kurz gesagt:</strong> Ein silberner 5-DM-Adler oder eine 5-DM-Gedenkmünze aus Silber ist heute rund <span data-price="silverq7000">–</span> wert (Silberwert).</p>
<div class="table-wrap"><table><thead><tr><th>Ausgabe</th><th>Silber</th><th class="num">Fein</th><th class="num">Wert heute</th></tr></thead><tbody><tr><td>5 DM Silberadler 1951–1974</td><td>625er, 11,2&nbsp;g</td><td class="num">7,0 g</td><td class="num"><span data-price="silverq7000">–</span></td></tr><tr><td>5 DM Gedenkmünzen 1952–1979</td><td>625er, 11,2&nbsp;g</td><td class="num">7,0 g</td><td class="num"><span data-price="silverq7000">–</span></td></tr><tr><td>5 DM Kursmünze ab 1975</td><td>keins</td><td class="num">–</td><td class="num">–</td></tr><tr><td>5 DM Gedenkmünzen ab 1979 (Otto Hahn)</td><td>keins</td><td class="num">–</td><td class="num">–</td></tr></tbody></table></div>` },
      { h: 'Welche 5-DM-Münzen sind aus Silber?', html: `<p>Silber enthalten der 5-DM-Adler bis zum Jahrgang 1974 und die Gedenkmünzen bis 1979 – mit einer Ausnahme: Die Otto-Hahn-Münze von 1979 ist bereits aus Kupfernickel, ebenso alle späteren Stücke. Ein einfacher Test ist das Gewicht: Silberne Stücke wiegen 11,2 g, Kupfernickel-Münzen 10 g. Einige Jahrgänge und Prägestätten, etwa der Gedenkmünzen von 1952 und 1957, sind bei Sammlern deutlich mehr wert als ihr Silber.</p>` },
      { h: '5 Mark aus dem Kaiserreich', html: `<p>Nicht verwechseln: Die 5-Mark-Stücke aus dem Kaiserreich (1871–1918) bestehen aus 900er Silber und enthalten 25 g Feinsilber, rund <span data-price="silverq25000">–</span> Silberwert. Wählen Sie diese Münze im Rechner aus der Liste. Weitere Silbermünzen finden Sie im <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a> und unter <a href="/10-dm-silbermuenzen-wert/">10 DM Silbermünzen</a>.</p>` }
    ],
    faq: [['Wie viel Silber ist in einem 5-DM-Stück?','Der 5-DM-Silberadler und die silbernen Gedenkmünzen bis 1979 enthalten je 7 g Feinsilber.'],['Sind alle 5-DM-Münzen aus Silber?','Nein. Die Kursmünze ab 1975 und die Gedenkmünzen ab der Otto-Hahn-Münze von 1979 bestehen aus Kupfernickel.'],['Kann man 5-DM-Münzen noch umtauschen?','Ja, die Bundesbank tauscht DM-Münzen zeitlich unbegrenzt zum Kurs von 1,95583 DM je Euro. Silberstücke sind beim Silberankauf meist mehr wert.']]
  },
  {
    slug: '10-dm-silbermuenzen-wert',
    nav: '10 DM Silber',
    inNav: false,
    group: 'silbermuenzen',
    keywords: '10 dm münzen silber wert 590 (KD 12) · 10 dm silbermünzen wert 590 · 10 dm olympia 1972 wert · 10 dm gedenkmünzen wert',
    title: '10 DM Silbermünzen Wert: Olympia 1972 und Gedenkmünzen',
    description: 'Was sind 10-DM-Silbermünzen wert? Silberwert für Olympia-Münzen 1972 und 10-DM-Gedenkmünzen 1987–2001 als Tabelle, nach aktuellem Silberkurs.',
    h1: '10 DM Silbermünzen Wert: Was sind Olympia- und Gedenkmünzen wert?',
    intro: 'Alle 10-DM-Gedenkmünzen bestehen aus Silber – die Olympia-Münzen von 1972 ebenso wie die Ausgaben von 1987 bis 2001. Ausgabe wählen, der Rechner zeigt den Silberwert.',
    calc: { type: 'silvercoins', preset: '10dm-olympia' },
    sections: [
      { h: '10 DM Silbermünzen: Wert-Tabelle', html: `<p><strong>Kurz gesagt:</strong> Eine 10-DM-Olympiamünze von 1972 ist heute rund <span data-price="silverq9688">–</span> wert, eine 10-DM-Gedenkmünze von 1998 bis 2001 rund <span data-price="silverq14338">–</span> (Silberwert).</p>
<div class="table-wrap"><table><thead><tr><th>Ausgabe</th><th>Silber</th><th class="num">Fein</th><th class="num">Wert heute</th></tr></thead><tbody><tr><td>Olympia 1972 (1970–1972)</td><td>625er, 15,5&nbsp;g</td><td class="num">9,69 g</td><td class="num"><span data-price="silverq9688">–</span></td></tr><tr><td>Gedenkmünzen 1987–1997</td><td>625er, 15,5&nbsp;g</td><td class="num">9,69 g</td><td class="num"><span data-price="silverq9688">–</span></td></tr><tr><td>Gedenkmünzen 1998–2001</td><td>925er, 15,5&nbsp;g</td><td class="num">14,34 g</td><td class="num"><span data-price="silverq14338">–</span></td></tr></tbody></table></div>` },
      { h: 'Olympia-Münzen 1972', html: `<p>Zu den Olympischen Spielen in München erschienen von 1970 bis 1972 sechs Ausgaben mit fünf Motiven, jeweils in sehr hoher Auflage. Deshalb werden sie fast immer zum Silberwert gehandelt. Mehr bringen nur einzelne Fehlprägungen und Stücke in Spiegelglanz.</p>` },
      { h: '10 DM Silbermünzen verkaufen', html: `<p>Silberankäufer rechnen mit dem Feinsilber. Bei größeren Mengen lohnt ein Vergleich mehrerer Angebote. Ältere 5-DM-Stücke bewerten Sie unter <a href="/5-dm-muenzen-wert/">5 DM Münzen Wert</a>, Euro-Gedenkmünzen unter <a href="/10-euro-silbermuenzen-wert/">10 Euro Silbermünzen</a> und alle weiteren im <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a>.</p>` }
    ],
    faq: [['Sind alle 10-DM-Münzen aus Silber?','Ja. Alle 10-DM-Gedenkmünzen bestehen aus Silber, bis 1997 aus 625er, ab 1998 aus 925er Silber.'],['Wie viel Silber hat eine 10-DM-Olympiamünze?','9,69 g Feinsilber bei 15,5 g Gesamtgewicht.'],['Sind Olympia-Münzen von 1972 selten?','Nein. Sie wurden in sehr hohen Auflagen geprägt, deshalb zählt meist nur der Silberwert.']]
  },
  {
    slug: 'schilling-silbermuenzen-wert',
    nav: 'Schilling Silber',
    inNav: false,
    group: 'silbermuenzen',
    keywords: 'silbermünze 100 schilling wert 390 (KD 9) · 50 schilling silbermünze wert 320 · 25 schilling silber wert 170 · 500 schilling silbermünze wert · schilling silbermünzen wert',
    title: 'Schilling Silbermünzen Wert: 25, 50, 100 und 500 Schilling',
    description: 'Was sind österreichische Schilling-Silbermünzen wert? Silberwert für 10, 25, 50, 100 und 500 Schilling als Tabelle nach Jahrgang und aktuellem Silberkurs.',
    h1: 'Schilling Silbermünzen Wert: Was sind 100 und 50 Schilling wert?',
    intro: 'Österreich gab von 1955 bis 2001 zahlreiche Gedenkmünzen aus Silber aus. Nennwert und Jahrgang wählen – der Rechner zeigt den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silvercoins', preset: 's100-640' },
    sections: [
      { h: 'Schilling-Silbermünzen: Wert-Tabelle', html: `<p><strong>Kurz gesagt:</strong> Eine 100-Schilling-Silbermünze ist je nach Jahrgang heute rund <span data-price="silverq15360">–</span> bis <span data-price="silverq18000">–</span> wert (Silberwert).</p>
<div class="table-wrap"><table><thead><tr><th>Münze</th><th>Material</th><th class="num">Feinsilber</th><th class="num">Silberwert heute</th></tr></thead><tbody><tr><td>10 Schilling 1957–1973</td><td>640er, 7,5 g</td><td class="num">4,8 g</td><td class="num"><span data-price="silverq4800">–</span></td></tr><tr><td>25 Schilling 1955–1973</td><td>800er, 13 g</td><td class="num">10,4 g</td><td class="num"><span data-price="silverq10400">–</span></td></tr><tr><td>50 Schilling 1959–1973</td><td>900er, 20 g</td><td class="num">18,0 g</td><td class="num"><span data-price="silverq18000">–</span></td></tr><tr><td>50 Schilling 1974–1978</td><td>640er, 20 g</td><td class="num">12,8 g</td><td class="num"><span data-price="silverq12800">–</span></td></tr><tr><td>100 Schilling 1974–1979</td><td>640er, 24 g</td><td class="num">15,36 g</td><td class="num"><span data-price="silverq15360">–</span></td></tr><tr><td>100 Schilling ab 1980</td><td>900er, 20 g</td><td class="num">18,0 g</td><td class="num"><span data-price="silverq18000">–</span></td></tr><tr><td>500 Schilling</td><td>925er, 24 g</td><td class="num">22,2 g</td><td class="num"><span data-price="silverq22200">–</span></td></tr></tbody></table></div>` },
      { h: 'Gedenkmünze oder Umlaufmünze?', html: `<p>Die Silbermünzen zu 25, 50, 100 und 500 Schilling sind Gedenkmünzen. Die 10-Schilling-Münze aus Silber war dagegen bis 1973 Umlaufgeld; spätere 10-Schilling-Stücke bestehen aus Kupfernickel. Gängige Gedenkmünzen werden nah am Silberwert gehandelt. Mehr bringen Stücke in Spiegelglanz mit Etui und Zertifikat oder seltene Motive.</p>` },
      { h: 'Schilling-Münzen verkaufen', html: `<p>Die Oesterreichische Nationalbank tauscht Schilling-Münzen der letzten Serie weiterhin zum Nennwert in Euro um. Bei Silbermünzen liegt der Silberwert aber meist deutlich darüber – 100 Schilling sind umgerechnet nur rund 7,27 Euro. Ein Verkauf an einen Silberankäufer lohnt sich daher fast immer; vergleichen Sie mehrere Angebote. Den <a href="/maria-theresien-taler-wert/">Maria-Theresien-Taler</a> und weitere Münzen bewerten Sie im <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a>.</p>` }
    ],
    faq: [['Wie viel Silber hat eine 100-Schilling-Münze?','Die Ausgaben 1974–1979 enthalten 15,36 g Feinsilber, die Ausgaben ab 1980 18 g.'],['Sind 50-Schilling-Münzen aus Silber?','Die Gedenkmünzen von 1959 bis 1978 ja. Spätere 50-Schilling-Münzen sind aus unedlem Metall.'],['Kann man Schilling-Silbermünzen noch umtauschen?','Die Oesterreichische Nationalbank tauscht Münzen der letzten Schilling-Serie zum Nennwert um. Bei Silbermünzen ist der Silberwert meist höher, deshalb lohnt eher der Verkauf.']]
  },
  {
    slug: 'philharmoniker-silber-wert',
    nav: 'Philharmoniker Silber',
    inNav: false,
    group: 'silbermuenzen',
    keywords: 'wiener philharmoniker silber 2.400 (KD 12) · philharmoniker silber 320 (KD 11) · philharmoniker silber wert 20',
    title: 'Wiener Philharmoniker Silber Wert: Was ist die Unze wert?',
    description: 'Was ist ein Wiener Philharmoniker aus Silber wert? Silberwert der 1-Unzen-Münze nach aktuellem Kurs, Münzdaten der Münze Österreich und Hinweise zum Verkauf.',
    h1: 'Wiener Philharmoniker Silber: Was ist die Unze heute wert?',
    intro: 'Der Wiener Philharmoniker ist eine der bekanntesten Silbermünzen Europas. Geben Sie die Anzahl ein – der Rechner zeigt den aktuellen Silberwert.',
    calc: { type: 'silvercoins', preset: 'philharmoniker-ag' },
    sections: [
      { h: 'Wiener Philharmoniker Silber: Daten im Überblick', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Österreich (Münze Österreich)</td></tr><tr><th scope="row">Erstausgabe</th><td>2008</td></tr><tr><th scope="row">Nennwert</th><td>1,50 Euro</td></tr><tr><th scope="row">Feingehalt</th><td>999</td></tr><tr><th scope="row">Feinsilber</th><td>31,10 g (1 Unze)</td></tr><tr><th scope="row">Durchmesser</th><td>37 mm</td></tr></tbody></table></div>
<p>Die Vorderseite zeigt die große Orgel im Goldenen Saal des Wiener Musikvereins, die Rückseite Instrumente der Wiener Philharmoniker. Das Motiv ist dasselbe wie beim Philharmoniker aus Gold.</p>
<div class="table-wrap"><table><thead><tr><th>Menge</th><th class="num">Feinsilber</th><th class="num">Silberwert heute</th></tr></thead><tbody><tr><td>1 Münze</td><td class="num">31,10 g</td><td class="num"><span data-price="silverozv">–</span></td></tr><tr><td>20 Münzen (Tube)</td><td class="num">622,1 g</td><td class="num"><span data-price="silverq622070">–</span></td></tr><tr><td>500 Münzen (Monsterbox)</td><td class="num">15,55 kg</td><td class="num"><span data-price="silverq15551738">–</span></td></tr></tbody></table></div>` },

      { h: 'Wiener Philharmoniker Silber verkaufen', html: `<p>Händler zahlen für Silber-Philharmoniker einen Preis nah am Silberwert. Als Münze aus der EU wird der Philharmoniker in Deutschland meist mit 19 % Mehrwertsteuer verkauft, manche Händler bieten auch differenzbesteuerte Stücke an. Der Abstand zwischen Kauf- und Ankaufspreis ist deshalb oft größer als bei Münzen aus Kanada oder Südafrika. Beim Verkauf durch Privatpersonen fällt keine Mehrwertsteuer an.</p>
<p>Den Philharmoniker aus Gold finden Sie unter <a href="/philharmoniker-gold-wert/">Wiener Philharmoniker Gold</a>, weitere Silbermünzen im <a href="/silbermuenzen-wert/">Silbermünzen-Rechner</a>.</p>` }
    ],
    faq: [["Wie viel Silber ist in einem Wiener Philharmoniker?","Ein Wiener Philharmoniker aus Silber enthält eine Feinunze, also 31,10 g Feinsilber mit einem Feingehalt von 999."],["Kann ich mit dem Philharmoniker bezahlen?","Er ist in Österreich gesetzliches Zahlungsmittel, aber nur zum Nennwert von 1,50 Euro. Sein Silberwert liegt weit darüber."],["Warum ist der Philharmoniker beim Kauf teurer als andere Silberunzen?","In Deutschland wird er meist mit 19 % Mehrwertsteuer verkauft. Münzen von außerhalb der EU wie Maple Leaf oder Krügerrand sind dagegen häufig differenzbesteuert und dadurch günstiger."]]
  },
  {
    slug: 'silberpreis-pro-gramm',
    nav: 'Silberpreis',
    inNav: false,
    tile: 'Aktueller Silberpreis je Gramm',
    keywords: 'silberpreis pro gramm 5.400 (KD 30) · silberpreis rechner 2.900 (KD 11) · 1 kg silber preis 6.600 (KD 15) · silberpreis pro kilo 320 · silber preis pro kg 2.900 (KD 47)',
    title: 'Silberpreis pro Gramm heute – Silberpreis-Rechner',
    description: 'Aktueller Silberpreis pro Gramm und pro Kilo in Euro – für 800er, 835er, 925er und 999er Silber. Mit Silberpreis-Rechner und Ankaufs-Richtwert.',
    h1: 'Silberpreis pro Gramm: aktueller Silberpreis für jeden Feingehalt',
    intro: 'Der Silberpreis gilt an der Börse für reines Feinsilber. Wie viel ein Gramm Ihres Silbers wert ist, hängt vom Feingehalt ab – Tabelle und Silberpreis-Rechner rechnen es um.',
    calc: { type: 'silver', preset: '925', weight: 1000 },
    priceTable: 'silver',
    sections: [
      {
        h: 'So entsteht der Silberpreis pro Gramm',
        html: `<p>Silber wird international in US-Dollar je Feinunze gehandelt. Eine Feinunze sind 31,1035 Gramm. In Euro umgerechnet und durch 31,1035 geteilt, ergibt sich der <strong>Silberpreis pro Gramm Feinsilber</strong> (999). Ein Kilogramm Feinsilber ist entsprechend tausendmal so viel wert.</p>
<p>Für Silberschmuck und Besteck zählt nur der enthaltene Silberanteil: Bei <a href="/925-silber-wert/">925er Sterlingsilber</a> sind es 92,5 %, bei <a href="/silberbesteck-wert/">800er Besteck</a> 80 %.</p>`
      },
      {
        h: '1 kg Silber Preis: Silberpreis pro Kilo',
        html: `<p>Ein Kilogramm Feinsilber ist aktuell als Material <strong data-price="silverkg">–</strong> wert. Für ein Kilo 925er Silber sind es 92,5 % davon, für ein Kilo 800er Besteck 80 %. Was Ankäufer für einen 1-kg-Silberbarren zahlen, zeigt der Rechner unter <a href="/silber-verkaufen/">Silber verkaufen</a>.</p>`
      },
      {
        h: 'Warum Händler beim Verkauf mehr verlangen',
        html: `<p>Wer Silber kauft, zahlt mehr als den Börsenpreis: Auf Silberbarren und seit 2025 auch auf neu importierte Silbermünzen fallen in Deutschland 19 % Mehrwertsteuer an – die günstigere Differenzbesteuerung gibt es nur noch in Ausnahmefällen. Dazu kommen Prägekosten und die Händlermarge. Wer Silber verkauft, erhält dagegen weniger als den Börsenpreis. Die Spalte „Ankaufs-Richtwert“ in der Tabelle zeigt dafür eine geschätzte Spanne – mehr dazu unter <a href="/silber-verkaufen/">Silber verkaufen</a>.</p>`
      }
    ],
    faq: [
      ['Wie hoch ist der Silberpreis pro Gramm?', 'Der Silberpreis pro Gramm Feinsilber ergibt sich aus dem Börsenkurs je Unze geteilt durch 31,1035. Den aktuellen Wert und die Preise für 925er und 800er Silber zeigt die Tabelle auf dieser Seite.'],
      ['Wie viel ist 1 Gramm Silber heute wert?', 'Ein Gramm Feinsilber ist so viel wert wie der aktuelle Silberpreis pro Gramm in der Tabelle oben. Für Sterlingsilber multiplizieren Sie diesen Wert mit 0,925, für 800er Silber mit 0,8.'],
      ['Wie viel ist 1 kg Silber wert?', 'Ein Kilogramm Feinsilber entspricht 1.000 Gramm zum aktuellen Silberpreis. Geben Sie im Silberpreis-Rechner 1000 g und 999er Silber ein, um den Betrag zu sehen.'],
      ['Warum schwankt der Silberpreis stärker als der Goldpreis?', 'Silber wird zu einem großen Teil in der Industrie verbraucht und der Markt ist kleiner als der Goldmarkt. Deshalb reagiert der Preis oft stärker auf Konjunktur und Nachfrage. Wie sich das Verhältnis beider Preise entwickelt, zeigt die <a href="/gold-silber-ratio/">Gold-Silber-Ratio</a>.']
    ]
  },
  {
    slug: 'gold-silber-ratio',
    nav: 'Gold-Silber-Ratio',
    inNav: false,
    tile: 'Verhältnis Gold zu Silber',
    keywords: 'gold silber ratio 12.100 (KD 16)',
    title: 'Gold-Silber-Ratio aktuell: Verhältnis von Gold zu Silber',
    description: 'Gold-Silber-Ratio heute: Wie viele Unzen Silber kostet eine Unze Gold? Aktueller Wert, historische Spannen und was die Kennzahl für Anleger bedeutet.',
    h1: 'Gold-Silber-Ratio: Wie viel Silber kostet eine Unze Gold?',
    intro: 'Die Gold-Silber-Ratio zeigt, wie viele Unzen Silber man für eine Unze Gold bekommt. Hier sehen Sie den aktuellen Wert aus den Live-Kursen und wie er sich historisch einordnet.',
    sections: [
      {
        h: 'Gold-Silber-Ratio aktuell',
        html: `<div class="table-wrap"><table><thead><tr><th>Kennzahl</th><th class="num">Wert heute</th></tr></thead><tbody>
<tr><td>Gold-Silber-Ratio</td><td class="num"><strong data-price="ratio">–</strong></td></tr>
<tr><td>1 Feinunze Gold</td><td class="num"><span data-price="goldozv">–</span></td></tr>
<tr><td>1 Feinunze Silber</td><td class="num"><span data-price="silverozv">–</span></td></tr>
<tr><td>1 kg Gold</td><td class="num"><span data-price="goldw1000">–</span></td></tr>
<tr><td>1 kg Silber</td><td class="num"><span data-price="silverw1000">–</span></td></tr>
</tbody></table></div>
<p>Die Ratio ist der Goldpreis geteilt durch den Silberpreis, jeweils für reines Metall in derselben Einheit. Ob Sie Unzen, Gramm oder Kilo vergleichen, spielt keine Rolle: Bei einer Ratio von 80 kostet eine Unze Gold so viel wie 80 Unzen Silber – und ein Kilo Gold so viel wie 80 Kilo Silber. Die Kurse werden stündlich aktualisiert.</p>`
      },
      {
        h: 'So berechnen Sie die Gold-Silber-Ratio',
        html: `<p><strong>Gold-Silber-Ratio = Goldpreis ÷ Silberpreis</strong></p>
<p>Beispiel: Kostet eine Feinunze Gold 3.600 € und eine Feinunze Silber 45 €, liegt die Ratio bei 3.600 ÷ 45 = 80. Die Währung spielt keine Rolle, solange beide Preise in derselben Währung und derselben Gewichtseinheit angegeben sind. Die aktuellen Einzelpreise finden Sie unter <a href="/goldpreis-pro-unze/">Goldpreis pro Unze</a> und <a href="/silberpreis-pro-gramm/">Silberpreis pro Gramm</a>.</p>`
      },
      {
        h: 'Historische Entwicklung der Gold-Silber-Ratio',
        html: `<p>Über Jahrhunderte war das Verhältnis gesetzlich festgelegt: Die USA legten 1792 ein Verhältnis von 15 : 1 fest, Frankreich 1803 von 15,5 : 1. Seit dem Ende fester Wechselkurse und der Freigabe der Edelmetallpreise in den 1970er-Jahren bildet sich die Ratio frei am Markt und schwankt stark:</p>
<div class="table-wrap"><table><thead><tr><th>Zeitpunkt</th><th class="num">Ratio (gerundet)</th></tr></thead><tbody>
<tr><td>Januar 1980 (Silber-Hoch der Hunt-Brüder)</td><td class="num">ca. 17</td></tr>
<tr><td>1991 (Silber auf Tiefststand)</td><td class="num">ca. 100</td></tr>
<tr><td>April 2011 (Silber nahe 50 US-Dollar)</td><td class="num">ca. 32</td></tr>
<tr><td>März 2020 (Corona-Crash)</td><td class="num">über 120 (Rekord)</td></tr>
</tbody></table></div>
<p>Seit den 1970er-Jahren lag die Ratio meist zwischen etwa 40 und 100. Werte über 80 gelten deshalb als hoch, Werte unter 50 als niedrig.</p>`
      },
      {
        h: 'Was sagt die Gold-Silber-Ratio aus?',
        html: `<p>Eine <strong>hohe Ratio</strong> bedeutet: Silber ist im Vergleich zu Gold günstig. Manche Anleger schichten dann einen Teil von Gold in Silber um und tauschen bei einer niedrigen Ratio wieder in Gold – so vermehren sie die Menge an Metall, ohne neues Geld einzusetzen. Eine <strong>niedrige Ratio</strong> heißt umgekehrt, dass Gold relativ günstig ist.</p>
<p>Eine verlässliche Prognose ist die Ratio nicht: Sie kann jahrelang hoch oder niedrig bleiben. Beim Kauf von Silber fallen zudem höhere Aufschläge und in Deutschland meist 19 % Mehrwertsteuer an, Anlagegold ist dagegen umsatzsteuerfrei. Ein Tausch lohnt sich deshalb nur bei deutlichen Bewegungen. Die Kennzahl ist eine Orientierung, keine Anlageberatung.</p>`
      },
      {
        h: 'Was ist Ihr Gold und Silber wert?',
        html: `<p>Wer Edelmetall besitzt, kann mit der Ratio einschätzen, welches Metall gerade relativ teuer ist. Was Ihr Bestand wert ist, zeigen der <a href="/">Goldrechner</a> und der <a href="/silberrechner/">Silberrechner</a>; was Ankäufer zahlen, erfahren Sie unter <a href="/gold-verkaufen/">Gold verkaufen</a> und <a href="/silber-verkaufen/">Silber verkaufen</a>.</p>`
      }
    ],
    faq: [
      ['Was ist die Gold-Silber-Ratio?', 'Die Gold-Silber-Ratio ist der Goldpreis geteilt durch den Silberpreis. Sie gibt an, wie viele Unzen Silber man für eine Unze Gold bekommt.'],
      ['Wie berechnet man die Gold-Silber-Ratio?', 'Man teilt den Goldpreis durch den Silberpreis, beide in derselben Währung und Gewichtseinheit. Beispiel: 3.600 € je Unze Gold geteilt durch 45 € je Unze Silber ergibt eine Ratio von 80.'],
      ['Wie hoch ist die Gold-Silber-Ratio aktuell?', 'Den aktuellen Wert berechnen wir stündlich aus den Live-Kursen für Gold und Silber. Sie finden ihn in der Tabelle oben auf dieser Seite.'],
      ['Was ist eine normale Gold-Silber-Ratio?', 'Seit den 1970er-Jahren lag die Ratio meist zwischen etwa 40 und 100. Früher war sie gesetzlich auf etwa 15 : 1 bis 15,5 : 1 festgelegt.'],
      ['Was bedeutet eine hohe Gold-Silber-Ratio?', 'Eine hohe Ratio, etwa über 80, bedeutet, dass Silber im Verhältnis zu Gold günstig ist. Eine Garantie, dass die Ratio wieder sinkt, gibt es nicht.'],
      ['Wann war die Gold-Silber-Ratio am höchsten?', 'Im März 2020, während des Corona-Crashs, stieg die Ratio auf über 120 – der höchste Wert seit Beginn der freien Preisbildung.']
    ]
  },
  {
    slug: 'silberbarren-wert',
    nav: 'Silberbarren',
    inNav: false,
    tile: '1 Unze bis 1 kg',
    keywords: 'silberbarren kaufen 12.100 (KD 24) · silberbarren 6.600 (KD 26) · silber barren kaufen 3.600 (KD 21) · silber barren 2.900 (KD 24) · 1oz silber 1.600 (KD 26) · 1 kg silberbarren 1.000 (KD 14) · 1g silberbarren 260 (KD 11) · silberbarren 1 kg preis 390 (KD 13) · silberpreis barren 210 (KD 28)',
    title: 'Silberbarren Wert: Preise für 1 Unze bis 1 kg Silber',
    description: 'Was ist ein Silberbarren wert? Aktueller Silberwert für Barren von 1 Unze bis 1 kg, was beim Silberbarren kaufen anfällt und was Händler beim Ankauf zahlen.',
    h1: 'Silberbarren Wert: Was ist mein Silberbarren heute wert?',
    intro: 'Wählen Sie Größe und Anzahl Ihrer Silberbarren. Der Rechner zeigt den aktuellen Silberwert und was Händler beim Ankauf ungefähr zahlen.',
    calc: { type: 'silvercoins', preset: 'bar-1kg', count: 1 },
    sections: [
      {
        h: 'Silberbarren-Preise nach Gewicht',
        html: `<div class="table-wrap"><table><thead><tr><th>Barren (999 Feinsilber)</th><th class="num">Silberwert heute</th></tr></thead><tbody>
<tr><td>1 Unze (31,1 g)</td><td class="num"><span data-price="silverq31072">–</span></td></tr>
<tr><td>50 g</td><td class="num"><span data-price="silverq49950">–</span></td></tr>
<tr><td>100 g</td><td class="num"><span data-price="silverq99900">–</span></td></tr>
<tr><td>250 g</td><td class="num"><span data-price="silverq249750">–</span></td></tr>
<tr><td>500 g</td><td class="num"><span data-price="silverq499500">–</span></td></tr>
<tr><td>1 kg</td><td class="num"><span data-price="silverq999000">–</span></td></tr>
<tr><td>5 kg</td><td class="num"><span data-price="silverq4995000">–</span></td></tr>
</tbody></table></div>
<p>Die Tabelle zeigt den reinen Silberwert bei 999er Feinsilber. Der Kaufpreis beim Händler liegt deutlich darüber, der Ankaufspreis etwas darunter – siehe unten.</p>`
      },
      {
        h: 'Silberbarren kaufen: Mehrwertsteuer und Aufschlag',
        html: `<p>Anders als Anlagegold ist Silber in Deutschland nicht von der Umsatzsteuer befreit. Auf Silberbarren fallen beim Kauf <strong>19 % Mehrwertsteuer</strong> an. Dazu kommen Herstellungskosten und die Händlermarge, die bei kleinen Barren im Verhältnis höher sind als bei großen. Ein 1-Unzen-Barren kostet deshalb je Gramm spürbar mehr als ein 1-kg-Barren.</p>
<p>Manche Händler bieten den Kauf mit Lagerung in einem <strong>Zollfreilager</strong> an. Solange das Silber dort bleibt, fällt keine Mehrwertsteuer an; wer es sich nach Deutschland liefern lässt, zahlt sie nachträglich. Achten Sie beim Kauf auf bekannte Hersteller, eingeprägtes Gewicht und Feingehalt (999) und seriöse Händler.</p>`
      },
      {
        h: 'Silberbarren oder Silbermünzen?',
        html: `<p>Für neu importierte <a href="/silbermuenzen-wert/">Silbermünzen</a> wie Maple Leaf oder Krügerrand gilt seit 2025 ebenfalls meist der volle Steuersatz, die günstigere Differenzbesteuerung gibt es nur noch in Ausnahmefällen. Münzen sind als gesetzliches Zahlungsmittel geprägt (der Nennwert spielt für den Preis aber keine Rolle), lassen sich leichter prüfen und in kleinen Stückzahlen verkaufen. Barren bieten bei großen Mengen den geringsten Aufschlag je Gramm. Ob Silber im Verhältnis zu Gold gerade günstig ist, zeigt die <a href="/gold-silber-ratio/">Gold-Silber-Ratio</a>.</p>`
      },
      {
        h: 'Was bekommen Sie beim Rückverkauf?',
        html: `<p>Beim Verkauf erhalten Privatpersonen keine Mehrwertsteuer zurück: Händler zahlen nur einen Anteil am Silberwert. Barren bekannter Hersteller in gutem Zustand erzielen die besten Preise. Wie der Silberankauf kalkuliert und worauf Sie achten sollten, steht unter <a href="/silber-verkaufen/">Silber verkaufen</a>; den aktuellen Kurs finden Sie unter <a href="/silberpreis-pro-gramm/">Silberpreis pro Gramm</a>.</p>`
      }
    ],
    faq: [
      ['Was ist ein 1-kg-Silberbarren wert?', 'Ein 1-kg-Barren aus 999er Silber enthält 999 g Feinsilber. Seinen aktuellen Silberwert zeigt die Tabelle oben; beim Kauf kommen 19 % Mehrwertsteuer und der Händleraufschlag dazu, beim Verkauf zahlen Händler etwas weniger als den Silberwert.'],
      ['Muss ich auf Silberbarren Mehrwertsteuer zahlen?', 'Ja. Beim Kauf von Silberbarren fallen in Deutschland 19 % Mehrwertsteuer an. Ausgenommen ist nur der Kauf mit Lagerung im Zollfreilager, solange das Silber dort bleibt.'],
      ['Wie viel ist eine Unze Silber wert?', 'Eine Unze sind 31,1035 g. Ein 1-Unzen-Barren aus 999er Silber enthält rund 31,07 g Feinsilber; seinen aktuellen Wert zeigt die Tabelle auf dieser Seite.'],
      ['Lohnen sich kleine Silberbarren?', 'Kleine Barren haben einen deutlich höheren Aufschlag je Gramm. Für größere Beträge sind 1-kg-Barren oder andere große Stückelungen meist günstiger.']
    ]
  },
  {
    slug: 'silber-verkaufen',
    nav: 'Silber verkaufen',
    inNav: false,
    tile: 'Silberankauf: was wird gezahlt?',
    keywords: 'silber verkaufen 12.100 (KD 33) · silber ankauf 3.600 (KD 8) · silberbarren verkaufen 1.900 (KD 15) · silberankauf preis 1.300 (KD 22)',
    title: 'Silber verkaufen: Silberankauf-Rechner für Barren & Münzen',
    description: 'Silber verkaufen: Was zahlt der Silberankauf für Barren, Münzen und Besteck? Mit Silberankauf-Rechner und Tipps für einen fairen Preis.',
    h1: 'Silber verkaufen: Was zahlt der Silberankauf?',
    intro: 'Ob Silberbarren, Münzen oder Besteck: Bevor Sie Silber verkaufen, sollten Sie den Materialwert kennen. Der Rechner zeigt ihn – und was Ankäufer erfahrungsgemäß dafür zahlen.',
    calc: { type: 'silvercoins', preset: 'bar-1kg', count: 1 },
    sections: [
      {
        h: 'Silberbarren verkaufen',
        html: `<p>Silberbarren aus 999er Feinsilber sind am einfachsten zu verkaufen: Gewicht und Reinheit sind eingeprägt, eine aufwendige Prüfung entfällt. Ankäufer zahlen für Barren deshalb einen höheren Anteil am Silberwert als für Besteck oder Schmuck. Barren bekannter Hersteller in gutem Zustand, idealerweise mit Zertifikat oder in der Originalverpackung, erzielen die besten Preise.</p>
<p>Ein 1-kg-Barren enthält 999 g Feinsilber. Im Rechner oben können Sie Barren von 1 Unze bis 1 kg und gängige Silbermünzen auswählen.</p>`
      },
      {
        h: 'So kalkuliert der Silberankauf',
        html: `<p>Grundlage ist der Börsenpreis für Feinsilber. Davon ziehen Ankäufer ihre Kosten für Prüfung, Einschmelzen, Versand und ihre Marge ab. Weil Silber pro Gramm viel weniger wert ist als Gold, fallen diese Kosten stärker ins Gewicht – bei <a href="/silberbesteck-wert/">Silberbesteck</a> und Schmuck ist der Abschlag deshalb größer als bei Barren und <a href="/silbermuenzen-wert/">Silbermünzen</a>.</p>`
      },
      {
        h: 'Silber verkaufen: Tipps für einen fairen Preis',
        html: `<ul>
<li><strong>Silberpreis kennen:</strong> Der aktuelle <a href="/silberpreis-pro-gramm/">Silberpreis pro Gramm</a> zeigt, wo der Materialwert liegt.</li>
<li><strong>Sortieren:</strong> Barren, Anlagemünzen, Besteck und Schmuck getrennt anbieten – gemischte Posten werden oft niedriger bewertet.</li>
<li><strong>Mehrere Angebote:</strong> Online-Ankäufer, Scheideanstalten und Münzhändler zahlen unterschiedlich. Viele veröffentlichen ihre Ankaufspreise je Kilo.</li>
<li><strong>Steuern:</strong> Für Privatpersonen ist der Verkauf nach mehr als einem Jahr Haltedauer steuerfrei (§ 23 EStG); innerhalb eines Jahres gilt eine Freigrenze von 1.000 € für alle privaten Veräußerungsgewinne.</li>
<li><strong>Ausweis:</strong> Ankäufer verlangen in der Regel einen Ausweis; bei Barzahlungen ab 2.000 € ist das gesetzlich vorgeschrieben.</li>
</ul>`
      }
    ],
    faq: [
      ['Was zahlt der Silberankauf für 1 kg Silber?', 'Das hängt vom Silberpreis und von der Form ab. Für Barren zahlen Ankäufer meist einen größeren Anteil am Materialwert als für Besteck. Der Rechner oben zeigt eine geschätzte Spanne für einen 1-kg-Barren.'],
      ['Wo kann ich Silber am besten verkaufen?', 'Vergleichen Sie Online-Ankäufer, Scheideanstalten und Münzhändler vor Ort. Achten Sie auf veröffentlichte Ankaufspreise, kostenlose versicherte Rücksendung und eine Prüfung des Feingehalts.'],
      ['Muss ich beim Verkauf von Silber Mehrwertsteuer zahlen?', 'Nein. Als Privatperson verkaufen Sie ohne Mehrwertsteuer. Mehrwertsteuer fällt nur beim Kauf von Silber beim Händler an.']
    ]
  },
  {
    slug: 'platin-verkaufen',
    nav: 'Platin & Palladium',
    inNav: false,
    tile: 'Platin- und Palladium-Rechner',
    keywords: 'platin verkaufen 1.000 (KD 22) · platin ankauf 480 (KD 10) · palladium verkaufen 260 (KD 9) · platinschmuck wert',
    title: 'Platin & Palladium verkaufen: Wert berechnen und Ankauf',
    description: 'Platin verkaufen: Wert von Platinschmuck, Platinbarren und Palladium berechnen, Platinschmuck erkennen und den richtigen Ankäufer finden.',
    h1: 'Platin und Palladium verkaufen: Was ist mein Platin wert?',
    intro: 'Platinschmuck, Palladium oder Barren: Wählen Sie Metall, Gewicht und Stempel – der Rechner zeigt den Materialwert nach aktuellem Kurs und was der Platinankauf erfahrungsgemäß zahlt.',
    calc: { type: 'pgm', preset: 'platinum', weight: 10, fineness: '950' },
    sections: [
      {
        h: 'Platinschmuck erkennen',
        html: `<p>Den aktuellen Kurs je Gramm und je Unze finden Sie unter <a href="/platinpreis-pro-gramm/">Platinpreis pro Gramm</a>.</p>
<p>Platinschmuck ist in Deutschland meist mit <strong>950</strong> gestempelt, oft zusammen mit <strong>Pt</strong> oder „Plat“. Er besteht also zu 95 % aus Platin. Platin ist grau-weiß, schwerer als Gold und muss im Gegensatz zu Weißgold nicht rhodiniert werden. Verwechslungsgefahr besteht mit <a href="/750-gold-wert/">Weißgold</a> – der Stempel schafft Klarheit.</p>`
      },
      {
        h: 'Palladium verkaufen',
        html: `<p>Palladium gehört wie Platin zu den Platinmetallen. Palladiumschmuck trägt häufig den Stempel <strong>950</strong> oder <strong>500</strong> mit dem Zusatz <strong>Pd</strong>. Palladium steckt außerdem in vielen <a href="/zahngold-wert/">Zahngold-Legierungen</a> und in Weißgold. Wählen Sie im Rechner oben einfach „Palladium“ als Metall.</p>`
      },
      {
        h: 'Platin verkaufen: so gehen Sie vor',
        html: `<ul>
<li><strong>Stempel prüfen:</strong> 950 Pt oder Pd – ohne Stempel sollte ein Ankäufer das Metall analysieren.</li>
<li><strong>Richtigen Ankäufer wählen:</strong> Nicht jeder Goldankäufer kauft Platin und Palladium. Scheideanstalten und Edelmetallhändler sind die besten Ansprechpartner.</li>
<li><strong>Barren und Münzen getrennt:</strong> Platinbarren und Anlagemünzen werden näher am Börsenkurs angekauft als Schmuck.</li>
<li><strong>Angebote vergleichen:</strong> Wie Ankäufer allgemein kalkulieren, erklärt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.</li>
</ul>`
      }
    ],
    faq: [
      ['Wer kauft Platinschmuck an?', 'Am besten Scheideanstalten und Edelmetallhändler, die Platin ausdrücklich ankaufen. Viele reine Goldankäufer nehmen Platin nicht an oder zahlen wenig dafür. Den aktuellen Preis je Gramm finden Sie unter Platinpreis pro Gramm.'],
      ['Ist Platin mehr wert als Gold?', 'Lange Zeit war Platin teurer als Gold. Seit etwa 2015 ist es jedoch deutlich günstiger. Die Tabelle oben zeigt den aktuellen Stand.'],
      ['Woran erkenne ich Platinschmuck?', 'Am Stempel 950, oft mit „Pt“. Platin ist grau-weiß und spürbar schwerer als ein gleich großes Schmuckstück aus Gold oder Silber.']
    ]
  },
  {
    slug: 'platinpreis-pro-gramm',
    nav: 'Platinpreis',
    inNav: false,
    tile: 'Platin je Gramm und Unze',
    keywords: 'platin preis gramm 2.400 (KD 53) · platinpreis pro gramm · platinpreis aktuell',
    title: 'Platinpreis pro Gramm heute in Euro – aktueller Kurs',
    description: 'Aktueller Platinpreis pro Gramm und pro Unze in Euro, dazu Werte für Platinschmuck 950 und 999 – stündlich aktualisiert.',
    h1: 'Platinpreis pro Gramm: aktueller Kurs in Euro',
    intro: 'Platin gehört wie Gold zu den Edelmetallen. Hier sehen Sie den aktuellen Preis je Gramm und je Unze in Euro.',
    calc: { type: 'pgm', preset: 'platinum', only: 'platinum', weight: 1, fineness: '999' },
    priceTable: 'platinum',
    sections: [
      {
        h: 'Platin je Gramm und Unze',
        html: `<div class="table-wrap"><table><thead><tr><th>Metall</th><th class="num">1 Gramm</th><th class="num">1 Feinunze</th></tr></thead><tbody>
<tr><td>Platin</td><td class="num"><span data-price="platinum">–</span></td><td class="num"><span data-price="platinumozv">–</span></td></tr>
</tbody></table></div>
<p>Platin wird in der Industrie verwendet, etwa in Abgaskatalysatoren, aber auch in Schmuck und Anlagebarren. Sein Preis schwankt deshalb oft stärker als der Goldpreis. Den Kurs des verwandten Metalls finden Sie unter <a href="/palladiumpreis-pro-gramm/">Palladiumpreis pro Gramm</a>.</p>`
      },
      {
        h: 'Platinschmuck und Zahngold bewerten',
        html: `<p>Platinschmuck ist meist mit <strong>950</strong> gestempelt, enthält also 95 % Platin. Was Ankäufer dafür zahlen, zeigt der Rechner unter <a href="/platin-verkaufen/">Platin verkaufen</a>. Auch Zahngold enthält manchmal Platin – mehr dazu beim <a href="/zahngold-wert/">Zahngold-Rechner</a>.</p>`
      }
    ],
    faq: [
      ['Wie hoch ist der Platinpreis pro Gramm?', 'Den aktuellen Preis zeigt die Tabelle auf dieser Seite. Er ergibt sich aus dem Börsenkurs je Unze geteilt durch 31,1035.'],
      ['Was ist 950er Platin wert?', '950er Platin enthält 95 % reines Platin. Sein Materialwert ist Gewicht × 0,95 × Platinpreis pro Gramm.']
    ]
  },
  {
    slug: 'gold-dichte',
    nav: 'Gold Dichte',
    inNav: false,
    tile: 'Gewicht aus Volumen',
    keywords: 'gold dichte 2.900 (KD 10–22) · dichte gold 2.900 · dichte von gold 2.400 · gold gewicht berechnen',
    title: 'Gold Dichte: 19,32 g/cm³ – Gewicht und Wert berechnen',
    description: 'Die Dichte von Gold beträgt 19,32 g/cm³. Rechner für Volumen und Gewicht, mit Dichtetabelle für 585er und 750er Gold, Silber, Platin, Palladium.',
    h1: 'Gold Dichte: Gewicht aus dem Volumen berechnen',
    intro: 'Reines Gold wiegt 19,32 Gramm pro Kubikzentimeter. Geben Sie Volumen oder Gewicht ein – der Rechner zeigt das Gegenstück und den Materialwert.',
    calc: { type: 'density', preset: 'gold999', mode: 'volume', amount: 10 },
    sections: [
      {
        h: 'Dichte von Gold und anderen Edelmetallen',
        html: `<p><strong>Kurz gesagt:</strong> Die Dichte von reinem Gold (999) liegt bei <strong>19,32 g/cm³</strong>. Ein Würfel mit 1 cm Kantenlänge wiegt also 19,32 g, ein Liter (1.000 cm³) rund 19,3 kg.</p>
<div class="table-wrap"><table><thead><tr><th>Material</th><th class="num">Dichte in g/cm³</th></tr></thead><tbody>
<tr><td>Feingold 999</td><td class="num">19,32</td></tr>
<tr><td>750er Gelbgold</td><td class="num">ca. 15,5</td></tr>
<tr><td>585er Gelbgold</td><td class="num">ca. 13,3</td></tr>
<tr><td>Platin</td><td class="num">21,45</td></tr>
<tr><td>Palladium</td><td class="num">12,02</td></tr>
<tr><td>Feinsilber 999</td><td class="num">10,49</td></tr>
<tr><td>Sterlingsilber 925</td><td class="num">ca. 10,36</td></tr>
</tbody></table></div>
<p>Bei Legierungen hängt die Dichte von der Zusammensetzung ab: Rotgold, Gelbgold und Weißgold mit gleichem Feingehalt wiegen unterschiedlich viel, weil Kupfer, Silber und Palladium verschieden dicht sind. Die Werte mit „ca.“ sind Richtwerte für typisches Gelbgold.</p>`
      },
      {
        h: 'So berechnen Sie das Gewicht von Gold',
        html: `<p><strong>Gewicht in g = Volumen in cm³ × Dichte in g/cm³</strong></p>
<p>Beispiel: Ein Goldbarren mit 5 × 3 × 1 cm hat 15 cm³ Volumen und wiegt als Feingold 15 × 19,32 = 289,8 g. Umgekehrt braucht ein Kilogramm Feingold nur rund 51,8 cm³ – etwa so viel wie ein Würfel mit 3,7 cm Kantenlänge. Aus dem Gewicht ergibt sich der Wert: Feingewicht mal <a href="/goldpreis-pro-gramm/">Goldpreis pro Gramm</a>. Die Rechnung gilt für massive Stücke ohne Hohlräume und Steine.</p>`
      },
      {
        h: 'Gold mit der Dichte prüfen: was der Test zeigt und was nicht',
        html: `<p>Eine Dichtemessung (Wiegen in Luft und in Wasser, das Archimedische Prinzip) kann auf Fälschungen hinweisen: Vergoldetes Messing oder Kupfer ist deutlich leichter, als es für Gold sein müsste. Beweisen kann der Test die Echtheit nicht. Wolfram hat mit 19,25 g/cm³ fast dieselbe Dichte wie Gold, und bei Schmuck stören Steine, Hohlräume und Lötstellen die Messung. Zuverlässig sind nur Prüfverfahren des Fachmanns. Was die Stempel bedeuten, steht unter <a href="/333-gold-wert/">333er</a>, <a href="/585-gold-wert/">585er</a> und <a href="/750-gold-wert/">750er Gold</a>.</p>`
      }
    ],
    faq: [
      ['Wie hoch ist die Dichte von Gold?', 'Reines Gold hat eine Dichte von 19,32 g/cm³. Übliche Gold-Legierungen sind leichter: 750er Gelbgold wiegt etwa 15,5 g/cm³, 585er Gelbgold etwa 13,3 g/cm³.'],
      ['Wie viel wiegt ein Kubikzentimeter Gold?', 'Ein Kubikzentimeter Feingold wiegt 19,32 Gramm.'],
      ['Wie viel wiegt ein Liter Gold?', 'Ein Liter (1.000 cm³) Feingold wiegt rund 19,3 Kilogramm.'],
      ['Ist Gold schwerer als Silber und Platin?', 'Gold ist fast doppelt so dicht wie Silber (10,49 g/cm³). Platin ist mit 21,45 g/cm³ noch etwas schwerer als Gold.'],
      ['Kann man die Echtheit von Gold an der Dichte erkennen?', 'Die Dichte kann Fälschungen entlarven, die viel leichter sind. Sicher beweisen kann sie die Echtheit nicht, weil sich zum Beispiel Wolfram kaum von Gold unterscheidet. Lassen Sie Zweifelsfälle beim Fachmann prüfen.']
    ]
  },
  {
    slug: 'unze-in-gramm',
    nav: 'Unze in Gramm',
    inNav: false,
    tile: 'Umrechner für Unzen und Gramm',
    keywords: 'unze in gramm 14.800 (Cluster 81.800, KD 21–37) · 1 unze gold in gramm 9.900 · 1 unze in gramm 9.900 · unzen in gramm 4.400 · gramm in unzen 2.900 · wieviel ist eine unze gold 1.300 · 1 unze silber in gramm 1.900',
    title: 'Unze in Gramm umrechnen: 1 Feinunze = 31,1035 g',
    description: 'Unze in Gramm und Gramm in Unze umrechnen: 1 Feinunze Gold oder Silber wiegt 31,1035 g. Rechner mit Umrechnungstabelle und dem Unterschied zur Haushaltsunze.',
    h1: 'Unze in Gramm umrechnen',
    intro: 'Eine Feinunze Gold, Silber oder Platin wiegt 31,1035 Gramm. Menge und Einheit eingeben – der Rechner zeigt Gramm, Kilogramm und Unzen.',
    calc: { type: 'unit', preset: 'oz', amount: 1 },
    sections: [
      {
        h: 'Wie viel Gramm ist eine Unze Gold?',
        html: `<p><strong>Kurz gesagt:</strong> <strong>1 Unze Gold = 31,1035 Gramm.</strong> Gemeint ist die Feinunze (auch Troy-Unze, Kürzel oz t oder ozt). Sie gilt für alle Edelmetalle: 1 Unze Silber, Platin und Palladium wiegen ebenfalls 31,1035 g.</p>
<div class="table-wrap"><table><thead><tr><th>Unzen</th><th class="num">Gramm</th></tr></thead><tbody>
<tr><td>1/10 Unze</td><td class="num">3,11 g</td></tr>
<tr><td>1/4 Unze</td><td class="num">7,78 g</td></tr>
<tr><td>1/2 Unze</td><td class="num">15,55 g</td></tr>
<tr><td>1 Unze</td><td class="num">31,10 g</td></tr>
<tr><td>2 Unzen</td><td class="num">62,21 g</td></tr>
<tr><td>5 Unzen</td><td class="num">155,52 g</td></tr>
<tr><td>10 Unzen</td><td class="num">311,03 g</td></tr>
<tr><td>100 Unzen</td><td class="num">3.110,35 g</td></tr>
</tbody></table></div>`
      },
      {
        h: 'Gramm in Unzen umrechnen',
        html: `<p>Gramm durch 31,1035 teilen ergibt Feinunzen. Umgekehrt: Unzen mal 31,1035 ergibt Gramm.</p>
<div class="table-wrap"><table><thead><tr><th>Gramm</th><th class="num">Feinunzen</th></tr></thead><tbody>
<tr><td>1 g</td><td class="num">0,0322 oz</td></tr>
<tr><td>10 g</td><td class="num">0,3215 oz</td></tr>
<tr><td>100 g</td><td class="num">3,2151 oz</td></tr>
<tr><td>500 g</td><td class="num">16,0754 oz</td></tr>
<tr><td>1 kg</td><td class="num">32,1507 oz</td></tr>
</tbody></table></div>`
      },
      {
        h: 'Feinunze oder Haushaltsunze?',
        html: `<p>Es gibt zwei verschiedene Unzen. Die <strong>Feinunze</strong> (Troy-Unze) wiegt 31,1035 g und ist die Einheit für Edelmetalle. Die <strong>Haushaltsunze</strong> (Avoirdupois-Unze, aus dem englischen Pfund-System) wiegt nur 28,3495 g und wird bei Lebensmitteln und Paketen verwendet. Für Gold und Silber gilt immer die Feinunze.</p>
<p>Bei vielen Anlagemünzen bezeichnet die Unze den <em>Feingehalt</em>: Der <a href="/kruegerrand-wert/">Krügerrand</a> enthält eine Feinunze Gold, wiegt insgesamt aber 33,93 g, weil er mit Kupfer legiert ist. Was eine Unze heute kostet, zeigen <a href="/goldpreis-pro-unze/">Goldpreis pro Unze</a> und <a href="/silberpreis-pro-unze/">Silberpreis pro Unze</a>.</p>`
      }
    ],
    faq: [
      ['Wie viel Gramm ist eine Unze Gold?', 'Eine Feinunze Gold wiegt 31,1035 Gramm.'],
      ['Wie viel Gramm hat eine Unze Silber?', 'Auch eine Feinunze Silber wiegt 31,1035 Gramm. Die Feinunze gilt für alle Edelmetalle.'],
      ['Wie rechne ich Unzen in Gramm um?', 'Multiplizieren Sie die Unzen mit 31,1035. Beispiel: 2,5 Unzen × 31,1035 = 77,76 Gramm.'],
      ['Wie rechne ich Gramm in Unzen um?', 'Teilen Sie die Gramm durch 31,1035. Beispiel: 100 g ÷ 31,1035 = 3,2151 Unzen.'],
      ['Was ist der Unterschied zwischen Feinunze und normaler Unze?', 'Die Feinunze (Troy-Unze) wiegt 31,1035 g, die normale Haushaltsunze nur 28,3495 g. Für Gold, Silber, Platin und Palladium wird die Feinunze verwendet.']
    ]
  },
  {
    slug: 'palladiumpreis-pro-gramm',
    nav: 'Palladiumpreis',
    inNav: false,
    tile: 'Palladium je Gramm und Unze',
    keywords: 'palladium preis 14.800 (Cluster 21.100, KD 20–42) · palladium preis gramm 480 · palladium gramm preis 480 · palladiumpreis aktuell',
    title: 'Palladiumpreis pro Gramm heute in Euro – aktuell',
    description: 'Aktueller Palladiumpreis pro Gramm und Feinunze in Euro, stündlich aktualisiert. Mit Rechner für Palladiumschmuck und Barren.',
    h1: 'Palladiumpreis pro Gramm: aktueller Kurs in Euro',
    intro: 'Palladium ist ein Platinmetall und wird vor allem in Abgaskatalysatoren verbraucht. Hier sehen Sie den aktuellen Preis je Gramm und je Unze – und was Ihr Palladium wert ist.',
    calc: { type: 'pgm', preset: 'palladium', only: 'palladium', weight: 10, fineness: '950' },
    priceTable: 'palladium',
    sections: [
      {
        h: 'Palladium je Gramm, Kilo und Unze',
        html: `<div class="table-wrap"><table><thead><tr><th>Menge Feinpalladium</th><th class="num">Wert heute</th></tr></thead><tbody>
<tr><td>1 Gramm</td><td class="num"><span data-price="palladium">–</span></td></tr>
<tr><td>10 Gramm</td><td class="num"><span data-price="palladiumq10000">–</span></td></tr>
<tr><td>100 Gramm</td><td class="num"><span data-price="palladiumq100000">–</span></td></tr>
<tr><td>1 Feinunze (31,10 g)</td><td class="num"><span data-price="palladiumozv">–</span></td></tr>
<tr><td>1 Kilogramm</td><td class="num"><span data-price="palladiumq1000000">–</span></td></tr>
</tbody></table></div>
<p>Das ist der Börsenwert von Palladium mit 999 Feingehalt. Beim Kauf von Barren kommt ein Händleraufschlag hinzu; beim Verkauf zahlen Ankäufer weniger als den Börsenwert. Den Preis für Platin finden Sie unter <a href="/platinpreis-pro-gramm/">Platinpreis pro Gramm</a>.</p>`
      },
      {
        h: 'Wovon der Palladiumpreis abhängt',
        html: `<p>Der größte Teil des Palladiums steckt in Abgaskatalysatoren von Benzinfahrzeugen. Der Preis hängt deshalb stark von der Autoindustrie ab, etwa von der Zahl neu gebauter Verbrenner. Gefördert wird Palladium vor allem in Russland und Südafrika, häufig als Nebenprodukt der Platin- und Nickelgewinnung. Wegen dieses kleinen, vom Angebot weniger Länder abhängigen Marktes schwankt der Preis oft stärker als der Goldpreis. Dieser Rechner zeigt nur den aktuellen Kurs, keine Prognose.</p>`
      },
      {
        h: 'Palladium im Schmuck und im Zahngold',
        html: `<p>Palladium wird in Weißgold-Legierungen verwendet und dient dort als nickelfreie Alternative zu nickelhaltigem Weißgold. Auch reiner Palladiumschmuck ist üblich, meist mit dem Stempel <strong>950</strong> (95 % Palladium). Im Rechner oben rechnen Sie Gewicht und Stempel in einen Materialwert und einen Ankaufs-Richtwert um. Manche Zahnlegierungen enthalten ebenfalls Palladium; mehr dazu im <a href="/zahngold-wert/">Zahngold-Rechner</a>.</p>`
      }
    ],
    faq: [
      ['Wie hoch ist der Palladiumpreis pro Gramm?', 'Den aktuellen Preis zeigt die Tabelle auf dieser Seite. Er ergibt sich aus dem Börsenkurs je Feinunze geteilt durch 31,1035.'],
      ['Wie viel kostet eine Unze Palladium?', 'Eine Feinunze Palladium entspricht 31,1035 Gramm. Den aktuellen Betrag in Euro sehen Sie in der Zeile „1 Feinunze“ der Tabelle.'],
      ['Wofür wird Palladium verwendet?', 'Hauptsächlich für Abgaskatalysatoren in Autos mit Benzinmotor, außerdem in der Elektronik, im Schmuck und in der Zahntechnik.'],
      ['Was ist 950er Palladium wert?', '950er Palladium enthält 95 % reines Palladium. Der Materialwert ist Gewicht × 0,95 × Palladiumpreis pro Gramm.']
    ]
  },
  {
    slug: 'silberpreis-pro-unze',
    nav: 'Silberpreis pro Unze',
    inNav: false,
    tile: 'Feinunze Silber in Euro',
    keywords: 'silberpreis unze 8.100 (Cluster 25.100, KD 27–54) · 1 unze silber preis 6.600 · 1 unze silber 6.600 · silber unze preis',
    title: 'Silberpreis pro Unze heute: Feinunze Silber in Euro',
    description: 'Was kostet eine Feinunze Silber heute? Aktueller Silberpreis pro Unze in Euro, dazu Werte für 1/10 bis 10 Unzen und 1 kg – stündlich aktualisiert.',
    h1: 'Silberpreis pro Unze: Was kostet eine Feinunze Silber heute?',
    intro: 'An der Börse wird Silber in Feinunzen gehandelt. Hier sehen Sie den aktuellen Silberpreis pro Unze in Euro und den Wert für andere Mengen.',
    calc: { type: 'silver', preset: '999', weight: '31,1035' },
    sections: [
      {
        h: 'Silberpreis pro Unze in Euro',
        html: `<div class="table-wrap"><table><thead><tr><th>Menge Feinsilber</th><th class="num">Wert heute</th></tr></thead><tbody>
<tr><td>1/10 Unze (3,11 g)</td><td class="num"><span data-price="silverq3110">–</span></td></tr>
<tr><td>1/2 Unze (15,55 g)</td><td class="num"><span data-price="silverq15552">–</span></td></tr>
<tr><td>1 Unze (31,10 g)</td><td class="num"><span data-price="silverozv">–</span></td></tr>
<tr><td>5 Unzen (155,5 g)</td><td class="num"><span data-price="silverq155517">–</span></td></tr>
<tr><td>10 Unzen (311,0 g)</td><td class="num"><span data-price="silverq311035">–</span></td></tr>
<tr><td>1 kg (32,15 Unzen)</td><td class="num"><span data-price="silverw1000">–</span></td></tr>
</tbody></table></div>
<p>Das ist der reine Börsenwert von Feinsilber (999). Beim Kauf von Münzen und Barren kommen ein Händleraufschlag und in der Regel Mehrwertsteuer hinzu; beim Verkauf erhalten Sie etwas weniger. Den Preis je Gramm für 800er, 925er und andere Stempel zeigt <a href="/silberpreis-pro-gramm/">Silberpreis pro Gramm</a>.</p>`
      },
      {
        h: 'Eine Unze Silber in Münzen und Barren',
        html: `<p>Viele Silber-Anlagemünzen enthalten genau eine Feinunze Feinsilber, etwa <a href="/maple-leaf-silber-wert/">Maple Leaf</a>, <a href="/philharmoniker-silber-wert/">Wiener Philharmoniker</a> und <a href="/kruegerrand-silber-wert/">Krügerrand in Silber</a>. Was Ankäufer für Münzen und Barren zahlen, zeigen <a href="/silberbarren-wert/">Silberbarren-Wert</a> und <a href="/silbermuenzen-wert/">Silbermünzen-Wert</a>. Wie viel Gramm eine Unze hat, steht unter <a href="/unze-in-gramm/">Unze in Gramm</a>.</p>`
      },
      {
        h: 'Silberpreis und Goldpreis im Vergleich',
        html: `<p>Silber ist deutlich günstiger als Gold, schwankt aber oft stärker, weil es zu einem großen Teil in der Industrie verbraucht wird. Wie viele Unzen Silber eine Unze Gold wert ist, zeigt die <a href="/gold-silber-ratio/">Gold-Silber-Ratio</a>. Den Goldpreis finden Sie unter <a href="/goldpreis-pro-unze/">Goldpreis pro Unze</a>.</p>`
      }
    ],
    faq: [
      ['Was kostet eine Unze Silber heute?', 'Den aktuellen Preis in Euro zeigt die Tabelle auf dieser Seite. Er wird aus dem internationalen Börsenkurs berechnet und stündlich aktualisiert.'],
      ['Wie viel ist eine Unze Silber wert?', 'Eine Feinunze Silber ist so viel wert wie der aktuelle Silberpreis pro Unze. Beim Verkauf einer Münze oder eines Barrens zahlen Händler meist etwas weniger als diesen Börsenwert.'],
      ['Warum kostet eine Silbermünze mehr als der Silberpreis?', 'Beim Kauf kommen Prägekosten, Händlermarge und in der Regel Mehrwertsteuer zum Börsenwert des Silbers hinzu.'],
      ['Was kostet ein Kilo Silber in Euro?', 'Ein Kilogramm Feinsilber entspricht rund 32,15 Feinunzen. Den aktuellen Wert sehen Sie in der Zeile „1 kg“ der Tabelle.']
    ]
  },
  {
    slug: 'goldpreis-widget',
    nav: 'Goldpreis-Widget',
    inNav: false,
    keywords: 'goldpreis widget · goldkurs widget für website · goldpreis einbinden',
    title: 'Goldpreis-Widget kostenlos für Ihre Website einbinden',
    description: 'Kostenloses Goldpreis-Widget: aktueller Gold- und Silberpreis in Euro für Ihre Website oder Ihren Blog. Ohne Cookies, ohne Tracking, Code einfach kopieren.',
    h1: 'Goldpreis-Widget für Ihre Website',
    intro: 'Zeigen Sie den aktuellen Gold- und Silberpreis auf Ihrer Website – kostenlos, ohne Anmeldung, ohne Cookies und ohne Tracking.',
    sections: [
      {
        h: 'So sieht das Widget aus',
        html: `<p><iframe src="https://dergoldrechner.de/widget/" title="Goldpreis heute" width="300" height="190" style="border:0;max-width:100%" loading="lazy"></iframe></p>`
      },
      {
        h: 'Code zum Einbinden',
        html: `<p>Kopieren Sie diesen Code an die Stelle Ihrer Website, an der der Goldpreis erscheinen soll:</p>
<pre class="code"><code>&lt;iframe src="https://dergoldrechner.de/widget/" title="Goldpreis heute" width="300" height="190" style="border:0;max-width:100%" loading="lazy"&gt;&lt;/iframe&gt;
&lt;p style="font-size:12px"&gt;Goldpreis von &lt;a href="https://dergoldrechner.de/"&gt;dergoldrechner.de&lt;/a&gt;&lt;/p&gt;</code></pre>
<p>Das Widget lädt den Kurs direkt von unserem Server und aktualisiert sich bei jedem Seitenaufruf. Es setzt keine Cookies und verwendet kein Tracking. Wie bei jedem eingebetteten Inhalt wird beim Laden die IP-Adresse des Besuchers an unseren Server übermittelt; sie wird nur für den technischen Betrieb in den Server-Logs verarbeitet. Breite und Höhe können Sie anpassen; der Hinweis mit dem Link unter dem Widget sollte erhalten bleiben.</p>`
      }
    ],
    faq: [
      ['Kostet das Goldpreis-Widget etwas?', 'Nein. Das Widget ist kostenlos und ohne Anmeldung nutzbar.'],
      ['Woher stammt der Goldpreis im Widget?', 'Es ist derselbe Kurs wie auf dergoldrechner.de: der internationale Spotpreis in Euro, stündlich aktualisiert und mit einer zweiten Quelle abgeglichen.'],
      ['Setzt das Widget Cookies?', 'Nein. Es lädt nur den aktuellen Kurs und setzt weder Cookies noch Tracking. Technisch bedingt wird beim Laden die IP-Adresse an unseren Server übermittelt.']
    ]
  },
  {
    slug: 'so-rechnen-wir',
    nav: 'So rechnen wir',
    inNav: false,
    keywords: 'methodik · kursquelle · goldpreis berechnung · ankaufspreis annahmen',
    title: 'So rechnen wir: Kursquellen, Formeln und Annahmen',
    description: 'Woher der Goldpreis auf dergoldrechner.de kommt, wie Materialwert und Ankaufs-Richtwert berechnet werden und welche Annahmen dahinterstehen.',
    h1: 'So rechnen wir: Kurse, Formeln und Annahmen',
    intro: 'Alle Rechner auf dieser Seite folgen denselben, offen gelegten Regeln. Hier steht, woher die Kurse kommen, wie gerechnet wird und wo die Grenzen der Ergebnisse liegen.',
    sections: [
      {
        h: 'Woher die Kurse kommen',
        html: `<p>Grundlage ist der internationale <strong>Spotpreis</strong> für Gold, Silber, Platin und Palladium in Euro. Unser Server ruft ihn stündlich von einem Kursdienst ab und rechnet ihn von der Feinunze (31,1035 g) auf ein Gramm um.</p>
<p>Zur Kontrolle wird der Kurs regelmäßig mit einer <strong>zweiten, unabhängigen Kursquelle</strong> verglichen, deren Dollarkurs mit dem offiziellen Referenzkurs der Europäischen Zentralbank in Euro umgerechnet wird. Weichen beide Quellen auffällig voneinander ab, zeigt die Seite vorübergehend weiter den letzten geprüften Kurs. Große Kurssprünge werden erst angezeigt, wenn sie durch eine zweite Messung bestätigt sind. Unter jedem Ergebnis steht, von wann der Kurs ist.</p>`
      },
      {
        h: 'So wird der Materialwert berechnet',
        html: `<p><strong>Materialwert = Gewicht × Feingehalt × Kurs pro Gramm Feinmetall</strong></p>
<p>Der Feingehalt ist der Stempel geteilt durch 1.000: 585er Gold enthält 58,5 % Gold, 925er Silber 92,5 % Silber. Bei Münzen verwenden wir den offiziellen Feingoldgehalt der jeweiligen Ausgabe, bei Anlagebarren das Nenngewicht. Beim Zahngold rechnen wir mit einer Spanne für den Goldanteil der Legierung und ziehen den angegebenen Keramikanteil ab.</p>`
      },
      {
        h: 'Annahmen zum Ankaufs-Richtwert',
        html: `<p>Ankäufer zahlen nicht den vollen Materialwert, weil sie Prüfung, Scheidung und Marge abdecken müssen. Der Richtwert ist deshalb eine <strong>Spanne</strong>. Sie beruht auf veröffentlichten Ankaufspreisen von Händlern und ist eine Schätzung, kein belegter Marktpreis:</p>
<div class="table-wrap"><table><thead><tr><th>Art</th><th class="num">Anteil am Materialwert</th></tr></thead><tbody>
<tr><td>Goldschmuck und Altgold (333 bis 750)</td><td class="num">${band('goldMid')}</td></tr>
<tr><td>Gold ab 900 (z. B. Feingoldschmuck)</td><td class="num">${band('goldHigh')}</td></tr>
<tr><td>Anlagemünzen 1 Unze (Krügerrand, Maple Leaf …)</td><td class="num">${band('goldBullion')}</td></tr>
<tr><td>Teilstücke von Anlagemünzen</td><td class="num">${band('goldBullionSmall')}</td></tr>
<tr><td>Historische Goldmünzen (20 Mark, Vreneli …)</td><td class="num">${band('goldCoin')}</td></tr>
<tr><td>Goldbarren bis 10 g</td><td class="num">${band('goldBarSmall')}</td></tr>
<tr><td>Goldbarren 20 bis 50 g und 1 Unze</td><td class="num">${band('goldBar')}</td></tr>
<tr><td>Goldbarren ab 100 g</td><td class="num">${band('goldBarLarge')}</td></tr>
<tr><td>Zahngold</td><td class="num">${band('dental')}</td></tr>
<tr><td>Silberbesteck und Silberschmuck</td><td class="num">${band('silverScrap')}</td></tr>
<tr><td>Silbermünzen (Gedenkmünzen)</td><td class="num">${band('silverCoin')}</td></tr>
<tr><td>Silberbarren und Silber-Anlagemünzen</td><td class="num">${band('silverBar')}</td></tr>
<tr><td>Platin- und Palladiumschmuck</td><td class="num">${band('pgmScrap')}</td></tr>
</tbody></table></div>
<p>Die Annahmen überprüfen wir regelmäßig anhand veröffentlichter Ankaufspreise und passen sie an, wenn sich der Markt verändert.</p>`
      },
      {
        h: 'Was die Ergebnisse nicht sind',
        html: `<p>Alle Ergebnisse sind <strong>unverbindliche Richtwerte</strong>. dergoldrechner.de kauft selbst kein Gold an, gibt keine Angebote ab und leistet keine Anlage- oder Steuerberatung. Ein verbindlicher Preis entsteht erst, wenn ein Ankäufer das Material geprüft hat. Sammlerwerte seltener Münzen, Markenschmuck und Edelsteine bilden die Rechner nicht ab.</p>
<p>Die Rechner laufen vollständig in Ihrem Browser: Ihre Eingaben werden nicht an uns übertragen, es gibt keine Cookies und kein Tracking. Mehr dazu in der <a href="/datenschutz/">Datenschutzerklärung</a>.</p>`
      }
    ],
    faq: [
      ['Wie aktuell ist der Goldpreis auf dergoldrechner.de?', 'Der Kurs wird stündlich aktualisiert und regelmäßig mit einer zweiten, unabhängigen Quelle abgeglichen. Am Wochenende ruht der Handel, dann gilt der letzte Kurs vom Freitag.'],
      ['Warum zeigt der Rechner eine Spanne statt eines festen Ankaufspreises?', 'Weil jeder Ankäufer anders kalkuliert. Die Spanne zeigt, was seriöse Ankäufer erfahrungsgemäß zahlen; ein verbindliches Angebot gibt es nur nach Prüfung beim Ankäufer.']
    ]
  }
];
