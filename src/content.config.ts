import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    /** Publish date (still stored even if hidden in UI) */
    pubDate: z.coerce.date(),
  }),
});

export const collections = { writing };

