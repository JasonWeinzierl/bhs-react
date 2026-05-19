import { View } from 'react-native';

import AppHeaderAddress from './AppHeaderAddress';
import AppHeaderBrand from './AppHeaderBrand';

export default function AppHeader() {
  return (
    <View className="mb-5 hidden md:flex">
      <AppHeaderBrand />
      <AppHeaderAddress />
    </View>
  );
}
