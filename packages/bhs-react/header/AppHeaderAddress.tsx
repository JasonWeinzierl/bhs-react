import { Text, View } from 'react-native';

import AppPhoneLink from './AppPhoneLink';

export default function AppHeaderAddress() {
  return (
    <View className="mb-5">
      <Text className="text-center text-xl text-neutral-content text-shadow-md/30">
        P.O. Box 1144 | Belton, MO 64012 |
        {' '}
        <AppPhoneLink />
      </Text>
    </View>
  );
}
