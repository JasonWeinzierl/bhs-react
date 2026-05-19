import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import { AppH1 } from '@/text/AppH1';
import { AppText } from '@/text/AppText';

export default function Index() {
  return (
    <ScrollView
      className="container mx-auto sm:px-20"
    >
      <Stack.Screen.Title>Home</Stack.Screen.Title>
      <View
        testID="HomeScreen"
        className="relative rounded-sm bg-base-100"
      >
        <View className="relative aspect-video w-full">
          <Image
            alt=""
            placeholder={{
              blurhash: 'LNFrL-niNt-p~WRP%gt7.9D%V@tQ',
            }}
            transition={300}
            className="inset-0 size-full"
            contentFit="cover"
            source={[{
              uri: 'https://beltonhistoricalstorage.blob.core.windows.net/photos/2017/DSCF0001.jpeg',
              width: 3296,
              height: 2357,
            }, {
              uri: 'https://beltonhistoricalstorage.blob.core.windows.net/photos/2017/DSCF0001.1600.jpeg',
              width: 1600,
              height: 1144,
            }, {
              uri: 'https://beltonhistoricalstorage.blob.core.windows.net/photos/2017/DSCF0001.1280.jpeg',
              width: 1280,
              height: 915,
            }, {
              uri: 'https://beltonhistoricalstorage.blob.core.windows.net/photos/2017/DSCF0001.960.jpeg',
              width: 960,
              height: 687,
            }, {
              uri: 'https://beltonhistoricalstorage.blob.core.windows.net/photos/2017/DSCF0001.640.jpeg',
              width: 640,
              height: 458,
            }, {
              uri: 'https://beltonhistoricalstorage.blob.core.windows.net/photos/2017/DSCF0001.320.jpeg',
              width: 320,
              height: 229,
            }]}
          />
        </View>

        <View
          className="gap-2 p-6"
        >
          <AppH1
            testID="HomeScreen.title"
            className="text-center"
          >
            The City Hall Museum
            {' '}
            <Text className="text-[80%]">sponsored by the Belton Historical Society</Text>
          </AppH1>
          <AppText testID="HomeScreen.description" className="text-center">
            A non-profit, charitable organization whose purpose is to discover, collect, and research artifacts, documents, and material relating to the history of the surrounding community and to record historical information of the present.
          </AppText>
        </View>
      </View>
    </ScrollView>
  );
}
