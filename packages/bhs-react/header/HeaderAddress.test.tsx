import { render } from '@testing-library/react-native';

import HeaderAddress from './HeaderAddress';

describe('HeaderAddress', () => {
  it('renders the address lines and phone number', () => {
    const { getByText } = render(
      <HeaderAddress
        addressLine1="123 Sesame St"
        addressLine2="New York, NY 10001"
        phoneUrl="tel:5555555555"
        phoneDisplay="555-555-5555"
      />,
    );

    expect(getByText('123 Sesame St', { exact: false })).toBeTruthy();
    expect(getByText('New York, NY 10001', { exact: false })).toBeTruthy();
    expect(getByText('555-555-5555')).toBeTruthy();
  });
});
