import { CardSide } from '../../features/DoubleCards/DoubleCardsTypes';
import { Dispatch, SetStateAction } from '../../features/_common/types';

type TurnCard = {
  setSide: Dispatch<SetStateAction<CardSide>>;
};

export const turnCard = (props: TurnCard) => {
  const { setSide } = props;

  setSide((prevState: CardSide) => {
    const newVal = prevState === 'back' ? 'front' : 'back';
    return newVal;
  });
};
