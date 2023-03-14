import { combineReducers } from 'redux';
import doubleCardsReducer from '../features/DoubleCards/DoubleCardsReducer';

export const rootReducer = combineReducers({
  doubleCards: doubleCardsReducer
});

export type RootStateT = ReturnType<typeof rootReducer>;
