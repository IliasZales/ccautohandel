# C&C Autozentrum GbR – Webseitenplan

Stand: 2026-11-02 · Status: Entwurf zur Freigabe (noch nichts gebaut)

## 1. Ziel

Eine Webseite, die in einer misstrauischen Branche beweist statt behauptet.
Der Besucher soll nach einem Scroll wissen: Wer steht dahinter, wo ist der Hof, was wurde am Auto geprüft, was kostet es wirklich, was passiert, wenn etwas kaputtgeht.

Einzige Aufgabe der Seite: **Anruf, WhatsApp oder Besuch auf dem Hof auslösen.** Alles andere ist Beiwerk.

**Zielgruppen**
- Käufer (Hauptgruppe): Privatleute, preisbewusst, schon mal von einem Händler enttäuscht worden oder gewarnt worden.
- Verkäufer (Ankauf): wollen schnell, fair und ohne Tricks verkaufen.
- Werkstatt-/Reifenkunden: lokale Laufkundschaft.

**Anti-Ziele**
- Kein Autohaus-Klischee (Hochglanz-Showroom, Stockfotos, Händedruck-Bilder).
- Keine erfundenen Bewertungen, Zahlen, Siegel oder Personen.
- Kein Cookie-Banner-Zirkus: keine Tracker, kein Banner nötig.
- Kein generischer KI-Look (siehe Abschnitt 3).

## 2. Vertrauens-Bausteine (der eigentliche Inhalt)

Jeder Baustein ist nachprüfbar. Fehlt die Information vom Kunden, bleibt eine sichtbare Lücke im Entwurf, nie ein erfundener Wert.

| Baustein | Was die Seite zeigt |
|---|---|
| Gesichter und Namen | Die Gesellschafter der GbR mit Foto und Namen (Impressum-konform) |
| Adresse mit Foto vom Hof | Echtes Foto der Einfahrt, Anfahrt, Öffnungszeiten, Telefon, WhatsApp |
| Prüfprotokoll pro Fahrzeug | Was geprüft wurde, mit Messwerten (Profiltiefe, Bremsbelag, Ölstand, HU-Datum, Schlüsselanzahl) |
| Ehrliche Mängelliste | Jedes Fahrzeug nennt auch Kratzer, Steinschläge, Nachlackierungen, mit Foto |
| Endpreis | Preis inklusive Mehrwertsteuer; Überführung, Zulassung und Nebenkosten ausgewiesen |
| Gewährleistung in Klartext | Was das Gesetz verlangt und was C&C darüber hinaus anbietet, ohne Kleingedrucktes |
| Garantie und Finanzierung | Anbieter beim Namen nennen, Beispielrechnung mit effektivem Jahreszins |
| Echte Bewertungen | Google-Rezensionen verlinkt, nur echte; keine Sterne ohne Quelle |
| Werkstatt sichtbar | Fotos der eigenen Werkstatt, wer dort arbeitet, Reifenservice-Preise |
| Probefahrt und Übergabe | Ablauf in drei Sätzen, was man mitbringen soll, dass man jederzeit nein sagen darf |

### Siegel und Garantie am Kaufmoment

Garantie-Siegel erscheinen dort, wo die Entscheidung fällt, nicht nur auf einer Unterseite:

- **Fahrzeugakte:** Siegelzeile direkt unter dem Preis („12 Monate Gewährleistung“, „Garantie optional ab …“, „HU neu“, „Geprüft am …“), jeweils mit Link zur Erklärung auf `/garantie`.
- **Anfrage- und Kontaktformular:** kurze Zusicherung neben dem Absenden („Unverbindlich. Antwort am selben Werktag.“), nur wenn das Team es einhalten kann.
- **Fußzeile jeder Seite:** feste Siegelleiste mit den echten Zusagen.
- **Regel:** Ein Siegel gehört nur auf die Seite, wenn es eine Zusage ist, die C&C schriftlich einhält, oder ein Zeichen eines Dritten (Garantiegeber, Prüforganisation), dessen Nutzung erlaubt ist. Eigene „Gütesiegel“ ohne Substanz gibt es nicht. Die Siegel sind als eigene Komponente gestaltet und wirken wie Stempel/Plaketten aus der Werkstattwelt (zum Beispiel runde Plakette wie die HU-Plakette), nicht wie Clipart-Medaillen.

