import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { createRoom } from '@/api/room/create';
import {
  MAX_BUY_IN_AMOUNT,
  MAX_SMALL_BLIND_AMOUNT,
  MIN_BUY_IN_AMOUNT,
  MIN_SMALL_BLIND_AMOUNT,
} from '@/constants/game';
import {
  CreateRoomRequest,
  CreateRoomResponse,
  createRoomRequestSchema,
} from '@/utils/types/api/room/create';
import Slider from '@react-native-community/slider';
import { router } from 'expo-router';

import CardWrapper from '@/components/shared/CardWrapper';

export default function CreateRoomScreen() {
  const [buyInAmount, setBuyInAmount] = useState<number>(100);
  const [smallBlindAmount, setSmallBlindAmount] = useState<number>(1);

  const handleCreateRoom = async () => {
    console.log(`Creating room...`);
    const createRoomRequest: CreateRoomRequest = createRoomRequestSchema.parse({
      buy_in_amount: buyInAmount,
      small_blind_amount: smallBlindAmount,
    });
    const createRoomResponse: CreateRoomResponse = await createRoom(createRoomRequest);
    console.log(`Room created with code ${createRoomResponse.room_id}`);
    router.push(`/rooms/${createRoomResponse.room_id}`);
  };

  return (
    <CardWrapper>
      <View className="flex-1 items-center justify-center">
        {/* Slider Section */}
        <View className="w-full items-center justify-center space-y-4">
          <Text className="mb-5 text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg">
            Room Options
          </Text>

          <View className="w-full px-4">
            <Slider
              minimumValue={MIN_BUY_IN_AMOUNT}
              maximumValue={MAX_BUY_IN_AMOUNT}
              step={10}
              value={buyInAmount}
              onValueChange={setBuyInAmount}
              minimumTrackTintColor="#0000ff"
              maximumTrackTintColor="#cccccc"
              thumbTintColor="#0000ff"
            />
          </View>
          <Text className="mb-12 text-center text-xl font-bold tracking-tight text-white drop-shadow-lg">
            Buy In Amount: {buyInAmount}
          </Text>

          <View className="w-full px-4">
            <Slider
              minimumValue={MIN_SMALL_BLIND_AMOUNT}
              maximumValue={MAX_SMALL_BLIND_AMOUNT}
              step={1}
              value={smallBlindAmount}
              onValueChange={setSmallBlindAmount}
              minimumTrackTintColor="#0000ff"
              maximumTrackTintColor="#cccccc"
              thumbTintColor="#0000ff"
            />
          </View>
          <Text className="mb-12 text-center text-xl font-bold tracking-tight text-white drop-shadow-lg">
            Small Blind Amount: {smallBlindAmount}
          </Text>
        </View>

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
