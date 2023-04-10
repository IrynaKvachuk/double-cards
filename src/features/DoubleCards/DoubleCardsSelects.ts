import { RootStateT } from '../../store/rootReducer';
import { CardsDeck, CardType } from '../Card/CardTypes';
import { Timer } from '../_common/types';
import { GridSize } from './DoubleCardsTypes';

export const selectGridSize = (state: RootStateT): GridSize => state.doubleCards.gridSize;

export const selectCardsDeck = (state: RootStateT): CardsDeck => state.doubleCards.cardsDeck;

export const selectGameTime = (state: RootStateT): Timer => state.doubleCards.time;

export const selectTurns = (state: RootStateT): number => state.doubleCards.turns;

export const selectFirstCard = (state: RootStateT): CardType | null => state.doubleCards.firstCard;

export const selectSecondCard = (state: RootStateT): CardType | null =>
  state.doubleCards.secondCard;

export const selectDisableAllCards = (state: RootStateT): boolean => state.doubleCards.disableAll;

export const selectGameFinished = (state: RootStateT): boolean => state.doubleCards.gameFinished;

export const selectGameReloaded = (state: RootStateT): number => state.doubleCards.gameReloaded;

export const selectShowAll = (state: RootStateT): number =>
  state.doubleCards.boosters.showAll.value;
