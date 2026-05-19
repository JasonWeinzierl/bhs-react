import { TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { AppText } from './AppText';

export function AppSmall({ className, ...props }: TextProps) {
  return <AppText className={twMerge('text-[80%]', className)} {...props} />;
}
