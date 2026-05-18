import { Stack } from 'expo-router';
import { renderRouter } from 'expo-router/testing-library';

import Index from '@/app/index';

describe('<Index />', () => {
  it('should render correctly', () => {
    const { getByTestId } = renderRouter({
      _layout: () => <Stack />,
      index: Index,
    });

    expect(getByTestId('HomeScreen.title')).toHaveTextContent('The City Hall Museum sponsored by the Belton Historical Society');
    expect(getByTestId('HomeScreen.description')).toBeTruthy();
  });
});
