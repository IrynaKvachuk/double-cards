import { combineReducers } from 'redux';
import doubleCardsReducer from '../features/DoubleCards/DoubleCardsReducer';
import modalReducer from '../features/Modal/ModalReducer';
import boostersReducer from '../features/Boosters/BoostersReducer';
import preferencesReducer from '../features/Preferences/PreferencesReducer';

export const rootReducer = combineReducers({
  doubleCards: doubleCardsReducer,
  boosters: boostersReducer,
  modal: modalReducer,
  preferences: preferencesReducer
});

export type RootStateT = ReturnType<typeof rootReducer>;
