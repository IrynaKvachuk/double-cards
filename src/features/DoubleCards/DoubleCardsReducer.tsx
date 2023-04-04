import { Reducer } from 'redux';
import { CardsDeck, CardType } from '../Card/CardTypes';
import {
  DOUBLE_CARDS_SET_TIME,
  DOUBLE_CARDS_CHOOSE_FIRST_CARD,
  DOUBLE_CARDS_CHOOSE_SECOND_CARD,
  DOUBLE_CARDS_CLOSE_CARDS,
  DOUBLE_CARDS_DISABLE_ALL_CARDS,
  DOUBLE_CARDS_SET_CARDS_DECK,
  DOUBLE_CARDS_SET_CARD_DATA,
  DOUBLE_CARDS_SET_GRID_SIZE,
  GridSize
} from './DoubleCardsTypes';
import { Timer } from '../_common/types';
import { initTimerValues } from '../_common/initValues';

export type DoubleCardsState = {
  gridSize: GridSize;
  cardsDeck: CardsDeck;
  firstCard: CardType | null;
  secondCard: CardType | null;
  time: Timer;
  turns: number;
  disableAll: boolean;
  gameReloaded: number;
  gameFinished: boolean;
};

const initialState: DoubleCardsState = {
  gridSize: { columnAmount: 2, rowAmount: 2 },
  cardsDeck: [],
  firstCard: null,
  secondCard: null,
  time: initTimerValues,
  turns: 0,
  disableAll: false,
  gameReloaded: 0,
  gameFinished: false
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
    case DOUBLE_CARDS_SET_GRID_SIZE:
      return {
        ...state,
        gameReloaded: state.gameReloaded + 1,
        gridSize: { columnAmount: action.payload.columnAmount, rowAmount: action.payload.rowAmount }
      };
    case DOUBLE_CARDS_SET_CARDS_DECK:
      return {
        ...initialState,
        gameReloaded: state.gameReloaded + 1,
        gridSize: { ...state.gridSize },
        cardsDeck: action.payload.cardsDeck
      };
    case DOUBLE_CARDS_SET_CARD_DATA: {
      const cardsDeck = setDeckCard({ cardsDeck: state.cardsDeck, card: action.payload.card });
      const gameNotFinished = cardsDeck.some((card) => !card.matched);

      return {
        ...state,
        cardsDeck,
        gameFinished: !gameNotFinished
      };
    }
    case DOUBLE_CARDS_SET_TIME:
      return { ...state, time: action.payload.time };
    case DOUBLE_CARDS_CHOOSE_FIRST_CARD:
      return { ...state, firstCard: action.payload.firstCard };
    case DOUBLE_CARDS_CHOOSE_SECOND_CARD:
      return { ...state, secondCard: action.payload.secondCard, disableAll: true };
    case DOUBLE_CARDS_CLOSE_CARDS:
      return {
        ...state,
        firstCard: null,
        secondCard: null,
        turns: state.turns + 1,
        disableAll: false
      };
    case DOUBLE_CARDS_DISABLE_ALL_CARDS:
      return { ...state, disableAll: action.payload.disableAll };
    default:
      return state;
  }
};

export default doubleCardsReducer;
