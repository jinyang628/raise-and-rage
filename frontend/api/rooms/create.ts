import { apiClient } from '@/utils/client';
import {
  CreateRoomRequest,
  CreateRoomResponse,
  createRoomResponseSchema,
} from '@/utils/types/api/rooms/create';

const CREATE_ROOM_ENDPOINT = '/api/rooms';

export async function createRoom(input: CreateRoomRequest): Promise<CreateRoomResponse> {
  try {
    const response = await apiClient.post<CreateRoomResponse>(`${CREATE_ROOM_ENDPOINT}`, input);
    const createRoomResponse = createRoomResponseSchema.parse(response.data);
    return createRoomResponse;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}
