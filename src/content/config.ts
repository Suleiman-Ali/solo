import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sortOrder: z.number(),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    sortOrder: z.number(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
