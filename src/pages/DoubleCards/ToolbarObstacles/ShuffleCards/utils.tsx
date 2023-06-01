import { CardsDeck } from '../../../../features/Card/CardTypes';
import { shuffleCards } from '../../../../features/DoubleCards/DoubleCardsActions';
import store from '../../../../store';

const shuffleDeck = (): CardsDeck => {
  const array = store.getState().doubleCards.cardsDeck;
  return array.sort(() => Math.random() - 0.5);
};

const addShuffleAnimation = () => {
  const cardsDeckEl = document.querySelector('.double-cards_game-table');
  if (!cardsDeckEl) return;

  cardsDeckEl.classList.add('shuffled');
  setTimeout(() => {
    cardsDeckEl.classList.remove('shuffled');
  }, 1600);

  return;
};

type SetShuffle = {
  shuffleTimer: number;
};

export const setShuffle = (props: SetShuffle) => {
  const { shuffleTimer } = props;

  if (shuffleTimer !== 0) return;

  addShuffleAnimation();
  store.dispatch(shuffleCards(shuffleDeck()));

  return;
};
