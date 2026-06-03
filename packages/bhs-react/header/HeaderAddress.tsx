import { Text, View } from 'react-native';

import PhoneLink from './PhoneLink';

interface HeaderAddressProps {
  addressLine1: string;
  addressLine2: string;
  phoneUrl: string;
  phoneDisplay: string;
}

export default function HeaderAddress(props: HeaderAddressProps) {
  return (
    <View className="mb-5">
      <Text className="text-center text-xl text-neutral-content text-shadow-md/30">
        {props.addressLine1}
        {' | '}
        {props.addressLine2}
        {' | '}
        <PhoneLink
          url={props.phoneUrl}
          display={props.phoneDisplay}
        />
      </Text>
    </View>
  );
}
