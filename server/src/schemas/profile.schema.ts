import { number, object, string, z } from 'zod';

export const userProfileSchema = object({
  body: object({
    userName: string({
      required_error: 'user name is required',
    }),
    profileImage: string(),
    bio: string(),
    profession: string(),
    address: string(),
    country: string(),
    userId: number(),
  }),
});

export type UserProfileInputType = z.infer<typeof userProfileSchema>['body'];
