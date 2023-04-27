import { RootStateT } from '../../store/rootReducer';
import { Booster } from './BoosterTypes';

export const selectShowAll = (state: RootStateT): Booster => state.boosters.showAll;
