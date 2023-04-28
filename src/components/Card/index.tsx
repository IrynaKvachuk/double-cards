import React from 'react';
import { CardType } from '../../features/Card/CardTypes';
import { closedCardClick, openedCardClick } from './utils';

type Props = {
  card: CardType;
  disabled: boolean;
};

const Card: React.FC<Props> = React.memo((props: Props) => {
  const { card, disabled } = props;
  const { src, side } = card;
  const flippedClass = side === 'front' ? 'flipped' : '';

  return (
    <div
      className={`double-cards_card ${flippedClass}`}
      data-disabled={disabled}
      data-testid="card"
    >
      <img
        src={src}
        className="double-cards_card--front"
        alt="card front"
        data-testid="card-front"
        onClick={(event) => openedCardClick({ event })}
      />
      <img
        src={`${process.env.PUBLIC_URL}/card-cover.png`}
        className="double-cards_card--back"
        alt="card back"
        data-testid="card-back"
        onClick={(event) =>
          closedCardClick({
            event,
            card,
            disabled
          })
        }
      />
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
