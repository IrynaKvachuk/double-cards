import { CardsDeck, CardType } from '../Card/CardTypes';
import { Timer } from '../_common/types';
import { DoubleCardsTypes, DOUBLE_CARDS, GridSize, UsedObstacle } from './DoubleCardsTypes';

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

export const setNoTurnReload = (input: boolean): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SET_NO_TURN_RELOAD,
  payload: { noTurnReload: input }
});

export const freezeCard = (input: { cardIndex: number; toFreeze: boolean }): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.FREEZE_CARD,
  payload: { ...input }
});

export const shuffleCards = (input: CardsDeck): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SHUFFLE_CARDS,
  payload: { cardsDeck: input }
});

export const showAllCards = (input: boolean): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SHOW_ALL_CARDS,
  payload: { showAll: input }
});

export const setObstacle = (input: UsedObstacle): DoubleCardsTypes => ({
  type: DOUBLE_CARDS.SET_OBSTACLE,
  payload: { obstacleName: input }
});