### UX-Prinzipien (Vertrauen als Bedienung)

- **Kontakt ist nie weiter als ein Tap entfernt:** feste Leiste mit Anruf und WhatsApp auf Mobilgeräten, in Hand-Reichweite.
- **Eine Frage pro Seite beantworten.** Jede Unterseite beginnt mit der Antwort, nicht mit einer Einleitung.
- **Preis, Kilometer, Erstzulassung, HU** stehen in der Fahrzeugliste ohne Klick sichtbar; Filter wirken sofort und bleiben in der URL (teilbar).
- **Keine Dark Patterns:** keine künstliche Knappheit, keine Countdown-Banner, keine „nur noch 2 Interessenten“.
- **Formulare:** wenig Felder, klare Labels, verständliche Fehlermeldungen, Bestätigung mit Klartext (was passiert als Nächstes und wann).
- **Leere Zustände:** wenn kein Fahrzeug zum Filter passt, bietet die Seite Fahrzeugsuche (Suchauftrag) und Anruf an.
- **Barrierefreiheit:** WCAG 2.1 AA, Tastaturbedienung, sichtbarer Fokus, ausreichend große Tippflächen, Kontrast geprüft, Alt-Texte beschreiben Mängel ehrlich.

## 3. Designrichtung

**Gesetzte Wahl:** Die Seite sieht aus wie das Papier, das in dieser Branche tatsächlich Vertrauen erzeugt: Werkstatt-Prüfprotokoll, Fahrzeugschein, Auftragszettel. Kein Showroom, sondern eine Akte, die man aufschlagen darf.

**Gegen die Standardfallen geprüft**
- Kein warmes Creme mit Serife und Terrakotta.
- Kein Schwarz mit Neongrün oder Vermilion.
- Kein Zeitungslayout mit Haarlinien.
- Kein Dunkelblau/Chrom-Autohaus.
- Geänderte Version: Palette von kalt-grauem Papier aus statt Creme, Akzent in Kugelschreiber-Blau statt Rot/Grün, Typografie aus der Normschrift-Welt statt Serife.

**Palette** (Vorschlag, Werte werden im Browser gegen Kontrast geprüft)

| Name | Hex | Einsatz |
|---|---|---|
| Aktenpapier | `#F3F5F4` | Grundfläche, kühles Grau-Weiß |
| Graphit | `#171B1F` | Text, Werkstatt-Flächen |
| Kugelschreiber | `#1D3FD1` | Links, Handschrift-Einträge, Aktionen |
| Messstab-Gelb | `#F2C200` | Markierungen, Kennzeichen-Feld, sparsam |
| Durchschlag | `#DCE9E2` | Formularflächen, Fahrzeugschein-Grün |
| Stempel | `#B8322A` | nur für Mängel und Hinweise, nie dekorativ |

**Typografie** (alle selbst gehostet, keine Google-Fonts-Einbindung wegen DSGVO)
- Display: **Archivo** variabel, mit Breitenachse (schmal für Überschriften, breit für Zahlen und Preise). Setzt Normschrift-Anmutung ohne FE-Schrift zu kopieren.
- Fließtext: **Instrument Sans**.
- Daten und Protokollfelder: **DM Mono** (Messwerte, Fahrgestellnummer, Kennzeichen).
- Handschrift-Einträge im Protokoll: eine zurückhaltende Handschriftschrift, nur für Abhak-Notizen, nicht für Fließtext.

**Signatur: die aufklappbare Fahrzeugakte.**
Jedes Fahrzeug ist eine Karte, die sich wie ein Protokoll öffnet: oben Kennzeichenfeld und Preis, darunter Messwerte, Häkchen mit Datum, eine rote Mängelzeile und die echten Fotos. Die Startseite eröffnet mit dem aktuellen Fahrzeug des Monats als offene Akte (siehe Platzhalterregel unten). Das ist das eine Ding, an das man sich erinnert; alles andere bleibt ruhig.

