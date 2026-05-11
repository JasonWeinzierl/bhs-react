import '../global.css';

import { Stack } from 'expo-router';

// TODO: route loading is customization is unreleased: https://github.com/expo/expo/pull/43885
// export function SuspenseFallback() {
//  return (
//    <View className="flex-1 items-center justify-center">
//      <ActivityIndicator size="large" />
//    </View>
//  );
// }

export default function RootLayout() {
  return <Stack />;
}
