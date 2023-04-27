import { CardsDeck, CardType } from '../Card/CardTypes';
import { Timer } from '../_common/types';

export enum DOUBLE_CARDS {
  SET_GRID_SIZE = 'DOUBLE_CARDS/SET_GRID_SIZE',
  SET_CARDS_DECK = 'DOUBLE_CARDS/SET_CARDS_DECK',
  SET_CARD_DATA = 'DOUBLE_CARDS/SET_CARD_DATA',
  SET_TIME = 'DOUBLE_CARDS/SET_TIME',
  CHOOSE_FIRST_CARD = 'DOUBLE_CARDS/CHOOSE_FIRST_CARD',
  CHOOSE_SECOND_CARD = 'DOUBLE_CARDS/CHOOSE_SECOND_CARD',
  CLOSE_CARDS = 'DOUBLE_CARDS/CLEAR_CARD',
  MATCH_CARDS = 'DOUBLE_CARDS/MATCH_CARDS',
  DISABLE_ALL_CARDS = 'DOUBLE_CARDS/DISABLE_ALL_CARDS',
  SET_BOOSTER = 'DOUBLE_CARDS/SET_BOOSTER',
  SHOW_ALL_CARDS = 'DOUBLE_CARDS/SHOW_ALL_CARDS'
}

export type GridSize = {
  columnAmount: number;
  rowAmount: number;
};

interface SetGridSize {
  type: typeof DOUBLE_CARDS.SET_GRID_SIZE;
  payload: GridSize;
}

interface SetCardsDeck {
  type: typeof DOUBLE_CARDS.SET_CARDS_DECK;
  payload: { cardsDeck: CardsDeck };
}

interface SetCardData {
  type: typeof DOUBLE_CARDS.SET_CARD_DATA;
  payload: { card: CardType };
}

interface SetGameTime {
  type: typeof DOUBLE_CARDS.SET_TIME;
  payload: { time: Timer };
}

interface ChooseFirstCard {
  type: typeof DOUBLE_CARDS.CHOOSE_FIRST_CARD;
  payload: { firstCard: CardType };
}

interface ChooseSecondCard {
  type: typeof DOUBLE_CARDS.CHOOSE_SECOND_CARD;
  payload: { secondCard: CardType };
}

interface CloseCards {
  type: typeof DOUBLE_CARDS.CLOSE_CARDS;
}

interface MatchCards {
  type: typeof DOUBLE_CARDS.MATCH_CARDS;
  payload: { cardToMatch: CardType };
}

interface DisableAllCards {
  type: typeof DOUBLE_CARDS.DISABLE_ALL_CARDS;
  payload: { disableAll: boolean };
}

interface ShowAllCards {
  type: typeof DOUBLE_CARDS.SHOW_ALL_CARDS;
  payload: { showAll: boolean };
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
  | DisableAllCards
  | ShowAllCards;
