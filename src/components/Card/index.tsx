import { CardType } from '../../features/Card/CardTypes';
import { DoubleCardsTurnCard } from '../../pages/DoubleCards/utils';
import { closedCardClick, openedCardClick } from './utils';

export type OpenCard<P> = (props: P) => void;

type Props = {
  card: CardType;
  disabled: boolean;
  openCard: OpenCard<DoubleCardsTurnCard>;
};

const Card: React.FC<Props> = (props: Props) => {
  const { card, disabled, openCard } = props;
  const { src, side } = card;
  const flippedClass = side === 'front' ? 'flipped' : '';

  return (
    <div className={`double-cards_card ${flippedClass}`} data-disabled={disabled}>
      <img
        src={src}
        className="double-cards_card--front"
        alt="card front"
        onClick={(event) => openedCardClick({ event })}
      />
      <img
        src="/card-cover.png"
        className="double-cards_card--back"
        alt="card back"
        onClick={(event) =>
          closedCardClick({
            event,
            card,
            disabled,
            openCard
          })
        }
      />
    </div>
  );
};

export default Card;
