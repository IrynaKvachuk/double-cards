import { Reducer } from 'redux';
import { OBSTACLES, ObstacleIF, ObstacleNameType } from './ObstaclesTypes';

export type ObstaclesState = {
  freeze: ObstacleIF;
  shuffle: ObstacleIF;
};

const initialState: ObstaclesState = {
  freeze: { type: 'freeze', fireCount: 3 },
  shuffle: { type: 'shuffle', fireCount: 4 }
};

const obstaclesReducer: Reducer<ObstaclesState> = (state = initialState, action) => {
  switch (action.type) {
    case OBSTACLES.RESET_OBSTACLES: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
};

export default obstaclesReducer;
