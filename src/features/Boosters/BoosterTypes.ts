export type BoosterNameType = 'showAll' | 'showRaw';

export enum BOOSTERS {
  SET_BOOSTER = 'DOUBLE_CARDS/SET_BOOSTER'
}

export interface Booster {
  type: BoosterNameType;
  value: number;
  date: Date | '';
}

interface SetBooster {
  type: typeof BOOSTERS.SET_BOOSTER;
  payload: { booster: Booster };
}

export type BoostersType = SetBooster;
