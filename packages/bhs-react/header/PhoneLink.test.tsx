import { render } from '@testing-library/react-native';

import PhoneLink from './PhoneLink';

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
});
