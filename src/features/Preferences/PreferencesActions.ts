import { Preferences, PreferencesIF, PreferencesType, ThemeT } from './PreferencesTypes';

export const getPreferences = (input: PreferencesIF): PreferencesType => ({
  type: Preferences.GET_PREFERENCES,
  payload: { preferences: input }
});

export const setPreferenceItem = (input: { theme: ThemeT }): PreferencesType => ({
  type: Preferences.SET_PREFERENCE_ITEM,
  payload: { preference: input }
});
