import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');
const TABLE_SIZE = width * 0.8; // Table size
const SEAT_SIZE = 50; // Seat size
const NUM_SEATS = 10; // Always show 10 seats

export default function RoomScreen() {
  const { roomCode, number_of_players } = useLocalSearchParams();
  const numPlayers = parseInt(number_of_players as string, 10);

  return (
    <View className="flex-1 items-center justify-center bg-purple-900">
      {/* Circular Table Container */}
      <View
        className="absolute rounded-full border-8 border-purple-800 bg-purple-700"
        style={{ width: TABLE_SIZE, height: TABLE_SIZE }}
      >
        {/* Seats placed around the table */}
        {Array.from({ length: NUM_SEATS }).map((_, index) => {
          const isLocked = index >= numPlayers;
          const angle = index * 36 - 90; // 10 seats = 36° each, offset by -90° to start at bottom
          const radius = TABLE_SIZE / 2 - SEAT_SIZE / 2; // Distance from center

          return (
            <TouchableOpacity
              key={index}
              className={`absolute h-12 w-12 items-center justify-center rounded-full bg-purple-500 ${
                isLocked ? 'opacity-50' : ''
              }`}
              style={{
                // Start at center, rotate to angle, then translate outward
                transform: [{ rotate: `${angle}deg` }, { translateX: radius }],
              }}
              onPress={() => !isLocked && console.log(`Seat ${index + 1} clicked`)}
              disabled={isLocked}
            >
              {index === 0 ? (
                <Text className="font-bold text-white">You</Text>
              ) : (
                <Text className="font-bold text-white">+</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Room Code */}
      <Text className="absolute bottom-8 text-xl font-bold text-white">Room: {roomCode}</Text>
    </View>
  );
}
