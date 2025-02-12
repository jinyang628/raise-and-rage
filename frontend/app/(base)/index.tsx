import { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { supabase } from '@/utils/supabase';
import { Session } from '@supabase/supabase-js';
import { Link } from 'expo-router';

import Auth from '@/components/Auth';
import CardWrapper from '@/components/shared/CardWrapper';

export default function MainMenu() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!session || !session.user) {
    return <Auth />;
  }
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
}
