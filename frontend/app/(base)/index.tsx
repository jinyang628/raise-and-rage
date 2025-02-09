import { Text, TouchableOpacity, View } from 'react-native';

import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

import CardWrapper from '@/components/shared/card-wrapper';

export default function MainMenu() {
  const { user } = useUser();

  return (
    <View className="bg-white">
      <SignedIn>
        <CardWrapper>
          <Text className="my-9 text-center text-5xl font-bold tracking-tight text-white drop-shadow-lg">
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
        </CardWrapper>
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
