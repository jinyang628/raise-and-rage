import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

import { MIN_BUY_IN_AMOUNT } from '@/constants/game';
import { useLocalSearchParams } from 'expo-router';

const { width, height } = Dimensions.get('window');
const TABLE_WIDTH = width * 0.65;
const TABLE_HEIGHT = height * 0.5;
const SEAT_SIZE = 50;
const SEATS_PER_VERTICAL_SIDE = 3;
const SEATS_PER_HORIZONTAL_SIDE = 1;
const SEAT_OFFSET = SEAT_SIZE / 2; // Distance of seats from table edge
const CORNER_INSET = TABLE_HEIGHT * 0.15; // Distance from corners for edge seats

// Calculate the spacing between seats on vertical sides, accounting for corner insets
const VERTICAL_SPACING = (TABLE_HEIGHT - 2 * CORNER_INSET) / (SEATS_PER_VERTICAL_SIDE - 1);

export default function RoomScreen() {
  const { roomCode, number_of_players } = useLocalSearchParams();
  const numPlayers = parseInt(number_of_players as string, MIN_BUY_IN_AMOUNT);

  const getSeatPosition = (index: number) => {
    if (index < SEATS_PER_VERTICAL_SIDE) {
      // Left side
      return {
        left: -SEAT_SIZE - SEAT_OFFSET,
        top: CORNER_INSET / 2 + index * VERTICAL_SPACING,
      };
    } else if (index < SEATS_PER_VERTICAL_SIDE + SEATS_PER_HORIZONTAL_SIDE) {
      // Bottom
      return {
        left: TABLE_WIDTH / 2 - SEAT_SIZE / 2,
        top: TABLE_HEIGHT + SEAT_OFFSET,
      };
    } else if (index < SEATS_PER_VERTICAL_SIDE * 2 + SEATS_PER_HORIZONTAL_SIDE) {
      // Right side
      return {
        left: TABLE_WIDTH + SEAT_OFFSET,
        top:
          CORNER_INSET / 2 +
          (SEATS_PER_VERTICAL_SIDE * 2 + SEATS_PER_HORIZONTAL_SIDE - index - 1) * VERTICAL_SPACING,
      };
    } else {
      // Top
      return {
        left: TABLE_WIDTH / 2 - SEAT_SIZE / 2,
        top: -SEAT_SIZE - SEAT_OFFSET,
      };
    }
  };

  const seats = Array.from({ length: MIN_BUY_IN_AMOUNT }).map((_, index) => {
    const isLocked = index >= numPlayers;
    const position = getSeatPosition(index);

    return (
      <TouchableOpacity
        key={index}
        className={`absolute h-12 w-12 items-center justify-center rounded-full bg-purple-500 ${
          isLocked ? 'opacity-50' : ''
        }`}
        style={{
          ...position,
          transform: [{ translateX: 0 }, { translateY: 0 }],
        }}
        onPress={() => !isLocked && console.log(`Seat ${index + 1} clicked`)}
        disabled={isLocked}
      >
        {index === Math.floor(numPlayers / 2) ? (
          <Text className="font-bold text-white">You</Text>
        ) : (
          <Text className="font-bold text-white">+</Text>
        )}
      </TouchableOpacity>
    );
  });

  return (
    <View className="flex-1 items-center justify-center bg-purple-900">
      <View
        className="relative rounded-lg border-8 border-purple-800 bg-purple-700"
        style={{
          width: TABLE_WIDTH,
          height: TABLE_HEIGHT,
        }}
      >
        {seats}
      </View>

      <Text className="absolute bottom-8 text-xl font-bold text-white">Room: {roomCode}</Text>
    </View>
  );
}
