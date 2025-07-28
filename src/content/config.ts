import { z, defineCollection } from "astro:content";

const translationsCollection = defineCollection({
  type: "content",
  schema: z.object({
    home: z.string(),
    projects: z.string(),
    contact: z.string(),
    rules: z.string(),
  }),
});

export const collections = {
  translations: translationsCollection,
};