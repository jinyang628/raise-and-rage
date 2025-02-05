import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Slider from '@react-native-community/slider';

export default function CreateRoomScreen() {
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(2);

  const handleCreateRoom = () => {
    console.log(`Creating room with ${numberOfPlayers} players...`);
  };

  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-800 p-6">
      <View className="flex-1 items-center justify-center">
        <View className="w-full min-w-[400px] max-w-md items-center justify-center rounded-2xl border border-white/10 bg-white/20 p-8 shadow-2xl backdrop-blur-lg">
          {/* Slider Section */}
          <View className="w-full items-center justify-center">
            <Text className="mb-12 text-center text-2xl font-bold tracking-tight text-white drop-shadow-lg">
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
          <Text className="mt-4 text-center text-sm text-white">You can add AI NPCs later!</Text>

          {/* Create Room Button */}
          <TouchableOpacity
            className="mt-8 w-full transform rounded-xl bg-blue-500 py-4 shadow-xl transition-all active:scale-95"
            onPress={handleCreateRoom}
          >
            <Text className="text-center text-xl font-bold text-white">Create Room</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
