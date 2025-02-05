import { Text, TouchableOpacity, View } from 'react-native';

import { Link } from 'expo-router';

export default function MainMenu() {
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-800 p-6">
      <View className="w-full max-w-md rounded-2xl border border-white/10 bg-white/20 p-8 shadow-2xl backdrop-blur-lg">
        <Text className="mb-12 text-center text-5xl font-bold tracking-tight text-white drop-shadow-lg">
          Raise & Rage
        </Text>

        <Link href="/lobby" asChild>
          <TouchableOpacity className="mb-6 transform rounded-xl bg-emerald-500 py-4 shadow-xl transition-all hover:bg-emerald-600 active:scale-95 active:bg-emerald-700">
            <Text className="text-center text-xl font-bold text-white">Play</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/splitwise" asChild>
          <TouchableOpacity className="transform rounded-xl bg-rose-500 py-4 shadow-xl transition-all hover:bg-rose-600 active:scale-95 active:bg-rose-700">
            <Text className="text-center text-xl font-bold text-white">Connect Splitwise</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