**Bewegung:** nur ein Moment: die Akte „schreibt“ sich beim ersten Laden (Häkchen setzen sich nacheinander). Sonst nur Hover und Fokus. `prefers-reduced-motion` wird respektiert.

**Nummerierung:** nur dort, wo Reihenfolge echt ist (Ablauf Ankauf, Ablauf Übergabe). Keine dekorativen 01/02/03.

**Platzhalterregel:** Solange kein echtes Fahrzeug erfasst ist, trägt die Hero-Akte sichtbar das Label „Beispiel“. Erfundene Prüfwerte erscheinen nie ohne dieses Label und nie im Live-Gang.

## 4. Seitenstruktur

```
/                  Start: Akte, Gesichter, Hof, Kernversprechen, Kontakt
/fahrzeuge         Bestand als Akten-Liste, Filter: Marke, Preis, km, Kraftstoff
/fahrzeuge/<id>    Einzelakte: Fotos, Prüfprotokoll, Mängel, Endpreis, Anfrage
/ankauf            Auto verkaufen: Ablauf, Angaben, Rückruf, was wir nicht tun
/garantie          Garantie und Gewährleistung: Stufen, Anbieter, Siegel, was gedeckt ist und was nicht
/ueberfuehrung     Überführung: Lieferung, Kosten nach Entfernung, Ablauf, Versicherung, Kennzeichen
/finanzierung      Finanzierung, Beispielrechnung, Partner
/werkstatt         Werkstatt und Reifenservice, Leistungen, Preise, Termin
/team              Team: jede Person mit Foto, Aufgabe, Erfahrung, direkter Durchwahl
/ueber-uns         Geschichte, Hof, Arbeitsweise, wie wir Fahrzeuge auswählen
/kontakt           Adresse, Karte (statisch), Öffnungszeiten, Telefon, WhatsApp
/impressum
/datenschutz
```

**Startseite, von oben nach unten**
1. Kopfzeile: Name, Telefon, WhatsApp, Öffnungszeiten (heute geöffnet bis …).
2. Hero: eine Zeile, die Aussage und Beweis verbindet (Entwurf: „Gute Fahrzeuge. Faire Geschäfte. Vertrauen, das fährt.“ bleibt als Claim im Footer/Siegelbereich), daneben die offene Fahrzeugakte.
3. „Was bei uns vor dem Verkauf passiert“: die echten Prüfschritte.
4. Die Menschen und der Hof (Foto, Namen, Adresse).
5. Aktuelle Fahrzeuge (3 bis 4 Akten).
6. Drei Wege: kaufen, verkaufen, Werkstatt.
7. Finanzierung und Garantie in Klartext.
8. Bewertungen (nur echte, verlinkt).
9. Kontaktblock mit Karte und Öffnungszeiten.

## 5. Technik

- **Basis ist der übliche Astro-Starter** (wie `physio-magdeburg` und `haverich`): Astro 7, Tailwind 4 (Config in `global.css`), MDX, Sitemap, Cloudflare Worker über `wrangler.jsonc`, `AGENTS.md`-Konventionen (wiederverwendbare Komponenten mit Props, Seitendaten oben als `const DATA`, Firmendaten in `src/content/settings/index.json`, `DynamicImage`-Komponente für Bilder). Ich kopiere das Grundgerüst, benenne es um und entferne Physio-Inhalte vollständig.
- Kein UI-Framework. Kleine Inseln nur für Filter und Formular.
- **Fahrzeugdaten** als Content Collection (Markdown/JSON pro Fahrzeug, Fotos im Repo). Kunde pflegt per Datei oder später per einfachem CMS (Entscheidung nach Freigabe).
- **Optional:** Bestand parallel auf mobile.de/AutoScout24; Seite verlinkt dorthin, falls dort gepflegt wird.
- **Formulare** (Ankauf, Anfrage): Cloudflare Worker mit Turnstile, Versand per E-Mail. Bis dahin: Telefon, WhatsApp, `mailto:`.
- **Karte:** statisches Bild mit Link zu Maps, damit kein Drittanbieter-Script ohne Einwilligung lädt.
- **Datenschutz:** keine Tracker, keine externen Fonts, kein Cookie-Banner. Datenschutzerklärung und Impressum vollständig (Pflichtangaben GbR inkl. Gesellschafter, USt-ID falls vorhanden, Berufsrecht/Aufsicht falls zutreffend).
- **SEO:** `AutoDealer`/`LocalBusiness`- und `Car`-Schema, sauberer Titel pro Fahrzeug, Sitemap.
- **Hosting:** Cloudflare Pages (Vorschlag).
- **Qualitätsgrenze:** mobil zuerst, sichtbarer Tastaturfokus, Kontrast AA, Lighthouse ≥ 95, Bilder als AVIF/WebP mit festen Maßen.

