import React, { useState } from 'react';
import { Alert, AppState, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { supabase } from '@/utils/supabase';

import CardWrapper from '@/components/shared/CardWrapper';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <CardWrapper>
      <View className="flex-1 justify-center p-4">
        <Text className="my-9 text-center text-5xl font-bold tracking-tight text-white drop-shadow-lg">
          Raise & Rage
        </Text>

        {/* Email Input */}
        <View className="mb-4">
          <TextInput
            className="w-full rounded-xl bg-white p-4 text-black shadow-lg"
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View className="mb-6">
          <TextInput
            className="w-full rounded-xl bg-white p-4 text-black shadow-lg"
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        {/* Sign In and Sign Up Buttons */}
        <View className="flex-row justify-between space-x-4">
          <TouchableOpacity
            className="flex-1 rounded-xl bg-emerald-500 py-4 shadow-lg active:bg-emerald-600"
            disabled={loading}
            onPress={signInWithEmail}
          >
            <Text className="text-center text-lg font-bold text-white">Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 rounded-xl bg-rose-500 py-4 shadow-lg active:bg-rose-600"
            disabled={loading}
            onPress={signUpWithEmail}
          >
            <Text className="text-center text-lg font-bold text-white">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CardWrapper>
  );
}
