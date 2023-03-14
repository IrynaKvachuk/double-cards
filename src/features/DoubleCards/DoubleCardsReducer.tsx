import { Reducer } from 'redux';
import { CardsDeck, CardType } from '../Card/CardTypes';
import {
  DOUBLE_CARDS_CHOOSE_FIRST_CARD,
  DOUBLE_CARDS_CHOOSE_SECOND_CARD,
  DOUBLE_CARDS_CLOSE_CARDS,
  DOUBLE_CARDS_SET_CARDS_DECK,
  DOUBLE_CARDS_SET_CARD_DATA
} from './DoubleCardsTypes';

export type DoubleCardsState = {
  cardsDeck: CardsDeck;
  firstCard: CardType | null;
  secondCard: CardType | null;
  turns: number;
};

const initialState: DoubleCardsState = {
  cardsDeck: [],
  firstCard: null,
  secondCard: null,
  turns: 0
};

type SetDeckCard = {
  cardsDeck: CardsDeck;
  card: CardType;
};

const setDeckCard = (props: SetDeckCard) => {
  const { cardsDeck, card } = props;
  return cardsDeck.map((cardFromDeck: CardType) => {
    if (cardFromDeck.id === card.id) return card;
    return cardFromDeck;
  });
};

const doubleCardsReducer: Reducer<DoubleCardsState> = (state = initialState, action) => {
  switch (action.type) {
    case DOUBLE_CARDS_SET_CARDS_DECK:
      return { ...initialState, cardsDeck: action.payload.cardsDeck };
    case DOUBLE_CARDS_SET_CARD_DATA:
      return {
        ...state,
        cardsDeck: setDeckCard({ cardsDeck: state.cardsDeck, card: action.payload.card })
      };
    case DOUBLE_CARDS_CHOOSE_FIRST_CARD:
      return { ...state, firstCard: action.payload.firstCard };
    case DOUBLE_CARDS_CHOOSE_SECOND_CARD:
      return { ...state, secondCard: action.payload.secondCard };
    case DOUBLE_CARDS_CLOSE_CARDS:
      return { ...state, firstCard: null, secondCard: null, turns: state.turns + 1 };
    default:
      return state;
  }
};

export default doubleCardsReducer;
