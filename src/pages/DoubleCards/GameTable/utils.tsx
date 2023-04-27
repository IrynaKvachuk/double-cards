import { CardsDeck, CardSide } from '../../../features/Card/CardTypes';
import store from '../../../store';

const cardsImages: { src: string; name: string; side: CardSide; matched: false }[] = [
  {
    src: `${process.env.PUBLIC_URL}/cards/eucaliptus.png`,
    name: 'eucaliptus',
    side: 'back',
    matched: false
  },
  { src: `${process.env.PUBLIC_URL}/cards/palm.png`, name: 'palm', side: 'back', matched: false },
  { src: `${process.env.PUBLIC_URL}/cards/bird.png`, name: 'bird', side: 'back', matched: false },
  {
    src: `${process.env.PUBLIC_URL}/cards/flower.png`,
    name: 'flower',
    side: 'back',
    matched: false
  },
  { src: `${process.env.PUBLIC_URL}/cards/sun.png`, name: 'sun', side: 'back', matched: false },
  { src: `${process.env.PUBLIC_URL}/cards/waves.png`, name: 'waves', side: 'back', matched: false },
  {
    src: `${process.env.PUBLIC_URL}/cards/umbrella.png`,
    name: 'umbrella',
    side: 'back',
    matched: false
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/drop.png`,
    name: 'drop',
    side: 'back',
    matched: false
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/spiral.png`,
    name: 'spiral',
    side: 'back',
    matched: false
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/triangle.png`,
    name: 'triangle',
    side: 'back',
    matched: false
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/squers.png`,
    name: 'squers',
    side: 'back',
    matched: false
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/ballon.png`,
    name: 'ballon',
    side: 'back',
    matched: false
  }
];

export const shuffleCards = (): CardsDeck => {
  const gridSize = store.getState().doubleCards.gridSize;
  const uniqueCards = [...cardsImages];
  const { columnAmount, rowAmount } = gridSize;

  const cardAmount = (columnAmount * rowAmount) / 2;
  uniqueCards.splice(cardAmount);

  const cardsDeck = [...uniqueCards, ...uniqueCards]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({ ...card, id: card.src + index }));

  return cardsDeck;
};
