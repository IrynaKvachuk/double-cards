import { CardsDeck, CardType } from '../Card/CardTypes';
import { Timer } from '../_common/types';

export const DOUBLE_CARDS_SET_GRID_SIZE = 'DOUBLE_CARDS/SET_GRID_SIZE';
export const DOUBLE_CARDS_SET_CARDS_DECK = 'DOUBLE_CARDS/SET_CARDS_DECK';
export const DOUBLE_CARDS_SET_CARD_DATA = 'DOUBLE_CARDS/SET_CARD_DATA';
export const DOUBLE_CARDS_SET_TIME = 'DOUBLE_CARDS/SET_TIME';
export const DOUBLE_CARDS_CHOOSE_FIRST_CARD = 'DOUBLE_CARDS/CHOOSE_FIRST_CARD';
export const DOUBLE_CARDS_CHOOSE_SECOND_CARD = 'DOUBLE_CARDS/CHOOSE_SECOND_CARD';
export const DOUBLE_CARDS_CLOSE_CARDS = 'DOUBLE_CARDS/CLEAR_CARD';
export const DOUBLE_CARDS_MATCH_CARDS = 'DOUBLE_CARDS/MATCH_CARDS';
export const DOUBLE_CARDS_DISABLE_ALL_CARDS = 'DOUBLE_CARDS/DISABLE_ALL_CARDS';

export type GridSize = {
  columnAmount: number;
  rowAmount: number;
};

interface SetGridSize {
  type: typeof DOUBLE_CARDS_SET_GRID_SIZE;
  payload: GridSize;
}

interface SetCardsDeck {
  type: typeof DOUBLE_CARDS_SET_CARDS_DECK;
  payload: { cardsDeck: CardsDeck };
}

interface SetCardData {
  type: typeof DOUBLE_CARDS_SET_CARD_DATA;
  payload: { card: CardType };
}

interface SetGameTime {
  type: typeof DOUBLE_CARDS_SET_TIME;
  payload: { time: Timer };
}

interface ChooseFirstCard {
  type: typeof DOUBLE_CARDS_CHOOSE_FIRST_CARD;
  payload: { firstCard: CardType };
}

interface ChooseSecondCard {
  type: typeof DOUBLE_CARDS_CHOOSE_SECOND_CARD;
  payload: { secondCard: CardType };
}

interface CloseCards {
  type: typeof DOUBLE_CARDS_CLOSE_CARDS;
}

interface MatchCards {
  type: typeof DOUBLE_CARDS_MATCH_CARDS;
  payload: { cardToMatch: CardType };
}

interface DisableAll {
  type: typeof DOUBLE_CARDS_DISABLE_ALL_CARDS;
  payload: { disableAll: boolean };
}

export type DoubleCardsTypes =
  | SetGridSize
  | SetCardsDeck
  | SetCardData
  | SetGameTime
  | ChooseFirstCard
  | ChooseSecondCard
  | CloseCards
  | MatchCards
  | DisableAll;
