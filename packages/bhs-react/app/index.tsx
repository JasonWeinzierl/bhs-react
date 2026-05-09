import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      testID="HomeScreen"
      className="flex-1 items-center justify-center"
    >
      <Text testID="HomeScreen.title">
        The City Hall Museum sponsored by the Belton Historical Society.
      </Text>
    </View>
  );
}
