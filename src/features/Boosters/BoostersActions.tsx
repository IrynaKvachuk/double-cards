import { BOOSTERS, Booster, BoostersType } from './BoosterTypes';

export const setBooster = (input: Booster): BoostersType => ({
  type: BOOSTERS.SET_BOOSTER,
  payload: { booster: input }
});
