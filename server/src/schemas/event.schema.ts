import { number, object, string, z } from 'zod';

export const EventInputSchema = object({
  body: object({
    eventLocation: string({
      required_error: 'Event Location Is Required',
    }),
    eventStart: string(),
    eventEnd: string(),
    totalMembers: number(),
    eventInfo: string(),
    eventFee: string(),
    eventCreatorId: number(),
  }),
});

export type EventInputType = z.infer<typeof EventInputSchema>['body'];
