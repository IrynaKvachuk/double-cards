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
  {
    src: `${process.env.PUBLIC_URL}/cards/eucaliptus.png`,
    name: 'eucaliptus',
    side: 'back',
    matched: false
  },
  { src: `${process.env.PUBLIC_URL}/cards/palm.png`, name: 'palm', side: 'back', matched: false },
  { src: `${process.env.PUBLIC_URL}/cards/bird.png`, name: 'bird', side: 'back', matched: false },
  // { src: '/cards/spiral.png', name: 'spiral', side: 'back', matched: false },
  // { src: '/cards/squers.png', name: 'squers', side: 'back', matched: false },
  {
    src: `${process.env.PUBLIC_URL}/cards/flower.png`,
    name: 'flower',
    side: 'back',
    matched: false
  },
  { src: `${process.env.PUBLIC_URL}/cards/sun.png`, name: 'sun', side: 'back', matched: false },
  { src: `${process.env.PUBLIC_URL}/cards/waves.png`, name: 'waves', side: 'back', matched: false }
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
