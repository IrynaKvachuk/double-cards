import { CardType } from '../../features/Card/CardTypes';
import {
  chooseFirstCard,
  closeCards,
  disableAllCards,
  setCardData
} from '../../features/DoubleCards/DoubleCardsActions';
import store from '../../store';

// shake animation
const shakeCard = (element: HTMLImageElement) => {
  element.classList.add('shake');
  setTimeout(() => {
    element.classList.remove('shake');
  }, 500);
};

type OpenedCardClick = {
  event: React.MouseEvent<HTMLImageElement>;
};

export const openedCardClick = (props: OpenedCardClick) => {
  const { event } = props;
  const imgElement = event.target as HTMLImageElement;
  shakeCard(imgElement);
};

type MatchCards = {
  firstCard: CardType;
  secondCard: CardType;
};

export const matchCards = (props: MatchCards) => {
  const { firstCard, secondCard } = props;

  store.dispatch(disableAllCards(true));
  setTimeout(() => {
    const matched = firstCard.name === secondCard.name;
    const side = matched ? 'front' : 'back';

    store.dispatch(setCardData({ ...firstCard, side, matched }));
    store.dispatch(setCardData({ ...secondCard, side, matched }));

    // clear store values
    store.dispatch(closeCards());
    return;
  }, 700);
};

export type OpenCard = {
  card: CardType;
};

const openCard = (props: OpenCard) => {
  const { card } = props;
  const firstCard = store.getState().doubleCards.firstCard;
  const secondCard = store.getState().doubleCards.secondCard;

  store.dispatch(setCardData({ ...card, side: 'front' }));
  if (!firstCard) return store.dispatch(chooseFirstCard(card));
  if (!secondCard) matchCards({ firstCard, secondCard: card });
};

type ClosedCardClick = {
  event: React.MouseEvent<HTMLImageElement>;
  card: CardType;
  disabled: boolean;
};

export const closedCardClick = (props: ClosedCardClick) => {
  const { event, card, disabled } = props;
  const { freezed } = card;
  const imgElement = event.target as HTMLImageElement;

  if (disabled || freezed) return;

  openCard({ card });

  // flip animation
  imgElement.classList.add('flip');
  setTimeout(() => {
    imgElement.classList.remove('flip');
  }, 500);
};

type FrozenCardClick = {
  event: React.MouseEvent<HTMLImageElement>;
};

export const frozenCardClick = (props: FrozenCardClick) => {
  const { event } = props;
  const imgElement = event.target as HTMLImageElement;
  shakeCard(imgElement);
};
