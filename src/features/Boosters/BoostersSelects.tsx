import { RootStateT } from '../../store/rootReducer';
import { BoosterIF } from './BoosterTypes';

export const selectShowAllBooster = (state: RootStateT): BoosterIF => state.boosters.showAll;
