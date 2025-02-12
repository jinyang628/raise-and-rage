import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Link } from 'expo-router';

import CardWrapper from '@/components/shared/CardWrapper';

export default function LobbyScreen() {
  const [roomCode, setRoomCode] = useState<string>('');

  const onRoomCodeChange = (input: string) => {
    if (!/^[a-zA-Z0-9]*$/.test(input)) {
      return;
    }
    setRoomCode(input);
  };

  return (
    <CardWrapper>
      <Text className="mb-12 text-center text-5xl font-bold text-white">Game Lobby</Text>

      <Link href="/create" asChild>
        <TouchableOpacity className="w-full rounded-xl bg-emerald-500 py-4">
          <Text className="text-center text-lg font-bold text-white">Create Room</Text>
        </TouchableOpacity>
      </Link>

      <View className="h-1 w-full bg-white/20" />

      <View className="flex-row space-x-2">
        <TextInput
          placeholder="Room Code"
          value={roomCode}
          onChangeText={onRoomCodeChange}
          maxLength={6}
          keyboardType="numeric"
          className="flex-1 rounded-xl bg-white/30 px-4 py-4 text-center text-lg text-white"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity
          className={`flex-1 rounded-xl px-6 py-4 ${
            roomCode.length === 6 ? 'bg-sky-500' : 'bg-gray-500 opacity-50'
          }`}
          disabled={roomCode.length !== 6}
        >
          <Text className="text-center text-lg font-bold text-white">Join Room</Text>
        </TouchableOpacity>
      </View>
    </CardWrapper>
  );
}
