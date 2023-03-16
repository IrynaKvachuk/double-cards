import { RootStateT } from '../../store/rootReducer';
import { CardsDeck, CardType } from '../Card/CardTypes';

export const selectCardsDeck = (state: RootStateT): CardsDeck => state.doubleCards.cardsDeck;

export const selectTurns = (state: RootStateT): number => state.doubleCards.turns;

export const selectFirstCard = (state: RootStateT): CardType | null => state.doubleCards.firstCard;

export const selectSecondCard = (state: RootStateT): CardType | null =>
  state.doubleCards.secondCard;

export const selectDisableAllCards = (state: RootStateT): boolean => state.doubleCards.disableAll;

export const selectGameFinished = (state: RootStateT): boolean => state.doubleCards.gameFinished;
