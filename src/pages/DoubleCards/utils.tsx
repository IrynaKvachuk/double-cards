import {
  setBooster,
  setCardsDeck,
  setGridSize
} from '../../features/DoubleCards/DoubleCardsActions';
import { Booster } from '../../features/DoubleCards/DoubleCardsTypes';
import { openModal } from '../../features/Modal/ModalActions';
import store from '../../store';
import { tryParseDataFromLocalStorage } from '../../utils';
import { shuffleCards } from './GameTable/utils';

export const getPrevSettings = () => {
  const localStorageData = tryParseDataFromLocalStorage();
  const { gridSize = {}, boosters } = localStorageData;

  if (Object.keys(gridSize).length) store.dispatch(setGridSize(gridSize));
  if (boosters) {
    for (const [key, value] of Object.entries(boosters)) {
      const booster = value as Booster;
      store.dispatch(setBooster(booster));
    }
  }
};

export const reloadGame = () => {
  const newCards = shuffleCards();
  store.dispatch(setCardsDeck(newCards));
  store.dispatch(openModal('none'));
};
