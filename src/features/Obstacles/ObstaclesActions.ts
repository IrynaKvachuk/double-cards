import { OBSTACLES, ObstaclesType } from './ObstaclesTypes';

export const resetObstacles = (): ObstaclesType => ({
  type: OBSTACLES.RESET_OBSTACLES
});
