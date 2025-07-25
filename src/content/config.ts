import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    technologies: z.array(z.string()),
    date: z.string(),
    status: z.enum(['Ongoing', 'Completed']),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};