import { Reducer } from 'redux';
import { CardsDeck, CardSide, CardType } from '../Card/CardTypes';
import { DOUBLE_CARDS, GridSize, Boosters, BoosterTypes } from './DoubleCardsTypes';
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
  boosters: Boosters;
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
  gameFinished: false,
  boosters: {
    showAll: { type: 'showAll', value: 3, date: new Date() },
    showRaw: { type: 'showRaw', value: 5, date: new Date() }
  }
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
      const cardsDeck = setDeckCard({ cardsDeck: state.cardsDeck, card: action.payload.card });
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
    case DOUBLE_CARDS.SET_BOOSTER: {
      const boosterType: BoosterTypes = action.payload.booster.type;
      return {
        ...state,
        boosters: {
          ...state.boosters,
          [boosterType]: {
            ...state.boosters[boosterType],
            ...action.payload.booster
          }
        }
      };
    }
    case DOUBLE_CARDS.SHOW_ALL_CARDS: {
      const showAllCards = action.payload.showAll;
      const prevValue = state.boosters.showAll.value;
      const cardsDeck = state.cardsDeck.map((card) => {
        const side: CardSide = showAllCards ? 'front' : card.matched ? 'front' : 'back';

        return { ...card, side };
      });
      const showAll = {
        ...state.boosters.showAll,
        value: showAllCards ? prevValue - 1 : prevValue
      };

      return {
        ...state,
        cardsDeck,
        boosters: { ...state.boosters, showAll }
      };
    }
    default:
      return state;
  }
};

export default doubleCardsReducer;
