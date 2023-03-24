import { CardsDeck, CardSide, CardType } from '../../features/Card/CardTypes';
import {
  chooseFirstCard,
  chooseSecondCard,
  closeCards,
  setCardData,
  setCardsDeck
} from '../../features/DoubleCards/DoubleCardsActions';
import { openModal } from '../../features/Modal/ModalActions';
import store from '../../store';

const cardsImages: { src: string; name: string; side: CardSide; matched: false }[] = [
  { src: '/cards/helmet-1.png', name: 'helmet', side: 'back', matched: false },
  { src: '/cards/potion-1.png', name: 'potion', side: 'back', matched: false },
  { src: '/cards/ring-1.png', name: 'ring', side: 'back', matched: false },
  { src: '/cards/scroll-1.png', name: 'scroll', side: 'back', matched: false },
  { src: '/cards/shield-1.png', name: 'shield', side: 'back', matched: false },
  { src: '/cards/sword-1.png', name: 'sword', side: 'back', matched: false }
];

export const shuffleCards = (): CardsDeck => {
  const cardsDeck = [...cardsImages, ...cardsImages]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({ ...card, id: card.src + index }));

  return cardsDeck;
};

export type DoubleCardsTurnCard = {
  card: CardType;
};

export const openCard = (props: DoubleCardsTurnCard) => {
  const { card } = props;
  const firstCard = store.getState().doubleCards.firstCard;
  const secondCard = store.getState().doubleCards.secondCard;

  store.dispatch(setCardData({ ...card, side: 'front' }));
  if (!firstCard) return store.dispatch(chooseFirstCard(card));
  if (!secondCard) return store.dispatch(chooseSecondCard(card));
};

export const matchCards = () => {
  setTimeout(() => {
    const firstCard = store.getState().doubleCards.firstCard;
    const secondCard = store.getState().doubleCards.secondCard;
    if (!firstCard || !secondCard) return;

    const isMatched = firstCard.name === secondCard.name;
    const side = isMatched ? 'front' : 'back';

    store.dispatch(setCardData({ ...firstCard, side, matched: isMatched }));
    store.dispatch(setCardData({ ...secondCard, side, matched: isMatched }));

    // clear store values
    store.dispatch(closeCards());

    return;
  }, 700);
};

export const reloadGame = () => {
  const newCards = shuffleCards();
  store.dispatch(setCardsDeck(newCards));
  store.dispatch(openModal('none'));
};
