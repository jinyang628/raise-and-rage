import { Stack } from 'expo-router';

export default function BaseLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Home',
        }}
      />

      <Stack.Screen
        name="lobby"
        options={{
          headerTitle: 'Lobby',
        }}
      />

      <Stack.Screen
        name="create"
        options={{
          headerTitle: 'Create Room',
        }}
      />

      <Stack.Screen
        name="splitwise"
        options={{
          headerTitle: 'Splitwise',
        }}
      />

      <Stack.Screen
        name="[roomCode]"
        options={{
          headerTitle: 'Room',
        }}
      />
    </Stack>
  );
}
