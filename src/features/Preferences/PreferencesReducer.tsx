import { Reducer } from 'redux';
import { Preferences, ThemeT } from './PreferencesTypes';
import { stringifyDataToLocalStorage, tryParseDataFromLocalStorage } from '../../utils';

type PreferencesState = {
  theme: ThemeT;
};

const initialState: PreferencesState = {
  theme: 'light'
};

const preferencesReducer: Reducer<PreferencesState> = (state = initialState, action) => {
  switch (action.type) {
    case Preferences.GET_PREFERENCES: {
      return {
        ...state,
        ...action.payload.preferences
      };
    }
    case Preferences.SET_PREFERENCE_ITEM: {
      const preference = action.payload.preference;
      const prevSavedPreferences = tryParseDataFromLocalStorage().preferences;

      stringifyDataToLocalStorage({
        preferences: { ...prevSavedPreferences, ...preference }
      });

      return {
        ...state,
        ...preference
      };
    }
    default:
      return state;
  }
};

export default preferencesReducer;
