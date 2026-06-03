import { View } from 'react-native';

import HeaderAddress from './HeaderAddress';
import HeaderBrand from './HeaderBrand';

export default function AppHeader() {
  return (
    <View className="mb-5 hidden md:flex">
      <HeaderBrand
        title="The Belton Historical Society"
      />
      <HeaderAddress
        addressLine1="P.O. Box 1144"
        addressLine2="Belton, MO 64012"
        phoneUrl="tel:8163223977"
        phoneDisplay="816-322-3977"
      />
    </View>
  );
}
