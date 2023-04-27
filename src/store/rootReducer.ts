import { combineReducers } from 'redux';
import doubleCardsReducer from '../features/DoubleCards/DoubleCardsReducer';
import modalReducer from '../features/Modal/ModalReducer';
import boostersReducer from '../features/Boosters/BoostersReducer';

export const rootReducer = combineReducers({
  doubleCards: doubleCardsReducer,
  boosters: boostersReducer,
  modal: modalReducer
});

export type RootStateT = ReturnType<typeof rootReducer>;
