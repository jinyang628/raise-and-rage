import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { createRoom } from '@/api/room/create';
import {
  CreateRoomRequest,
  CreateRoomResponse,
  createRoomRequestSchema,
} from '@/utils/types/api/room/create';
import Slider from '@react-native-community/slider';
import { router } from 'expo-router';

import CardWrapper from '@/components/shared/card-wrapper';

export default function CreateRoomScreen() {
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(2);

  const handleCreateRoom = async () => {
    console.log(`Creating room with ${numberOfPlayers} players...`);
    const createRoomRequest: CreateRoomRequest = createRoomRequestSchema.parse({
      number_of_players: numberOfPlayers,
    });
    const createRoomResponse: CreateRoomResponse = await createRoom(createRoomRequest);
    console.log(`Room created with code ${createRoomResponse.room_code}`);
    router.push(`/rooms/${createRoomResponse.room_code}`);
  };

  return (
    <CardWrapper>
      <View className="flex-1 items-center justify-center">
        {/* Slider Section */}
        <View className="w-full items-center justify-center">
          <Text className="mb-12 text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg">
            Number of Players: {numberOfPlayers}
          </Text>
          <View className="w-full px-4">
            <Slider
              minimumValue={2}
              maximumValue={10}
              step={1}
              value={numberOfPlayers}
              onValueChange={setNumberOfPlayers}
              minimumTrackTintColor="#0000ff"
              maximumTrackTintColor="#cccccc"
              thumbTintColor="#0000ff"
            />
          </View>
        </View>

        {/* Additional Information */}
        <Text className="mt-4 text-center text-lg font-bold text-white">
          You can add AI NPCs later!
        </Text>

        {/* Create Room Button */}
        <TouchableOpacity
          className="mt-8 w-full transform rounded-xl bg-blue-500 py-4 shadow-xl transition-all active:scale-95"
          onPress={handleCreateRoom}
        >
          <Text className="text-center text-xl font-bold text-white">Create Room</Text>
        </TouchableOpacity>
      </View>
    </CardWrapper>
  );
}
