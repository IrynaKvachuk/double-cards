export type ObstacleNameType = 'freeze' | 'shuffle';

export enum OBSTACLES {
  SET_OBSTACLE = 'DOUBLE_CARDS/TOOGLE_OBSTACLE'
}

export interface ObstacleIF {
  type: ObstacleNameType;
  useObstacle: boolean;
  fireCount: number;
}

interface ToogleObstacle {
  type: typeof OBSTACLES.SET_OBSTACLE;
  payload: { obstacleData: { type: ObstacleNameType; useObstacle: boolean } };
}

export type ObstaclesType = ToogleObstacle;
