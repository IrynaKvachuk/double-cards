import { BoosterIF } from '../../../../features/Boosters/BoosterTypes';
import { showAllCards } from '../../../../features/DoubleCards/DoubleCardsActions';
import store from '../../../../store';

export const turnAllCards = (boosterData: BoosterIF) => {
  store.dispatch(showAllCards(true));

  setTimeout(() => {
    store.dispatch(showAllCards(false));
  }, 3000);
};
