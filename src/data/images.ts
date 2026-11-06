/**
 * Alle Bilder der Seite an einem Ort.
 *
 * Bild ersetzen:
 *  1. Neues Foto als Datei in `src/images/` legen (z. B. `hof.jpg`).
 *  2. Hier `file` auf den neuen Namen setzen und `placeholder` auf false.
 *  3. Stammt es nicht von einer KI, `isAi` auf false setzen (blendet das KI-Label aus).
 *  4. Alt-Text auf den echten Bildinhalt anpassen.
 */
export interface ImageSlot {
  file: string;
  alt: string;
  placeholder: boolean;
  isAi: boolean;
  motif: string;
}

const slot = (
  file: string,
  alt: string,
  motif: string,
  placeholder = true,
  isAi = false,
): ImageSlot => ({ file: `/src/images/${file}`, alt, motif, placeholder, isAi });

export const IMAGES = {
  fahrzeugBeispiel: slot(
    "platzhalter-fahrzeug-beispiel.png",
    "Platzhalter für das Foto des Fahrzeugs",
    "Seitenansicht des Fahrzeugs bei Tageslicht auf dem Hof",
  ),
  hof: slot(
    "platzhalter-hof.png",
    "Platzhalter für ein Foto der Einfahrt und des Geländes",
    "Einfahrt und Gelände von der Straße aus, mit Firmenschild",
  ),
  werkstatt: slot(
    "platzhalter-werkstatt.png",
    "Platzhalter für ein Foto der Werkstatt",
    "Werkstatt mit Hebebühne, wenn möglich mit dem Team bei der Arbeit",
  ),
  team: slot(
    "platzhalter-team.png",
    "Platzhalter für das Teamfoto",
    "Alle Gesellschafter und Mitarbeiter vor dem Hof",
  ),
} satisfies Record<string, ImageSlot>;
