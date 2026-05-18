import { render } from '@testing-library/react-native';

import Index from '@/app/index';

jest.mock('expo-router', () => {
  return {
    Stack: {
      Screen: {
        Title: () => false,
      },
    },
  };
});

describe('<Index />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Index />);

    expect(getByTestId('HomeScreen.title')).toHaveTextContent('The City Hall Museum sponsored by the Belton Historical Society');
    expect(getByTestId('HomeScreen.description')).toBeTruthy();
  });
});
