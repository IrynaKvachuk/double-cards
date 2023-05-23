import { Reducer } from 'redux';
import { OBSTACLES, ObstacleIF, ObstacleNameType } from './ObstaclesTypes';

export type ObstaclesState = {
  freeze: ObstacleIF;
  shuffle: ObstacleIF;
};

const initialState: ObstaclesState = {
  freeze: { type: 'freeze', fireCount: 3, useObstacle: false },
  shuffle: { type: 'shuffle', fireCount: 4, useObstacle: false }
};

const obstaclesReducer: Reducer<ObstaclesState> = (state = initialState, action) => {
  switch (action.type) {
    case OBSTACLES.SET_OBSTACLE: {
      const obstacleType: ObstacleNameType = action.payload.obstacle.type;
      const refreshedObstacle = { ...state[obstacleType], ...action.payload.obstacle };

      return {
        ...state,
        obstacle: refreshedObstacle
      };
    }
    default:
      return state;
  }
};

export default obstaclesReducer;
