import * as ReactDOM from 'react-dom';
import Card from '.';
import { CardType } from '../../features/Card/CardTypes';

describe('Card', () => {
  const { render } = ReactDOM;
  let container: HTMLDivElement;
  const card: CardType = {
    // src: `${process.env.PUBLIC_URL}/cards/palm.png`,
    src: `/cards/palm.png`,
    name: 'palm',
    side: 'back',
    matched: false,
    id: 'palm1'
  };
  const cardProps = {
    card,
    disabled: false,
    openCard: () => {}
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    // render(<Card {...cardProps} />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
});
