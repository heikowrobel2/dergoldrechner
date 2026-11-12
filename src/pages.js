// Page definitions. Text is German (site language). Edit here, then run: node src/build.js
// Keyword mapping (Semrush DE, Nov 2026) is noted per page in `keywords` – used for review, not output.
// inNav:false keeps a page out of the top navigation (it is still linked in the footer and in texts).
const de = (x) => x.toLocaleString('de-DE');
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
    title: 'Goldrechner: Was ist mein Gold wert? Goldwert sofort berechnen',
    description: 'Kostenloser Goldrechner für Altgold, Schmuck, Zahngold und Goldmünzen: Gewicht und Feingehalt eingeben und den Goldwert sofort berechnen.',
    h1: 'Goldrechner: Was ist Ihr Gold heute wert?',
    intro: 'Gewicht eingeben, Stempel wählen – und sofort sehen, was Schmuck, Zahngold oder Münzen nach aktuellem Börsenkurs wert sind.',
    calc: { type: 'gold', preset: '585', weight: 10 },
    sections: [],
    faq: [
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
    keywords: 'goldpreis rechner 18.100 (KD 17) · goldpreis pro gramm 9.900 (KD 13) · goldpreis berechnen 4.400 · 585 gold preis pro gramm 110',
    title: 'Goldpreis pro Gramm heute – Goldpreis-Rechner für 333 bis 999',
    description: 'Aktueller Goldpreis pro Gramm in Euro für 333er, 585er, 750er und 999er Gold. Goldpreis berechnen mit dem Goldpreis-Rechner – inklusive Ankaufs-Richtwert.',
    h1: 'Goldpreis pro Gramm: aktueller Goldpreis für jeden Feingehalt',
    intro: 'Der Goldpreis wird an der Börse für reines Feingold angegeben. Was ein Gramm Ihres Schmucks wert ist, hängt vom Feingehalt ab – die Tabelle rechnet es für Sie um.',
    calc: { type: 'gold', preset: '999', weight: 1 },
    priceTable: true,
    sections: [
      {
        h: 'So entsteht der Goldpreis pro Gramm',
        html: `<p>Aktuell kostet eine Feinunze Gold <strong data-price="goldoz">–</strong>, ein Gramm Feingold <strong data-price="gold">–</strong>.</p>
<p>Gold wird international in US-Dollar je Feinunze gehandelt. Eine Feinunze sind 31,1035 Gramm. Rechnet man den Preis in Euro um und teilt ihn durch 31,1035, erhält man den <strong>Goldpreis pro Gramm Feingold</strong> (999,9).</p>
<p>Schmuckgold ist fast nie rein. Für 585er Gold sind deshalb nur 58,5 % dieses Grammpreises anzusetzen, für 333er Gold ein Drittel. Genau das zeigt die Tabelle oben – automatisch mit dem aktuellen Kurs.</p>`
      },
      {
        h: 'Goldpreis und Ankaufspreis sind zwei verschiedene Dinge',
        html: `<p>Der Börsenpreis gilt für große Barren zwischen Banken und Händlern. Wer Altgold verkauft, erhält einen Ankaufspreis, der darunter liegt: Das Gold muss geprüft, eingeschmolzen und getrennt werden. Die rechte Spalte der Tabelle zeigt deshalb einen vorsichtig geschätzten Richtwert. Wie Ankäufer ihren Preis kalkulieren, erklärt der <a href="/goldankauf-rechner/">Goldankauf-Rechner</a>.</p>
<p>Der Goldpreis ändert sich an jedem Handelstag. Vergleichen Sie Angebote deshalb möglichst am selben Tag.</p>`
      }
    ],
    faq: [
      ['Wie viel ist 1 Gramm Gold heute wert?', 'Ein Gramm Feingold (999,9) ist so viel wert wie der aktuelle Goldpreis pro Gramm in der Tabelle oben. Für Schmuckgold wird dieser Wert mit dem Feingehalt multipliziert, bei 585er Gold also mit 0,585.'],
      ['Was kostet 1 Gramm 585er Gold?', 'Ein Gramm 585er Gold enthält 0,585 g Feingold. Sein Materialwert beträgt 58,5 % des Goldpreises pro Gramm; der aktuelle Betrag steht in der Tabelle.'],
      ['Warum ist der Goldpreis hier so viel niedriger als an der Börse?', 'Ist er nicht – er ist nur in einer anderen Einheit angegeben. Börsen und Finanzportale nennen den Preis je Feinunze (31,1035 g), wir rechnen ihn auf ein Gramm um, weil Schmuck in Gramm gewogen wird. Kostet die Unze zum Beispiel 3.500 €, ist ein Gramm Feingold rund 112,50 € wert. Oben auf der Seite stehen beide Werte nebeneinander.'],
      ['Warum unterscheidet sich der Goldpreis auf verschiedenen Seiten?', 'Manche Seiten zeigen den Verkaufspreis von Händlern inklusive Aufschlag, andere den Börsenkurs oder einen Ankaufspreis. Wir zeigen den Börsenkurs und getrennt davon einen Ankaufs-Richtwert.']
    ]
  },
  {
    slug: 'goldankauf-rechner',
    nav: 'Goldankauf',
    inNav: false,
    tile: 'Was zahlt der Ankäufer?',
    keywords: 'goldankauf rechner 9.900 (KD 14) · gold verkaufen rechner 8.100 (KD 33) · altgold rechner 480',
    title: 'Goldankauf-Rechner: Was zahlt der Ankäufer für mein Gold?',
    description: 'Goldankauf-Rechner: Was zahlen Ankäufer für Ihr Altgold? Materialwert, realistische Spanne und Tipps für einen fairen Verkaufspreis.',
    h1: 'Goldankauf-Rechner: Was zahlt der Ankäufer für mein Gold?',
    intro: 'Bevor Sie Gold verkaufen, sollten Sie wissen, was es wert ist – und was Ankäufer davon üblicherweise auszahlen. Dieser Altgold-Rechner zeigt beides.',
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
<p>Ein Blick in die veröffentlichten Ankaufspreise zeigt: Gute Ankäufer zahlen für Altgold rund 90 % und mehr des Materialwerts, andere deutlich weniger. Für <a href="/goldmuenzen-wert/">Goldmünzen</a> und Barren liegt der Ankaufspreis meist noch näher am Goldpreis. Unser Rechner zeigt deshalb eine Spanne statt einer einzigen Zahl.</p>`
      },
      {
        h: 'Gold verkaufen: so bekommen Sie einen fairen Preis',
        html: `<ul>
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
      ['Muss ich Steuern zahlen, wenn ich Gold verkaufe?', 'Für Privatpersonen ist der Verkauf von physischem Gold in Deutschland nach einer Haltedauer von mehr als einem Jahr steuerfrei (§ 23 EStG). Bei kürzerer Haltedauer ist ein Gewinn steuerpflichtig, sofern alle privaten Veräußerungsgewinne des Jahres die Freigrenze von 1.000 € erreichen. Geerbtes Gold übernimmt die Haltedauer des Erblassers. Im Zweifel fragen Sie eine Steuerberatung.']
    ]
  },
  {
    slug: '333-gold-wert',
    nav: '333er Gold',
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
      ['Wie viel ist 1 Gramm 585er Gold wert?', 'Ein Gramm 585er Gold enthält 0,585 g Feingold, also 58,5 % des Goldpreises pro Gramm. Die Tabelle oben zeigt den Wert mit dem aktuellen Kurs.'],
      ['Was ist ein 585er Goldring wert?', 'Ein schmaler Ring wiegt oft 2 bis 4 g, ein breiter Ehering 5 bis 8 g. Wiegen Sie Ihren Ring und geben Sie das Gewicht oben ein – Steine sollten Sie möglichst abziehen.'],
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
    keywords: 'zahngold wert 3.600 (KD 19) · zahngold verkaufen 1.600 (KD 20) · zahngold rechner 480 (KD 11)',
    title: 'Zahngold Wert berechnen – Zahngold-Rechner & Verkauf',
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
      ['Wie viel Gold ist in einer Zahnkrone?', 'Das hängt von Größe und Legierung ab. Eine Krone wiegt grob wenige Gramm, davon ist je nach Legierung etwa die Hälfte bis über drei Viertel Gold.'],
      ['Darf ich Zahngold verkaufen?', 'In aller Regel ja. Wenn Ihnen die Praxis den entfernten Zahnersatz aushändigt, können Sie ihn behalten, verkaufen oder spenden.'],
      ['Warum zeigt der Zahngold-Rechner eine so große Spanne?', 'Weil der Goldanteil von Zahngold je nach Legierung stark schwankt. Den genauen Gehalt ermittelt erst die Analyse beim Ankäufer.']
    ]
  },
  {
    slug: 'goldmuenzen-wert',
    nav: 'Goldmünzen',
    tile: 'Krügerrand, 20 Mark, Vreneli …',
    keywords: 'goldmünzen wert 1.300 (KD 12) · vreneli wert 390 (KD 18) · 20 mark gold wert 40',
    title: 'Goldmünzen Wert berechnen – Vreneli, 20 Mark, Maple Leaf & Co.',
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
        h: 'Vreneli Wert',
        html: `<p>Das „Vreneli“ ist die Schweizer 20-Franken-Goldmünze mit dem Frauenkopf. Sie wiegt 6,45 g, besteht aus 900er Gold und enthält damit 5,806 g Feingold. Ihr Goldwert lässt sich oben direkt berechnen. Häufige Jahrgänge werden nah am Goldwert gehandelt, seltene Jahrgänge deutlich darüber.</p>`
      }
    ],
    faq: [
      ['Wie viel Gold ist in einem Krügerrand?', 'Ein Krügerrand zu einer Unze enthält 31,1 g Feingold. Die Münze wiegt insgesamt 33,93 g, weil sie zusätzlich Kupfer enthält.'],
      ['Was ist eine 20-Mark-Goldmünze wert?', 'Eine 20-Mark-Münze aus dem Kaiserreich enthält rund 7,17 g Feingold. Ihr Goldwert ergibt sich aus diesem Gehalt und dem aktuellen Kurs; seltene Prägungen können mehr wert sein.'],
      ['Warum zahlen Händler bei Münzen mehr als bei Altgold?', 'Anlagemünzen müssen nicht eingeschmolzen werden, sondern können direkt weiterverkauft werden. Deshalb ist der Abschlag kleiner.']
    ]
  },
  {
    slug: 'kruegerrand-wert',
    nav: 'Krügerrand',
    inNav: false,
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
    title: 'Silber verkaufen – Silberankauf-Rechner für Barren und Münzen',
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
    keywords: 'platin verkaufen 1.000 (KD 22) · platin ankauf 480 (KD 10) · palladium verkaufen 260 (KD 9) · platinschmuck wert – · palladium preis 14.800 (KD 35)',
    title: 'Platin & Palladium verkaufen – Preis pro Gramm & Rechner',
    description: 'Platin verkaufen: Wert von Platinschmuck, Platinbarren und Palladium berechnen – mit aktuellem Platin- und Palladiumpreis pro Gramm und Ankaufs-Richtwert.',
    h1: 'Platin und Palladium verkaufen: Was ist mein Platin wert?',
    intro: 'Platinschmuck, Palladium oder Barren: Wählen Sie Metall, Gewicht und Stempel – der Rechner zeigt den Materialwert nach aktuellem Kurs und was der Platinankauf erfahrungsgemäß zahlt.',
    calc: { type: 'pgm', preset: 'platinum', weight: 10, fineness: '950' },
    priceTable: 'pgm',
    sections: [
      {
        h: 'Platinschmuck erkennen',
        html: `<p>Platinschmuck ist in Deutschland meist mit <strong>950</strong> gestempelt, oft zusammen mit <strong>Pt</strong> oder „Plat“. Er besteht also zu 95 % aus Platin. Platin ist grau-weiß, schwerer als Gold und muss im Gegensatz zu Weißgold nicht rhodiniert werden. Verwechslungsgefahr besteht mit <a href="/750-gold-wert/">Weißgold</a> – der Stempel schafft Klarheit.</p>`
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
      ['Wie viel ist 1 Gramm Platin wert?', 'Ein Gramm reines Platin ist so viel wert wie der aktuelle Platinpreis pro Gramm in der Tabelle oben. Für 950er Platinschmuck multiplizieren Sie diesen Wert mit 0,95.'],
      ['Ist Platin mehr wert als Gold?', 'Lange Zeit war Platin teurer als Gold. Seit etwa 2015 ist es jedoch deutlich günstiger. Die Tabelle oben zeigt den aktuellen Stand.'],
      ['Woran erkenne ich Platinschmuck?', 'Am Stempel 950, oft mit „Pt“. Platin ist grau-weiß und spürbar schwerer als ein gleich großes Schmuckstück aus Gold oder Silber.']
    ]
  }
];
