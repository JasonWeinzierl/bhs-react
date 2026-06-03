import { render } from '@testing-library/react-native';

import HeaderBrand from './HeaderBrand';

describe('HeaderBrand', () => {
  it('renders the title', () => {
    const { getByText } = render(<HeaderBrand title="Test Title" />);

    expect(getByText('Test Title')).toBeTruthy();
  });
});
