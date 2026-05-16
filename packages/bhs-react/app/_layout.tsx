import '../global.css';

import { Stack } from 'expo-router';
import { ImageBackground } from 'react-native';

// TODO: route loading is customization is unreleased: https://github.com/expo/expo/pull/43885
// export function SuspenseFallback() {
//  return (
//    <View className="flex-1 items-center justify-center">
//      <ActivityIndicator size="large" />
//    </View>
//  );
// }

export default function RootLayout() {
  return (
    <ImageBackground
      source={{ uri: 'https://beltonhistoricalsociety.org/assets/img/2019/webtreats_wood-pattern3-512.jpg' }}
      resizeMode="repeat"
      className="flex-1"
      width={512}
      height={512}
    >
      <Stack
        screenOptions={{
          presentation: 'transparentModal',
        }}
      />
    </ImageBackground>
  );
}
