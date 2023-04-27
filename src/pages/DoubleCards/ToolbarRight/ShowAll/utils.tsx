import { Booster } from '../../../../features/Boosters/BoosterTypes';
import { setBooster } from '../../../../features/Boosters/BoostersActions';
import { showAllCards } from '../../../../features/DoubleCards/DoubleCardsActions';
import { Dispatch, SetStateAction } from '../../../../features/_common/types';
import store from '../../../../store';

type TurnAllCards = {
  showAllData: Booster;
  setSelected: Dispatch<SetStateAction<boolean>>;
};

const turnAllCards = (props: TurnAllCards) => {
  const { setSelected, showAllData } = props;
  setSelected(true);
  store.dispatch(
    setBooster({
      ...showAllData,
      value: showAllData.value - 1
    })
  );
  store.dispatch(showAllCards(true));

  setTimeout(() => {
    store.dispatch(showAllCards(false));
    setSelected(false);
  }, 3000);
};

type ShowAll = {
  event: React.MouseEvent<HTMLButtonElement>;
  showAllData: Booster;
  setSelected: Dispatch<SetStateAction<boolean>>;
};

export const showAll = (props: ShowAll) => {
  const { event, showAllData, setSelected } = props;
  const { value } = showAllData;
  const buttonEl = event.target as HTMLButtonElement;

  if (value) return turnAllCards({ showAllData, setSelected });
  if (!value) {
    buttonEl.classList.add('shake');

    setTimeout(() => {
      buttonEl.classList.remove('shake');
    }, 1000);
  }

  return;
};
