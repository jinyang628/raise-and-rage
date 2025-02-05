import { z } from 'zod';

export const createRoomRequestSchema = z.object({
  number_of_players: z.number().min(2).max(10),
});

export type CreateRoomRequest = z.infer<typeof createRoomRequestSchema>;

export const createRoomResponseSchema = z.object({
  room_code: z.string(),
});

export type CreateRoomResponse = z.infer<typeof createRoomResponseSchema>;
