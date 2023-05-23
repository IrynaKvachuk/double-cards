import { RootStateT } from '../../store/rootReducer';
import { ObstacleIF } from './ObstaclesTypes';

export const selectFreezeObstacle = (state: RootStateT): ObstacleIF => state.obstacles.freeze;

export const selectShuffleObstacle = (state: RootStateT): ObstacleIF => state.obstacles.shuffle;
