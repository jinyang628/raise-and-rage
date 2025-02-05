import { Text, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';

export default function RoomScreen() {
  const { roomCode } = useLocalSearchParams();

  return (
    <View>
      <Text>Room: {roomCode}</Text>
      {/* Your room screen content */}
    </View>
  );
}
