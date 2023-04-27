import { CardType } from '../../features/Card/CardTypes';
import {
  chooseFirstCard,
  chooseSecondCard,
  setCardData
} from '../../features/DoubleCards/DoubleCardsActions';
import store from '../../store';

type OpenedCardClick = {
  event: React.MouseEvent<HTMLImageElement>;
};

export const openedCardClick = (props: OpenedCardClick) => {
  const { event } = props;
  const imgElement = event.target as HTMLImageElement;

  // shake animation
  imgElement.classList.add('shake');
  setTimeout(() => {
    imgElement.classList.remove('shake');
  }, 500);
};

export type DoubleCardsTurnCard = {
  card: CardType;
};

const openCard = (props: DoubleCardsTurnCard) => {
  const { card } = props;
  const firstCard = store.getState().doubleCards.firstCard;
  const secondCard = store.getState().doubleCards.secondCard;

  store.dispatch(setCardData({ ...card, side: 'front' }));
  if (!firstCard) return store.dispatch(chooseFirstCard(card));
  if (!secondCard) return store.dispatch(chooseSecondCard(card));
};

type ClosedCardClick = {
  event: React.MouseEvent<HTMLImageElement>;
  card: CardType;
  disabled: boolean;
};

export const closedCardClick = (props: ClosedCardClick) => {
  const { event, card, disabled } = props;
  if (disabled) return;

  const imgElement = event.target as HTMLImageElement;

  openCard({ card });

  // flip animation
  imgElement.classList.add('flip');
  setTimeout(() => {
    imgElement.classList.remove('flip');
  }, 500);
};
