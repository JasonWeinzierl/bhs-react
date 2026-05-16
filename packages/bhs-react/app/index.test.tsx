import { render } from '@testing-library/react-native';

import Index from '@/app/index';

const DESCRIPTION = 'A non-profit, charitable organization whose purpose is to discover, collect, and research artifacts, documents, and material relating to the history of the surrounding community and to record historical information of the present.';

describe('<Index />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Index />);

    expect(getByTestId('HomeScreen.title')).toHaveTextContent('The City Hall Museum sponsored by the Belton Historical Society');
    expect(getByTestId('HomeScreen.description')).toHaveTextContent(DESCRIPTION);
  });
});
