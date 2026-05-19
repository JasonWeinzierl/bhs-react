import * as Linking from 'expo-linking';
import { Text } from 'react-native';

export default function AppPhoneLink() {
  return (
    <Text
      className="underline"
      onPress={() => void Linking.openURL('tel:8163223977')}
    >
      816-322-3977
    </Text>
  );
}
