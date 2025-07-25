// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 3. Define your collection(s)
const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
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

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, projects };
