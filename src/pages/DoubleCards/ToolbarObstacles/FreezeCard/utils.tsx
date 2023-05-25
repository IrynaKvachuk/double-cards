import { freezeCard } from '../../../../features/DoubleCards/DoubleCardsActions';
import { DispatchT, SetStateAction } from '../../../../features/_common/types';
import store from '../../../../store';

type DisableFreezer = {
  setStopFreezing: DispatchT<SetStateAction<boolean>>;
};

const disableFreezer = (props: DisableFreezer) => {
  const { setStopFreezing } = props;
  const cardsDeck = store.getState().doubleCards.cardsDeck;
  const matchedCardsCount = store.getState().doubleCards.matchedCardsCount;
  const disabled = cardsDeck.length - matchedCardsCount <= 4;

  setStopFreezing(disabled);

  return disabled;
};

const freezeRandomCard = () => {
  const activeIndexes = store.getState().doubleCards.activeCardsIndexes;
  const cardToFreeze = activeIndexes[Math.floor(Math.random() * activeIndexes.length)];

  store.dispatch(freezeCard({ cardIndex: cardToFreeze, toFreeze: true }));
};

type SetFreezer = {
  // obstacleElRef: React.RefObject<HTMLSpanElement>;
  freezeTimer: number;
  createObstacle: boolean;
  setStopFreezing: DispatchT<SetStateAction<boolean>>;
  setFreezeTimer: DispatchT<SetStateAction<number>>;
};

export const setFreezer = (props: SetFreezer) => {
  const { freezeTimer, setStopFreezing, setFreezeTimer } = props;
  const stopFreezing = disableFreezer({ setStopFreezing });
  // const obstacleEl = obstacleElRef?.current as HTMLSpanElement;

  if (freezeTimer === 2) {
    // setPulseAnimation({ obstacleEl, visible: true });
    store.dispatch(freezeCard({ cardIndex: 0, toFreeze: false }));
  }

  if (stopFreezing) return store.dispatch(freezeCard({ cardIndex: 0, toFreeze: false }));

  if (freezeTimer === 1) {
    // setPulseAnimation({ obstacleEl, visible: false });
    freezeRandomCard();
    setFreezeTimer(0);
    return setTimeout(() => setFreezeTimer(3), 500);
  }

  setFreezeTimer((preValue) => preValue - 1);
  return;
};

type ReloadFreezer = {
  setStopFreezing: DispatchT<SetStateAction<boolean>>;
  setCreateObstacle: DispatchT<SetStateAction<boolean>>;
  setFreezeTimer: DispatchT<SetStateAction<number>>;
};

export const reloadFreezer = (props: ReloadFreezer) => {
  const { setStopFreezing, setCreateObstacle, setFreezeTimer } = props;
  setStopFreezing(false);
  setCreateObstacle(true);
  setFreezeTimer(3);
  store.dispatch(freezeCard({ cardIndex: 0, toFreeze: false }));

  return;
};
