import * as Linking from 'expo-linking';
import { Text } from 'react-native';

interface PhoneLinkProps {
  url: string;
  display: string;
}

export default function PhoneLink(props: PhoneLinkProps) {
  return (
    <Text
      className="underline"
      onPress={() => void Linking.openURL(props.url)}
    >
      {props.display}
    </Text>
  );
}
