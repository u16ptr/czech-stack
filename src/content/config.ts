import { z, defineCollection } from 'astro:content';

export const collections = {
  js: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      author: z.string(),
      date: z.date(),
      language: z.string(),
    }),
  }),
};
