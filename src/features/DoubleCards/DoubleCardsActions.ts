import { CardsDeck, CardType } from '../Card/CardTypes';
import {
  DoubleCardsTypes,
  DOUBLE_CARDS_CLOSE_CARDS,
  DOUBLE_CARDS_SET_CARD_DATA,
  DOUBLE_CARDS_MATCH_CARDS,
  DOUBLE_CARDS_SET_CARDS_DECK,
  DOUBLE_CARDS_SET_TIME,
  DOUBLE_CARDS_CHOOSE_FIRST_CARD,
  DOUBLE_CARDS_CHOOSE_SECOND_CARD,
  DOUBLE_CARDS_DISABLE_ALL_CARDS
} from './DoubleCardsTypes';

export const setCardsDeck = (input: CardsDeck): DoubleCardsTypes => ({
  type: DOUBLE_CARDS_SET_CARDS_DECK,
  payload: { cardsDeck: input }
});

export const setCardData = (input: CardType): DoubleCardsTypes => ({
  type: DOUBLE_CARDS_SET_CARD_DATA,
  payload: { card: input }
});

export const setGameTime = (input: number): DoubleCardsTypes => ({
  type: DOUBLE_CARDS_SET_TIME,
  payload: { time: input }
});

export const chooseFirstCard = (input: CardType): DoubleCardsTypes => ({
  type: DOUBLE_CARDS_CHOOSE_FIRST_CARD,
  payload: { firstCard: input }
});

export const chooseSecondCard = (input: CardType): DoubleCardsTypes => ({
  type: DOUBLE_CARDS_CHOOSE_SECOND_CARD,
  payload: { secondCard: input }
});

export const closeCards = (): DoubleCardsTypes => ({
  type: DOUBLE_CARDS_CLOSE_CARDS
});

export const matchCards = (input: CardType): DoubleCardsTypes => ({
  type: DOUBLE_CARDS_MATCH_CARDS,
  payload: { cardToMatch: input }
});

export const disableAll = (input: boolean): DoubleCardsTypes => ({
  type: DOUBLE_CARDS_DISABLE_ALL_CARDS,
  payload: { disableAll: input }
});
