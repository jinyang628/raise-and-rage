import { View } from 'react-native';

export default function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-800 p-6">
      <View className="flex h-[50%] w-[50%] min-w-[450px] max-w-[600px] space-y-6 rounded-2xl border border-white/10 bg-white/20 p-8 shadow-2xl backdrop-blur-lg">
        {children}
      </View>
    </View>
  );
}
