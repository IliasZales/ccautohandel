/** Teamliste. Alle Einträge sind Platzhalter, bis der Kunde Namen und Fotos liefert. */
export interface Person {
  name: string;
  rolle: string;
  text: string;
  platzhalter: boolean;
}

export const TEAM: Person[] = [
  { name: "[Name Gesellschafter 1]", rolle: "Gesellschafter · Ankauf und Verkauf", text: "[Zwei Sätze: Wie lange im Autohandel, worauf achtet die Person beim Ankauf.]", platzhalter: true },
  { name: "[Name Gesellschafter 2]", rolle: "Gesellschafter · Kundenberatung", text: "[Zwei Sätze: Aufgabe im Betrieb, was Kunden von ihr oder ihm erwarten können.]", platzhalter: true },
  { name: "[Name Werkstatt]", rolle: "Werkstatt und Reifenservice", text: "[Zwei Sätze: Ausbildung, Erfahrung, wofür die Werkstatt zuständig ist.]", platzhalter: true },
];
