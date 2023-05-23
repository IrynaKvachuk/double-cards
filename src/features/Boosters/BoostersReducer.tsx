import { Reducer } from 'redux';
import { BOOSTERS, BoosterIF, BoosterNameType } from './BoosterTypes';
import { stringifyDataToLocalStorage, tryParseDataFromLocalStorage } from '../../utils';

export type BoostersState = {
  showAll: BoosterIF;
  showRaw: BoosterIF;
};

const initialState: BoostersState = {
  showAll: { type: 'showAll', value: 0, date: '' },
  showRaw: { type: 'showRaw', value: 0, date: '' }
};

const boostersReducer: Reducer<BoostersState> = (state = initialState, action) => {
  switch (action.type) {
    case BOOSTERS.INIT_BOOSTERS: {
      return {
        ...state,
        showAll: { type: 'showAll', value: 3, date: new Date() },
        showRaw: { type: 'showRaw', value: 4, date: new Date() }
      };
    }
    case BOOSTERS.SET_BOOSTER: {
      const boosterType: BoosterNameType = action.payload.booster.type;
      const refreshedBooster = { ...state[boosterType], ...action.payload.booster };
      const prevSavedBoosters = tryParseDataFromLocalStorage().boosters;

      stringifyDataToLocalStorage({
        boosters: { ...prevSavedBoosters, [boosterType]: refreshedBooster }
      });

      return {
        ...state,
        [boosterType]: refreshedBooster
      };
    }
    default:
      return state;
  }
};

export default boostersReducer;
