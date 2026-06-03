import { Text, View } from 'react-native';

interface HeaderBrandProps {
  title: string;
}

export default function HeaderBrand(props: HeaderBrandProps) {
  return (
    <View className="pt-12 pb-4">
      <Text className="text-center font-serif-semibold text-7xl text-neutral-content text-shadow-lg/30">
        {props.title}
      </Text>
    </View>
  );
}
