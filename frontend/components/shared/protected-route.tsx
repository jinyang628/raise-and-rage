import { ActivityIndicator, View } from 'react-native';

import SignInScreen from '@/app/(auth)/sign-in';
import { useAuth } from '@clerk/clerk-expo';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <SignInScreen />;
  }

  return children;
}
