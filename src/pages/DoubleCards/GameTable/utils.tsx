import { CardsDeck, CardSide } from '../../../features/Card/CardTypes';
import store from '../../../store';

const cardsImages: { src: string; name: string }[] = [
  {
    src: `${process.env.PUBLIC_URL}/cards/eucaliptus.png`,
    name: 'eucaliptus'
  },
  { src: `${process.env.PUBLIC_URL}/cards/palm.png`, name: 'palm' },
  { src: `${process.env.PUBLIC_URL}/cards/bird.png`, name: 'bird' },
  {
    src: `${process.env.PUBLIC_URL}/cards/flower.png`,
    name: 'flower'
  },
  { src: `${process.env.PUBLIC_URL}/cards/sun.png`, name: 'sun' },
  { src: `${process.env.PUBLIC_URL}/cards/waves.png`, name: 'waves' },
  {
    src: `${process.env.PUBLIC_URL}/cards/umbrella.png`,
    name: 'umbrella'
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/drop.png`,
    name: 'drop'
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/spiral.png`,
    name: 'spiral'
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/triangle.png`,
    name: 'triangle'
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/squers.png`,
    name: 'squers'
  },
  {
    src: `${process.env.PUBLIC_URL}/cards/ballon.png`,
    name: 'ballon'
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
    .map((card, index) => {
      const side = 'back' as CardSide;
      return {
        ...card,
        id: card.src + index,
        index,
        side,
        matched: false,
        freezed: false
      };
    });

  return cardsDeck;
};
