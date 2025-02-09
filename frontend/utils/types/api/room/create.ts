import {
  MAX_BUY_IN_AMOUNT,
  MAX_SMALL_BLIND_AMOUNT,
  MIN_BUY_IN_AMOUNT,
  MIN_SMALL_BLIND_AMOUNT,
} from '@/constants/game';
import { z } from 'zod';

export const createRoomRequestSchema = z.object({
  buy_in_amount: z.number().min(MIN_BUY_IN_AMOUNT).max(MAX_BUY_IN_AMOUNT),
  small_blind_amount: z.number().min(MIN_SMALL_BLIND_AMOUNT).max(MAX_SMALL_BLIND_AMOUNT),
});

export type CreateRoomRequest = z.infer<typeof createRoomRequestSchema>;

export const createRoomResponseSchema = z.object({
  room_code: z.string(),
});

export type CreateRoomResponse = z.infer<typeof createRoomResponseSchema>;
