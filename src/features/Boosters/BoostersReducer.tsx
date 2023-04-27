import { Reducer } from 'redux';
import { BOOSTERS, Booster, BoosterNameType } from './BoosterTypes';
import { stringifyDataToLocalStorage, tryParseDataFromLocalStorage } from '../../utils';

export type DoubleCardsState = {
  showAll: Booster;
  showRaw: Booster;
};

const initialState: DoubleCardsState = {
  showAll: { type: 'showAll', value: 0, date: '' },
  showRaw: { type: 'showRaw', value: 0, date: '' }
};

const boostersReducer: Reducer<DoubleCardsState> = (state = initialState, action) => {
  switch (action.type) {
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
