import { combineReducers } from 'redux';
import doubleCardsReducer from '../features/DoubleCards/DoubleCardsReducer';
import modalReducer from '../features/Modal/ModalReducer';

export const rootReducer = combineReducers({
  doubleCards: doubleCardsReducer,
  modal: modalReducer
});

export type RootStateT = ReturnType<typeof rootReducer>;
