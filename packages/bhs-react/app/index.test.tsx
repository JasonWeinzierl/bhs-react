import { render } from '@testing-library/react-native';
import Index from '@/app/index';

describe('<Index />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Index />);

    expect(getByTestId('WelcomeText')).toHaveTextContent('Edit app/index.tsx to edit this screen.');
  });
})

