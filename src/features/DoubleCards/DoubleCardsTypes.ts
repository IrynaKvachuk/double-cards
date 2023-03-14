import { CardsDeck, CardType } from '../Card/CardTypes';

export const DOUBLE_CARDS_SET_CARDS_DECK = 'DOUBLE_CARDS/SET_CARDS_DECK';
export const DOUBLE_CARDS_SET_CARD_DATA = 'DOUBLE_CARDS/SET_CARD_DATA';
export const DOUBLE_CARDS_CHOOSE_FIRST_CARD = 'DOUBLE_CARDS/CHOOSE_FIRST_CARD';
export const DOUBLE_CARDS_CHOOSE_SECOND_CARD = 'DOUBLE_CARDS/CHOOSE_SECOND_CARD';
export const DOUBLE_CARDS_CLOSE_CARDS = 'DOUBLE_CARDS/CLEAR_CARD';
export const DOUBLE_CARDS_MATCH_CARDS = 'DOUBLE_CARDS/MATCH_CARDS';

interface SetCardsDeck {
  type: typeof DOUBLE_CARDS_SET_CARDS_DECK;
  payload: { cardsDeck: CardsDeck };
}

interface SetCardData {
  type: typeof DOUBLE_CARDS_SET_CARD_DATA;
  payload: { card: CardType };
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

export type DoubleCardsTypes =
  | SetCardsDeck
  | SetCardData
  | ChooseFirstCard
  | ChooseSecondCard
  | CloseCards
  | MatchCards;
