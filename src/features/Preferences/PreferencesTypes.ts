export type ThemeT = 'light' | 'dark';

export interface PreferencesIF {
  theme: ThemeT;
}

export enum Preferences {
  GET_PREFERENCES = 'DOUBLE_CARDS/GET_PREFERENCES',
  SET_PREFERENCE_ITEM = 'DOUBLE_CARDS/SET_PREFERENCE_ITEM'
}

interface GetPreferences {
  type: typeof Preferences.GET_PREFERENCES;
  payload: { preferences: PreferencesIF };
}

interface SetPreferences {
  type: typeof Preferences.SET_PREFERENCE_ITEM;
  payload: { preference: { theme: ThemeT } };
}

export type PreferencesType = GetPreferences | SetPreferences;
