import { OpenCard } from '.';
import { CardType } from '../../features/Card/CardTypes';
import { DoubleCardsTurnCard } from '../../pages/DoubleCards/utils';

type OpenedCardClick = {
  event: React.MouseEvent<HTMLImageElement>;
};

export const openedCardClick = (props: OpenedCardClick) => {
  const { event } = props;
  const imgElement = event.target as HTMLImageElement;

  // shake animation
  imgElement.classList.add('shake');
  setTimeout(() => {
    imgElement.classList.remove('shake');
  }, 500);
};

type ClosedCardClick = {
  event: React.MouseEvent<HTMLImageElement>;
  card: CardType;
  disabled: boolean;
  openCard: OpenCard<DoubleCardsTurnCard>;
};

export const closedCardClick = (props: ClosedCardClick) => {
  const { event, card, disabled, openCard } = props;
  if (disabled) return;

  const imgElement = event.target as HTMLImageElement;

  openCard({ card });

  // flip animation
  imgElement.classList.add('flip');
  setTimeout(() => {
    imgElement.classList.remove('flip');
  }, 500);
};
