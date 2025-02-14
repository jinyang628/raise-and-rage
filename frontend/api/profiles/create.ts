import { apiClient } from '@/utils/client';
import { Profile } from '@/utils/types/api/profiles/create';

const CREATE_PROFILES_ENDPOINT = '/api/profiles';

export async function createProfile(input: Profile): Promise<void> {
  try {
    await apiClient.post(`${CREATE_PROFILES_ENDPOINT}`, input);
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}
