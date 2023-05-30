export type ObstacleNameType = 'freeze' | 'shuffle';

export enum OBSTACLES {
  RESET_OBSTACLES = 'DOUBLE_CARDS/RESET_OBSTACLES'
}

export interface ObstacleIF {
  type: ObstacleNameType;
  fireCount: number;
}

interface ResetObstacles {
  type: typeof OBSTACLES.RESET_OBSTACLES;
}

export type ObstaclesType = ResetObstacles;
