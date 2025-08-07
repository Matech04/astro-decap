import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});
const blog = defineCollection({});

export const collections = {projects, blog};