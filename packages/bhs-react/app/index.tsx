import { Image } from 'expo-image';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      testID="HomeScreen"
      className="relative rounded-sm bg-gray-100 dark:bg-gray-800"
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
        <Text
          testID="HomeScreen.title"
          className="text-center text-4xl dark:text-amber-50"
        >
          The City Hall Museum
          {' '}
          <Text className="text-[80%]">sponsored by the Belton Historical Society</Text>
        </Text>
        <Text testID="HomeScreen.description" className="text-center text-xl dark:text-amber-50">
          A non-profit, charitable organization whose purpose is to discover, collect, and research artifacts, documents, and material relating to the history of the surrounding community and to record historical information of the present.
        </Text>
      </View>
    </View>
  );
}
