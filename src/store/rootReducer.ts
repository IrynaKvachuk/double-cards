import { combineReducers } from 'redux';
// import currencyCounterReducer from '../features/currencyCounter/currencyCounterReducer';

export const rootReducer = combineReducers({
  // currencyList: currencyListReducer,
});

export type RootStateT = ReturnType<typeof rootReducer>;
