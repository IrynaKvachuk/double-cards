import { BoosterIF } from '../../features/Boosters/BoosterTypes';
import { setBooster } from '../../features/Boosters/BoostersActions';
import { DispatchT, SetStateAction } from '../../features/_common/types';
import store from '../../store';

type BoosterClick = {
  event: React.MouseEvent<HTMLButtonElement>;
  boosterData: BoosterIF;
  setSelected: DispatchT<SetStateAction<boolean>>;
  callback: (boosterData: BoosterIF) => void;
};

export const boosterClick = (props: BoosterClick) => {
  const { event, boosterData, setSelected, callback } = props;
  const { value } = boosterData;
  const buttonEl = event.target as HTMLButtonElement;

  if (value) {
    setSelected(true);
    store.dispatch(
      setBooster({
        ...boosterData,
        value: boosterData.value - 1
      })
    );

    setTimeout(() => {
      setSelected(false);
      buttonEl.classList.remove('shake');
    }, 3000);
    return callback(boosterData);
  }
  if (!value) {
    buttonEl.classList.add('shake');

    setTimeout(() => {
      buttonEl.classList.remove('shake');
    }, 1000);
  }

  return;
};
