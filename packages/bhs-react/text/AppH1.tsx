import { TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { AppText } from './AppText';

export function AppH1({ className, ...props }: TextProps) {
  return <AppText className={twMerge('font-serif-semibold text-4xl tracking-wider text-base-content', className)} {...props} />;
}
