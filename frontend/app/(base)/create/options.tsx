import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Options() {
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(2); // Default number of players

  const handleCreateRoom = () => {
    // Handle the creation of the room with the selected number of players
    console.log(`Creating room with ${numberOfPlayers} players...`);
    // Add your logic here (e.g., navigation, API call, etc.)
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      {/* Slider for Number of Players */}
      <View className="w-full max-w-xs">
        <Text className="mb-4 text-lg font-bold">Number of Players: {numberOfPlayers}</Text>
        {/* <Slider
          minimumValue={2}
          maximumValue={10}
          step={1}
          value={numberOfPlayers}
          onValueChange={setNumberOfPlayers}
          minimumTrackTintColor="#0000ff"
          maximumTrackTintColor="#cccccc"
          thumbTintColor="#0000ff"
        /> */}
      </View>

      {/* Additional Information */}
      <Text className="mt-4 text-sm text-gray-600">You can add AI NPCs later!</Text>

      {/* Create Room Button */}
      <TouchableOpacity
        className="mt-8 rounded-lg bg-blue-500 px-6 py-3"
        onPress={handleCreateRoom}
      >
        <Text className="text-lg font-bold text-white">Create Room</Text>
      </TouchableOpacity>
    </View>
  );
}
