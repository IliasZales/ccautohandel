import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const settings = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/settings",
  }),
  schema: z.object({
    websiteUrl: z.string(),
    phone: z.string(),
    phoneDisplay: z.string(),
    whatsapp: z.string(),
    email: z.string(),
    mapUrl: z.string(),
    formbase: z.string(),
    adress: z.object({
      street: z.string(),
      city: z.string(),
      zip: z.string(),
    }),
    hours: z.string(),
    instagram: z.string(),
    taxnumber: z.string(),
    name: z.string(),
    companyName: z.string(),
  }),
});

const fahrzeuge = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/fahrzeuge",
  }),
  schema: z.object({
    bestandsNr: z.string(),
    titel: z.string(),
    untertitel: z.string(),
    baujahr: z.number(),
    km: z.number(),
    kraftstoff: z.string(),
    getriebe: z.string(),
    ps: z.number(),
    hu: z.string(),
    preis: z.number(),
    bild: z.enum(["fahrzeugBeispiel"]),
    beispiel: z.boolean().default(false),
    messwerte: z.array(
      z.object({ label: z.string(), wert: z.string(), ok: z.boolean().default(true) }),
    ),
    geprueftAm: z.string(),
    maengel: z.array(z.string()),
  }),
});

export const collections = {
  settings,
  fahrzeuge,
};
