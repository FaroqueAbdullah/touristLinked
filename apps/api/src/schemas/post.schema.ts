import { number, object, string, z } from 'zod';

export const PostInputSchema = object({
  body: object({
    content: string(),
    image: string(),
    authorId: number(),
  }),
});

export type PostInputType = z.infer<typeof PostInputSchema>['body'];
