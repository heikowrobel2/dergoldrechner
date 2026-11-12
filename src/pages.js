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
    keywords: 'feinunze gold preis 3.600 (KD 14) · unze gold 14.800 (KD 58) · wieviel ist eine unze gold 1.300 (KD 22) · preis von einer unze gold 880 · goldpreis pro kilo · was kostet ein kg gold in euro 110 · was kostet heute eine feinunze gold 140',
    title: 'Goldpreis pro Unze heute: Feinunze und Kilo in Euro',
    description: 'Was kostet eine Feinunze Gold heute? Goldpreis pro Unze und pro Kilo in Euro, Unze in Gramm umrechnen und Werte für 1/10 bis 10 Unzen – live aktualisiert.',
    h1: 'Goldpreis pro Unze: Was kostet eine Feinunze Gold heute?',
    intro: 'An der Börse wird Gold in Feinunzen gehandelt. Hier sehen Sie den aktuellen Goldpreis pro Unze und pro Kilo in Euro – und wie viel eine Unze in Gramm ist.',
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
        h: 'Wie viel Gramm hat eine Unze Gold?',
        html: `<p>Eine <strong>Feinunze</strong> (Troy-Unze, Kürzel oz oder ozt) wiegt <strong>31,1035 Gramm</strong>. Sie ist schwerer als die Unze aus dem Haushalt (28,35 g), die für Edelmetalle nicht verwendet wird. Ein Kilogramm entspricht rund 32,15 Feinunzen.</p>
<p>„Fein“ bedeutet: Gemeint ist das reine Gold. Eine Anlagemünze wie der <a href="/kruegerrand-wert/">Krügerrand</a> wiegt mehr als 31,1 g, weil sie auch Kupfer enthält, enthält aber genau eine Feinunze Gold.</p>`
      },
      {
        h: 'Warum wird Gold in Unzen gehandelt?',
        html: `<p>Die Feinunze ist die internationale Handelseinheit für Edelmetalle. Börsen und Banken nennen den Goldpreis deshalb je Unze in US-Dollar. Für Schmuck rechnet man besser in Gramm – unser <a href="/">Goldrechner</a> rechnet den Unzenpreis automatisch um.</p>`
      }
    ],
    faq: [
      ['Was kostet eine Feinunze Gold heute?', 'Den aktuellen Preis in Euro zeigt die Tabelle auf dieser Seite. Er wird aus dem internationalen Börsenkurs berechnet und stündlich aktualisiert.'],
      ['Wie viel Gramm ist eine Unze Gold?', 'Eine Feinunze (Troy-Unze) wiegt 31,1035 Gramm.'],
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
    keywords: '585 gold wert 4.400 (KD 35) · goldpreis 585 pro gramm 1.300 (KD 28) · 14 karat gold wert 1.600 (KD 25) · 585 gold rechner 480 · 585 gold preis pro gramm 110',
    title: '585 Gold Wert berechnen – 14 Karat Gold mit Tageskurs',
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
    keywords: '750 gold wert 2.400 (KD 26) · goldpreis 750 pro gramm 1.000 (KD 22) · 18 karat gold wert 480 (KD 23) · weißgold wert 480 (KD 10) · 750 gold rechner 20',
    title: '750 Gold Wert berechnen – 18 Karat Gold und Weißgold Wert',
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
    title: 'Goldbarren Wert: Preise für 1 g bis 1 kg Goldbarren',
    description: 'Was ist ein Goldbarren wert? Aktueller Goldwert für Barren von 1 g bis 1 kg, was Händler beim Ankauf zahlen und worauf Sie beim Goldbarren kaufen achten.',
    h1: 'Goldbarren Wert: Was ist mein Goldbarren heute wert?',
    intro: 'Wählen Sie Gewicht und Anzahl Ihrer Goldbarren. Der Rechner zeigt den aktuellen Goldwert und was Händler beim Ankauf ungefähr zahlen – kleine Barren etwas weniger als große.',
    calc: { type: 'bars', preset: 'bar-100', count: 1 },
    sections: [
      {
        h: 'Goldbarren-Preise nach Gewicht',
        html: `<div class="table-wrap"><table><thead><tr><th>Barren (999,9 Feingold)</th><th class="num">Goldwert heute</th></tr></thead><tbody>
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
        html: `<p>Eigene Seiten mit Daten, Größen und Hinweisen zum Sammlerwert gibt es für <a href="/maple-leaf-gold-wert/">Maple Leaf</a>, <a href="/philharmoniker-gold-wert/">Wiener Philharmoniker</a>, <a href="/kruegerrand-wert/">Krügerrand</a>, <a href="/american-eagle-gold-wert/">American Eagle</a>, <a href="/britannia-gold-wert/">Britannia</a>, <a href="/kaenguru-gold-wert/">Känguru</a>, <a href="/vreneli-wert/">Vreneli</a>, <a href="/20-mark-gold-wert/">20 Mark</a>, <a href="/sovereign-gold-wert/">Sovereign</a> und <a href="/dukat-gold-wert/">Dukaten</a>.</p>`
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
        html: `<p>Bieten Sie Krügerrand-Münzen getrennt von Altgold an und vergleichen Sie die Ankaufspreise mehrerer Händler. Gut erhaltene Münzen ohne Kratzer und in Originalverpackung erzielen eher den Höchstpreis. Weitere Münzen finden Sie im <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>`
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
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldq31103">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr></tbody></table></div>` },
      { h: 'Kratzer und Flecken beim Maple Leaf', html: `<p>Reines Feingold ist weich. Beim Maple Leaf sieht man deshalb häufig Kratzer, Kontaktspuren oder kleine Milchflecken. Am Goldgehalt ändern sie nichts – einige Händler ziehen für stark beschädigte Münzen aber etwas ab. Bewahren Sie Münzen am besten in der Originalkapsel auf.</p>` },
      { h: 'Maple Leaf verkaufen', html: `<p>Die Münze wird nicht eingeschmolzen, sondern direkt weiterverkauft. Händler zahlen deshalb nah am Goldpreis – der Rechner oben zeigt eine realistische Spanne. Vergleichen Sie mindestens zwei Angebote am selben Tag; den Ablauf beschreibt die Seite <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>` }
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
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldq31103">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr><tr><td>1/25 Unze (seit 2014)</td><td class="num">1,24 g</td><td class="num"><span data-price="goldq1244">–</span></td></tr></tbody></table></div>` },
      { h: 'Schilling oder Euro – spielt das eine Rolle?', html: `<p>Für den Goldwert nicht: Ausgaben mit Schilling-Nennwert (1989–2001) enthalten genauso viel Gold wie die Euro-Ausgaben. Händler kaufen beide Varianten zum gleichen Preis an. Nur sehr gut erhaltene Stücke in Originalverpackung lassen sich manchmal etwas leichter verkaufen.</p>` },
      { h: 'Wiener Philharmoniker verkaufen', html: `<p>Die Münze wird nicht eingeschmolzen, sondern direkt weiterverkauft. Händler zahlen deshalb nah am Goldpreis – der Rechner oben zeigt eine realistische Spanne. Vergleichen Sie mindestens zwei Angebote am selben Tag; den Ablauf beschreibt die Seite <a href="/gold-verkaufen/">Gold verkaufen</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einem Wiener Philharmoniker?','Die 1-Unzen-Münze enthält 31,1035 g Feingold mit einem Feingehalt von 999,9.'],['Ist ein Philharmoniker in Schilling weniger wert?','Nein. Der Goldgehalt ist identisch, Händler zahlen für Schilling- und Euro-Ausgaben denselben Preis.'],['Ist der Wiener Philharmoniker mehrwertsteuerfrei?','Der Wiener Philharmoniker erfüllt die Voraussetzungen für Anlagegold und ist in Deutschland beim Kauf von der Mehrwertsteuer befreit; beim Verkauf durch Privatpersonen fällt ohnehin keine an.']]
  },
  {
    slug: 'american-eagle-gold-wert',
    nav: 'American Eagle',
    inNav: false,
    group: 'muenzen',
    keywords: 'american eagle gold wert · american eagle goldmünze · gold eagle 1 oz',
    title: 'American Eagle Gold Wert heute: Goldwert und Ankauf',
    description: 'Was ist ein American Eagle aus Gold wert? Goldwert der 22-karätigen US-Münze nach aktuellem Kurs, Daten zu Gewicht und Legierung und Ankaufspreise.',
    h1: 'American Eagle Gold: Was ist die Münze heute wert?',
    intro: 'Der American Eagle ist die offizielle Goldmünze der USA. Sie wiegt mehr als eine Unze, enthält aber genau eine Feinunze Gold – der Rechner zeigt den aktuellen Wert.',
    calc: { type: 'coins', preset: 'eagle' },
    sections: [
      { h: 'American Eagle: Daten und Größen', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>USA (United States Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>1986</td></tr><tr><th scope="row">Nennwert (1 Unze)</th><td>50 US-Dollar</td></tr><tr><th scope="row">Feingehalt</th><td>916,7 (22 Karat), legiert mit Silber und Kupfer</td></tr><tr><th scope="row">Gewicht</th><td>33,93 g</td></tr><tr><th scope="row">Feingold</th><td>31,1035 g (1 Unze)</td></tr></tbody></table></div>
<p>Die Vorderseite zeigt Lady Liberty nach dem Entwurf von Augustus Saint-Gaudens. Die Rückseite zeigte bis 2021 eine Adlerfamilie, seit Mitte 2021 einen Adlerkopf.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldq31103">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr></tbody></table></div>` },
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
    title: 'Britannia Gold Wert heute: Goldwert und Ankauf',
    description: 'Was ist eine Britannia aus Gold wert? Aktueller Goldwert der britischen Anlagemünze, Unterschiede alter und neuer Jahrgänge und was Händler zahlen.',
    h1: 'Britannia Gold: Was ist die Münze heute wert?',
    intro: 'Die Britannia ist die Anlagemünze der britischen Royal Mint. Alte und neue Jahrgänge unterscheiden sich in der Legierung – der Goldgehalt ist gleich.',
    calc: { type: 'coins', preset: 'britannia' },
    sections: [
      { h: 'Britannia: Daten und Größen', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Großbritannien (The Royal Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>1987</td></tr><tr><th scope="row">Nennwert (1 Unze)</th><td>100 Pfund</td></tr><tr><th scope="row">Feingehalt</th><td>999,9 seit 2013; 1987–2012: 916,7 (22 Karat)</td></tr><tr><th scope="row">Gewicht</th><td>31,1035 g (seit 2013), davor 34,05 g</td></tr><tr><th scope="row">Feingold</th><td>31,1035 g (1 Unze)</td></tr></tbody></table></div>
<p>Die Britannia zeigt die Personifikation Großbritanniens mit Schild und Dreizack. Seit 2021 tragen neue Jahrgänge zusätzliche Sicherheitsmerkmale gegen Fälschungen.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldq31103">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr></tbody></table></div>` },
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
    title: 'Känguru Gold (Nugget) Wert heute: Goldwert und Ankauf',
    description: 'Was ist eine Känguru-Goldmünze aus Australien wert? Goldwert der Nugget-Münze nach aktuellem Kurs, Daten zur Perth Mint und Ankaufspreise.',
    h1: 'Känguru Gold: Was ist die australische Goldmünze heute wert?',
    intro: 'Die australische Goldmünze der Perth Mint ist auch als „Nugget“ bekannt. Wählen Sie die Münze und die Anzahl – Teilstücke finden Sie in der Liste als „Teilstück 1/2 Unze“ usw. Der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'kaenguru' },
    sections: [
      { h: 'Känguru-Goldmünze: Daten und Größen', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Australien (Perth Mint)</td></tr><tr><th scope="row">Erstausgabe</th><td>1986, zunächst mit Nugget-Motiv</td></tr><tr><th scope="row">Nennwert (1 Unze)</th><td>100 Australische Dollar</td></tr><tr><th scope="row">Feingehalt</th><td>999,9</td></tr><tr><th scope="row">Gewicht</th><td>31,1035 g</td></tr><tr><th scope="row">Feingold</th><td>31,1035 g (1 Unze)</td></tr></tbody></table></div>
<p>In den ersten Jahren zeigte die Münze Goldnuggets, seit 1989 ein Känguru. Das Motiv wechselt jedes Jahr – deshalb sprechen viele Händler bis heute vom „Nugget“.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Unze</td><td class="num">31,10 g</td><td class="num"><span data-price="goldq31103">–</span></td></tr><tr><td>1/2 Unze</td><td class="num">15,55 g</td><td class="num"><span data-price="goldq15552">–</span></td></tr><tr><td>1/4 Unze</td><td class="num">7,78 g</td><td class="num"><span data-price="goldq7776">–</span></td></tr><tr><td>1/10 Unze</td><td class="num">3,11 g</td><td class="num"><span data-price="goldq3110">–</span></td></tr></tbody></table></div>` },
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
    title: 'Vreneli Wert heute: Was ist ein 20-Franken-Vreneli wert?',
    description: 'Was ist ein Vreneli wert? Goldwert für 20 und 10 Franken Vreneli nach aktuellem Kurs, Gewicht und Feingehalt sowie Hinweise zu seltenen Jahrgängen.',
    h1: 'Vreneli Wert: Was ist ein 20-Franken-Vreneli heute wert?',
    intro: 'Das Vreneli ist die bekannteste Schweizer Goldmünze. Wählen Sie 20 oder 10 Franken und die Anzahl – der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'vreneli' },
    sections: [
      { h: 'Vreneli: 20 und 10 Franken im Vergleich', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Schweiz</td></tr><tr><th scope="row">Prägejahre</th><td>1897 bis 1949 (nicht in jedem Jahr)</td></tr><tr><th scope="row">Feingehalt</th><td>900</td></tr><tr><th scope="row">Gewicht</th><td>6,45 g (20 Franken) · 3,226 g (10 Franken)</td></tr><tr><th scope="row">Feingold</th><td>5,806 g (20 Franken) · 2,903 g (10 Franken)</td></tr></tbody></table></div>
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
    title: 'Sovereign Gold Wert heute: Goldwert und Ankauf',
    description: 'Was ist ein Sovereign aus Gold wert? Goldwert für Sovereign und Half Sovereign nach aktuellem Kurs, Daten der Royal Mint und was Händler zahlen.',
    h1: 'Sovereign Gold: Was ist ein Sovereign heute wert?',
    intro: 'Der Sovereign ist eine der ältesten noch geprägten Goldmünzen. Wählen Sie Sovereign oder Half Sovereign und die Anzahl – der Rechner zeigt den aktuellen Goldwert.',
    calc: { type: 'coins', preset: 'sovereign' },
    sections: [
      { h: 'Sovereign und Half Sovereign im Vergleich', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Großbritannien (The Royal Mint)</td></tr><tr><th scope="row">Erstausgabe (moderner Sovereign)</th><td>1817</td></tr><tr><th scope="row">Nennwert</th><td>1 Pfund</td></tr><tr><th scope="row">Feingehalt</th><td>916,7 (22 Karat)</td></tr><tr><th scope="row">Gewicht</th><td>7,988 g (Sovereign) · 3,994 g (Half Sovereign)</td></tr><tr><th scope="row">Feingold</th><td>7,322 g (Sovereign) · 3,661 g (Half Sovereign)</td></tr></tbody></table></div>
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
      { h: '1 und 4 Dukaten im Vergleich', html: `<div class="table-wrap"><table><tbody><tr><th scope="row">Ausgabeland</th><td>Österreich (Münze Österreich)</td></tr><tr><th scope="row">Jahreszahl</th><td>1915 (offizielle Nachprägung)</td></tr><tr><th scope="row">Feingehalt</th><td>986 (rund 23,7 Karat)</td></tr><tr><th scope="row">Gewicht</th><td>3,491 g (1 Dukat) · 13,964 g (4 Dukaten)</td></tr><tr><th scope="row">Feingold</th><td>3,442 g (1 Dukat) · 13,768 g (4 Dukaten)</td></tr></tbody></table></div>
<p>Das 1-Dukaten-Stück zeigt Kaiser Franz Joseph I., das 4-Dukaten-Stück zusätzlich Kaiserin Elisabeth. Mit 986er Gold sind Dukaten fast so rein wie Feingold.</p>
<div class="table-wrap"><table><thead><tr><th>Ausführung</th><th class="num">Feingold</th><th class="num">Goldwert heute</th></tr></thead><tbody><tr><td>1 Dukat</td><td class="num">3,442 g</td><td class="num"><span data-price="goldq3442">–</span></td></tr><tr><td>4 Dukaten</td><td class="num">13,768 g</td><td class="num"><span data-price="goldq13768">–</span></td></tr></tbody></table></div>` },
      { h: 'Warum steht auf jedem Dukaten 1915?', html: `<p>Die Münze Österreich prägt Dukaten bis heute als offizielle Nachprägung mit der Jahreszahl 1915. Ein Dukat mit dieser Jahreszahl ist deshalb kein seltenes Stück aus dem Ersten Weltkrieg, sondern eine Anlage- und Geschenkmünze, die nah am Goldwert gehandelt wird. Echte ältere Dukaten mit anderen Jahreszahlen können einen Sammlerwert haben.</p>` },
      { h: 'Dukat verkaufen', html: `<p>Für gängige Stücke zahlen Händler einen Preis nah am Goldwert. Ausnahme sind Sammlerstücke – lassen Sie seltene Jahrgänge oder Stücke in sehr gutem Erhaltungszustand vorher von einem Münzhändler bewerten, denn dort kann der Sammlerwert deutlich über dem Goldwert liegen. Weitere historische Münzen finden Sie im <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>` }
    ],
    faq: [['Wie viel Gold ist in einem Dukaten?','Ein 1-Dukaten-Stück enthält 3,442 g Feingold, ein 4-Dukaten-Stück 13,768 g.'],['Ist ein Dukat von 1915 selten?','Nein. Alle heute geprägten Dukaten tragen die Jahreszahl 1915; es sind offizielle Nachprägungen, die nah am Goldwert gehandelt werden.'],['Ist der Dukat mehrwertsteuerfrei?','Gängige Stücke gelten als Anlagegold und sind beim Kauf mehrwertsteuerfrei. Liegt der Preis wegen eines Sammlerwerts über 180 % des Goldwerts, kann Mehrwertsteuer anfallen, meist in Form der Differenzbesteuerung. Beim Verkauf durch Privatpersonen fällt keine an.']]
  },
  {
    slug: 'silberrechner',
    nav: 'Silber',
    tile: 'Besteck, Schmuck, Barren',
    keywords: 'silberrechner 2.400 (KD 10) · 925 silber wert 5.400 (KD 25) · 800 silber wert 140 (KD 5)',
    title: 'Silberrechner – 925 und 800 Silber Wert berechnen',
    description: 'Silberrechner mit aktuellem Kurs: Wert von 925er Sterlingsilber, 800er Silberbesteck und Silberschmuck berechnen – mit Materialwert und Ankaufs-Richtwert.',
    h1: 'Silberrechner: Was ist mein Silber wert?',
    intro: 'Silberbesteck, Schmuck oder Münzen: Geben Sie Gewicht und Feingehalt ein und sehen Sie den Silberwert nach aktuellem Kurs.',
    calc: { type: 'silver', preset: '925', weight: 100 },
    example: { fineness: '925', metal: 'silver', weights: '50,100,250,500,1000' },
    sections: [
      {
        h: '925 Silber Wert',
        html: `<p>925er Silber – auch <strong>Sterlingsilber</strong> – besteht zu 92,5 % aus reinem Silber, der Rest ist meist Kupfer. Es ist der übliche Feingehalt für Silberschmuck und viel Tafelsilber. Ein Gramm 925er Silber enthält 0,925 g Feinsilber; den aktuellen Wert zeigt die Tabelle oben.</p>`
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
<p>Silberbarren und den Ablauf beim Silberankauf finden Sie unter <a href="/silber-verkaufen/">Silber verkaufen</a>, den aktuellen <a href="/silberpreis-pro-gramm/">Silberpreis pro Gramm</a> auf einer eigenen Seite. Goldmünzen bewerten Sie mit dem <a href="/goldmuenzen-wert/">Goldmünzen-Rechner</a>.</p>`
      }
    ],
    faq: [
      ['Wie viel Silber ist in einem 5-DM-Stück?', 'Der 5-DM-Silberadler (1951–1974) wiegt 11,2 g und besteht aus 625er Silber. Er enthält damit 7 g Feinsilber.'],
      ['Sind 10-Euro-Gedenkmünzen aus Silber?', 'Die Ausgaben von 2002 bis 2010 bestehen aus 925er Silber (16,65 g Feinsilber). Von 2011 bis 2015 ist nur die Spiegelglanz-Ausgabe aus 625er Silber (10 g Feinsilber), die Stempelglanz-Ausgabe aus Kupfernickel. Spätere 10-Euro-Münzen enthalten kein Silber; seit 2016 gibt es dafür 20-Euro-Gedenkmünzen aus 925er Silber.'],
      ['Wie viel ist eine Unze Silber wert?', 'Eine Silberunze enthält 31,1 g Feinsilber. Ihr Materialwert ergibt sich aus dem aktuellen Silberpreis; der Rechner oben zeigt ihn für Maple Leaf, Philharmoniker und andere Unzen.']
    ]
  },
  {
    slug: 'silberpreis-pro-gramm',
    nav: 'Silberpreis',
    inNav: false,
    tile: 'Aktueller Silberpreis je Gramm',
    keywords: 'silberpreis pro gramm 5.400 (KD 30) · silberpreis rechner 2.900 (KD 11) · silberpreis pro kilo 320 · silber preis pro kg 2.900 (KD 47)',
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
<p>Für Silberschmuck und Besteck zählt nur der enthaltene Silberanteil: Bei <a href="/silberrechner/">925er Sterlingsilber</a> sind es 92,5 %, bei <a href="/silberbesteck-wert/">800er Besteck</a> 80 %.</p>`
      },
      {
        h: 'Silberpreis pro Kilo',
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
      ['Warum schwankt der Silberpreis stärker als der Goldpreis?', 'Silber wird zu einem großen Teil in der Industrie verbraucht und der Markt ist kleiner als der Goldmarkt. Deshalb reagiert der Preis oft stärker auf Konjunktur und Nachfrage.']
    ]
  },
  {
    slug: 'silber-verkaufen',
    nav: 'Silber verkaufen',
    inNav: false,
    tile: 'Silberankauf: was wird gezahlt?',
    keywords: 'silber verkaufen 12.100 (KD 33) · silber ankauf 3.600 (KD 8) · silberbarren verkaufen 1.900 (KD 15) · silberankauf preis 1.300 (KD 22) · silberbarren 1 kg preis 390 (KD 13)',
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
    tile: 'Platin & Palladium je Gramm',
    keywords: 'platin preis gramm 2.400 (KD 53) · palladium preis 14.800 (KD 35) · platinpreis pro gramm · palladium preis gramm · platinpreis aktuell',
    title: 'Platinpreis pro Gramm heute – auch Palladiumpreis',
    description: 'Aktueller Platinpreis und Palladiumpreis pro Gramm und pro Unze in Euro, dazu Werte für Platinschmuck 950 und 999 – stündlich aktualisiert.',
    h1: 'Platinpreis und Palladiumpreis pro Gramm heute',
    intro: 'Platin und Palladium gehören wie Gold zu den Edelmetallen. Hier sehen Sie die aktuellen Preise je Gramm und je Unze in Euro.',
    calc: { type: 'pgm', preset: 'platinum', weight: 1, fineness: '999' },
    priceTable: 'pgm',
    sections: [
      {
        h: 'Platin und Palladium je Unze',
        html: `<div class="table-wrap"><table><thead><tr><th>Metall</th><th class="num">1 Gramm</th><th class="num">1 Feinunze</th></tr></thead><tbody>
<tr><td>Platin</td><td class="num"><span data-price="platinum">–</span></td><td class="num"><span data-price="platinumozv">–</span></td></tr>
<tr><td>Palladium</td><td class="num"><span data-price="palladium">–</span></td><td class="num"><span data-price="palladiumozv">–</span></td></tr>
</tbody></table></div>
<p>Platin und Palladium werden vor allem in der Industrie verwendet, etwa in Abgaskatalysatoren. Ihr Preis schwankt deshalb oft stärker als der Goldpreis.</p>`
      },
      {
        h: 'Platinschmuck und Zahngold bewerten',
        html: `<p>Platinschmuck ist meist mit <strong>950</strong> gestempelt, enthält also 95 % Platin. Was Ankäufer dafür zahlen, zeigt der Rechner unter <a href="/platin-verkaufen/">Platin verkaufen</a>. Auch Zahngold enthält oft Platin oder Palladium – mehr dazu beim <a href="/zahngold-wert/">Zahngold-Rechner</a>.</p>`
      }
    ],
    faq: [
      ['Wie hoch ist der Platinpreis pro Gramm?', 'Den aktuellen Preis zeigt die Tabelle auf dieser Seite. Er ergibt sich aus dem Börsenkurs je Unze geteilt durch 31,1035.'],
      ['Ist Palladium teurer als Platin?', 'Das wechselt mit dem Markt. Den aktuellen Vergleich sehen Sie in der Tabelle oben.'],
      ['Was ist 950er Platin wert?', '950er Platin enthält 95 % reines Platin. Sein Materialwert ist Gewicht × 0,95 × Platinpreis pro Gramm.']
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
