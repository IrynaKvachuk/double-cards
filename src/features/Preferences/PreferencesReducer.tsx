import { Reducer } from 'redux';
import { Preferences, ThemeT } from './PreferencesTypes';

type PreferencesState = {
  theme: ThemeT;
};

const initialState: PreferencesState = {
  theme: 'light'
};

const preferencesReducer: Reducer<PreferencesState> = (state = initialState, action) => {
  switch (action.type) {
    case Preferences.SET_THEME: {
      return {
        ...state,
        theme: action.payload.theme
      };
    }
    default:
      return state;
  }
};

export default preferencesReducer;
