import { Text, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

export function AppText({ className, ...props }: TextProps) {
  return <Text className={twMerge('text-xl text-base-content', className)} {...props} />;
}
