import { RootStateT } from '../../store/rootReducer';
import { ThemeT } from './PreferencesTypes';

export const selectTheme = (state: RootStateT): ThemeT => state.preferences.theme;
