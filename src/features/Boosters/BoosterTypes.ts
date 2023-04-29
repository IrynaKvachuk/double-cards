export type BoosterNameType = 'showAll' | 'showRaw';

export enum BOOSTERS {
  SET_BOOSTER = 'DOUBLE_CARDS/SET_BOOSTER',
  INIT_BOOSTERS = 'DOUBLE_CARDS/INIT_BOOSTERS'
}

export interface BoosterIF {
  type: BoosterNameType;
  value: number;
  date: Date | '';
}

interface SetBooster {
  type: typeof BOOSTERS.SET_BOOSTER;
  payload: { booster: BoosterIF };
}
interface InitBoosters {
  type: typeof BOOSTERS.INIT_BOOSTERS;
}

export type BoostersType = SetBooster | InitBoosters;
