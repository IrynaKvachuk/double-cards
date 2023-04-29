import { BOOSTERS, BoosterIF, BoostersType } from './BoosterTypes';

export const setBooster = (input: BoosterIF): BoostersType => ({
  type: BOOSTERS.SET_BOOSTER,
  payload: { booster: input }
});

export const initBoosters = (): BoostersType => ({
  type: BOOSTERS.INIT_BOOSTERS
});
