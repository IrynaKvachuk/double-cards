import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Card from '.';
import { CardType } from '../../features/Card/CardTypes';
import store from '../../store';

const setUp = () => {
  const card: CardType = {
    // src: `${process.env.PUBLIC_URL}/cards/palm.png`,
    src: `/cards/palm.png`,
    name: 'palm',
    side: 'back',
    matched: false,
    id: 'palm1'
  };

  const mockData = {
    card,
    disabled: false,
    openCard: jest.fn()
  };

  const utils = render(
    <Router>
      <Provider store={store}>
        <Card {...mockData} />
      </Provider>
    </Router>
  );
  const cardContainer = screen.getByTestId('card');

  return {
    cardContainer,
    mockData,
    ...utils
  };
};
describe('Card', () => {
  beforeEach(() => {});
  afterEach(() => {});

  test('renders card', () => {
    const { cardContainer } = setUp();

    expect(cardContainer).toBeInTheDocument();
  });
});