## 6. Was ich vom Kunden brauche

Ohne diese Angaben bleiben die Stellen leer, ich erfinde nichts:

1. Vollständige Firmenangaben: Gesellschafter-Namen, Adresse, Telefon, WhatsApp, E-Mail, USt-ID, Öffnungszeiten.
2. Fotos: Hof/Einfahrt, Werkstatt, Team, Fahrzeuge (rundherum, Innenraum, Mängel).
3. Konditionen: Gewährleistung, Garantie-Anbieter und -Stufen (inklusive erlaubter Siegel/Logos), Finanzierungspartner, Überführung/Zulassung (Preise nach Entfernung, Ablauf, Versicherung, Kennzeichen).
3b. Team: Name, Foto, Aufgabe und Kontakt jeder Person, die Kunden sehen.
4. Ablauf Ankauf: wie wird bewertet, wie schnell Geld, welche Unterlagen.
5. Werkstatt/Reifen: Leistungen und Preise.
6. Link zum Google-Profil und zu Bestandsportalen, falls vorhanden.
7. Ein echtes Fahrzeug mit echtem Prüfprotokoll für die Hero-Akte.

## 7. Umsetzungsschritte

1. **Fundament:** Astro-Projekt, Tokens (Farbe, Typografie, Abstände), selbst gehostete Fonts, Layout, Kopf- und Fußzeile.
2. **Signatur:** Fahrzeugakte als Komponente (Kennzeichenfeld, Messwerte, Häkchen, Mängelzeile, Fotos) samt Ladeanimation.
3. **Startseite** mit Platzhalter-Akte („Beispiel“-Label).
4. **Bestand:** Content Collection, Listenseite mit Filter, Einzelseite.
5. **Vertrauensseiten:** Garantie, Überführung, Team, Über uns, dazu die Siegel-Komponente an Fahrzeugakte, Formularen und Fußzeile.
5b. **Ankauf, Finanzierung, Werkstatt, Kontakt.**
6. **Rechtstexte:** Impressum und Datenschutz mit Kundendaten.
7. **Formulare** mit Turnstile und E-Mail-Versand.
8. **Prüfen:** Screenshots mobil und Desktop, Tastatur, Kontrast, Lighthouse, Linkcheck.
9. **Live:** Deployment, Domain, Weiterleitungen, Google-Profil verknüpfen.

Reihenfolge: 1 bis 3 liefern zuerst eine anschauliche Vorschau, damit die Designrichtung vor dem Rest bestätigt wird.

## 8. Meine Entscheidungen (zum Gegenprüfen)

- Astro-Starter wie in deinen anderen Projekten: schneller, sicherer, kein Plugin-Wildwuchs; Preis dafür ist, dass Fahrzeugpflege über Dateien läuft, bis ein CMS ergänzt wird.
- „Starter wie immer“ habe ich aus `physio-magdeburg`/`haverich` abgeleitet; falls du ein anderes Template meinst, sag es vor dem Start.
- Sprache: nur Deutsch.
- Prüfprotokoll-Metapher als Leitidee statt klassischem Showroom.
- Selbst gehostete Schriften und statische Karte, um ohne Einwilligungsbanner auszukommen.
- Namen der Prüfpunkte (Profiltiefe, Bremsbeläge usw.) sind meine Annahme dessen, was die Werkstatt tatsächlich misst; das Team bestätigt oder ändert die Liste.
