import { Reducer } from 'redux';
import { CardsDeck, CardSide, CardType } from '../Card/CardTypes';
import { DOUBLE_CARDS, GridSize } from './DoubleCardsTypes';
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

const doubleCardsReducer: Reducer<DoubleCardsState> = (state = initialState, action) => {
  switch (action.type) {
    case DOUBLE_CARDS.SET_GRID_SIZE:
      return {
        ...state,
        gameReloaded: state.gameReloaded + 1,
        gridSize: { columnAmount: action.payload.columnAmount, rowAmount: action.payload.rowAmount }
      };
    case DOUBLE_CARDS.SET_CARDS_DECK:
      return {
        ...initialState,
        gameReloaded: state.gameReloaded + 1,
        gridSize: { ...state.gridSize },
        cardsDeck: action.payload.cardsDeck
      };
    case DOUBLE_CARDS.SET_CARD_DATA: {
      const card = action.payload.card;
      const cardsDeck = state.cardsDeck.map((cardFromDeck: CardType) => {
        if (cardFromDeck.id === card.id) return card;
        return cardFromDeck;
      });
      const gameNotFinished = cardsDeck.some((card) => !card.matched);

      return {
        ...state,
        cardsDeck,
        gameFinished: !gameNotFinished
      };
    }
    case DOUBLE_CARDS.SET_TIME:
      return { ...state, time: action.payload.time };
    case DOUBLE_CARDS.CHOOSE_FIRST_CARD:
      return { ...state, firstCard: action.payload.firstCard };
    case DOUBLE_CARDS.CHOOSE_SECOND_CARD:
      return { ...state, secondCard: action.payload.secondCard, disableAll: true };
    case DOUBLE_CARDS.CLOSE_CARDS:
      return {
        ...state,
        firstCard: null,
        secondCard: null,
        turns: state.turns + 1,
        disableAll: false
      };
    case DOUBLE_CARDS.DISABLE_ALL_CARDS:
      return { ...state, disableAll: action.payload.disableAll };
    case DOUBLE_CARDS.SHOW_ALL_CARDS: {
      const showAllCards = action.payload.showAll;
      const cardsDeck = state.cardsDeck.map((card) => {
        const side: CardSide = showAllCards ? 'front' : card.matched ? 'front' : 'back';
        return { ...card, side };
      });

      return {
        ...state,
        disableAll: false,
        cardsDeck
      };
    }
    default:
      return state;
  }
};

export default doubleCardsReducer;
