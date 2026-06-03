import { fireEvent, render } from '@testing-library/react-native';
import * as Linking from 'expo-linking';

import PhoneLink from './PhoneLink';

jest.mock('expo-linking', () => ({
  openURL: jest.fn().mockResolvedValue(true),
}));

describe('PhoneLink', () => {
  it('renders the display text', () => {
    const { getByText } = render(
      <PhoneLink
        url="tel:5555555555"
        display="555-555-5555"
      />,
    );

    expect(getByText('555-555-5555')).toBeTruthy();
  });

  it('opens the URL when pressed', () => {
    const { getByText } = render(
      <PhoneLink
        url="tel:5555555555"
        display="555-555-5555"
      />,
    );

    fireEvent.press(getByText('555-555-5555'));

    expect(Linking.openURL).toHaveBeenCalledWith('tel:5555555555');
  });
});
