import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Card from '.';
import { CardType } from '../../features/Card/CardTypes';
import store from '../../store';
import { CardSide } from '../../features/Card/CardTypes';

type SetUp = {
  side?: CardSide;
};

const setUp = (props: SetUp) => {
  const { side = 'back' } = props;
  const card: CardType = {
    // src: `${process.env.PUBLIC_URL}/cards/palm.png`,
    src: `/cards/palm.png`,
    name: 'palm',
    side,
    matched: false,
    id: 'palm1',
    index: 1,
    freezed: false
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
    const { cardContainer } = setUp({});
    const cardBack = screen.getByAltText('card back');

    expect(cardContainer).toBeInTheDocument();
    expect(cardBack).toBeInTheDocument();
  });
  test('renders card front', () => {
    setUp({ side: 'front' });
    const cardFront = screen.getByAltText('card front');

    expect(cardFront).toBeInTheDocument();
  });
});
