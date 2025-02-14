import { z } from 'zod';

export const profileSchema = z.object({
  username: z.string(),
  user_id: z.string(),
});

export type Profile = z.infer<typeof profileSchema>;
