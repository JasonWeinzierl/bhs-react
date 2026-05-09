import { render } from '@testing-library/react-native';

import Index from '@/app/index';

describe('<Index />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Index />);

    expect(getByTestId('HomeScreen.title')).toHaveTextContent('The City Hall Museum sponsored by the Belton Historical Society.');
  });
});
