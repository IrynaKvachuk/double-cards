import { CardsDeck, CardType } from '../Card/CardTypes';
import { Timer } from '../_common/types';
import { DoubleCardsTypes, DOUBLE_CARDS, GridSize, Booster } from './DoubleCardsTypes';

export const setGridSize = (input: GridSize): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SET_GRID_SIZE,
  payload: input
});

export const setCardsDeck = (input: CardsDeck): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SET_CARDS_DECK,
  payload: { cardsDeck: input }
});

export const setCardData = (input: CardType): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SET_CARD_DATA,
  payload: { card: input }
});

export const setGameTime = (input: Timer): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SET_TIME,
  payload: { time: input }
});

export const chooseFirstCard = (input: CardType): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.CHOOSE_FIRST_CARD,
  payload: { firstCard: input }
});

export const chooseSecondCard = (input: CardType): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.CHOOSE_SECOND_CARD,
  payload: { secondCard: input }
});

export const closeCards = (): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.CLOSE_CARDS
});

export const matchCards = (input: CardType): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.MATCH_CARDS,
  payload: { cardToMatch: input }
});

export const disableAllCards = (input: boolean): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.DISABLE_ALL_CARDS,
  payload: { disableAll: input }
});

export const setBooster = (input: Booster): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SET_BOOSTER,
  payload: { booster: input }
});

export const showAllCards = (input: boolean): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SHOW_ALL_CARDS,
  payload: { showAll: input }
});
