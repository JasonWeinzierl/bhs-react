import '../global.css';

import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ImageBackground, ScrollView } from 'react-native';

import AppHeader from '@/header/AppHeader';
import useAppFonts from '@/text/useAppFonts';

// TODO: route loading is customization is unreleased: https://github.com/expo/expo/pull/43885
// export function SuspenseFallback() {
//  return (
//    <View className="flex-1 items-center justify-center">
//      <ActivityIndicator size="large" />
//    </View>
//  );
// }

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, fontError] = useAppFonts();

  useEffect(() => {
    if (fontLoaded || fontError) {
      void SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  return (
    <ImageBackground
      source={{ uri: 'https://beltonhistoricalsociety.org/assets/img/2019/webtreats_wood-pattern3-512.jpg' }}
      resizeMode="repeat"
      className="flex-1"
      width={512}
      height={512}
    >
      <ScrollView>
        <AppHeader />

        <Stack
          screenOptions={{
            presentation: 'transparentModal',
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
}
