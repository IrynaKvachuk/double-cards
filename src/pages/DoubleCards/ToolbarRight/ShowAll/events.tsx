import { showAllCards } from '../../../../features/DoubleCards/DoubleCardsActions';
import { Dispatch, SetStateAction } from '../../../../features/_common/types';
import store from '../../../../store';

type ShowAll = {
  event: React.MouseEvent<HTMLButtonElement>;
  showAllCount: number;
  setSelected: Dispatch<SetStateAction<boolean>>;
};

export const showAll = (props: ShowAll) => {
  const { event, showAllCount, setSelected } = props;
  const buttonEl = event.target as HTMLButtonElement;

  if (showAllCount) {
    setSelected(true);
    store.dispatch(showAllCards(true));
  } else {
    buttonEl.classList.add('shake');
  }

  setTimeout(() => {
    if (showAllCards) {
      store.dispatch(showAllCards(false));
      setSelected(false);
    } else {
      buttonEl.classList.remove('shake');
    }
  }, 3000);
};
