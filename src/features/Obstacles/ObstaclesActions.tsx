import { OBSTACLES, ObstacleNameType, ObstaclesType } from './ObstaclesTypes';

export const toogleObstacle = (input: {
  type: ObstacleNameType;
  useObstacle: boolean;
}): ObstaclesType => ({
  type: OBSTACLES.SET_OBSTACLE,
  payload: { obstacleData: input }
});
