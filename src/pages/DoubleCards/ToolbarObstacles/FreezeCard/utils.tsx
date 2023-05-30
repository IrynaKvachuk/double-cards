import { freezeCard } from '../../../../features/DoubleCards/DoubleCardsActions';
import store from '../../../../store';

const freezeRandomCard = () => {
  const activeIndexes = store.getState().doubleCards.activeCardsIndexes;
  const cardToFreeze = activeIndexes[Math.floor(Math.random() * activeIndexes.length)];

  store.dispatch(freezeCard({ cardIndex: cardToFreeze, toFreeze: true }));
};

type SetFreezer = {
  freezeTimer: number;
};

export const setFreezer = (props: SetFreezer) => {
  const { freezeTimer } = props;

  if (freezeTimer === 1) {
    store.dispatch(freezeCard({ cardIndex: 0, toFreeze: false }));
  }
  if (freezeTimer === 0) freezeRandomCard();

  return;
};

export const reloadFreezer = () => {
  store.dispatch(freezeCard({ cardIndex: 0, toFreeze: false }));

  return;
};
