import React from 'react';
import { CardType } from '../../features/Card/CardTypes';
import { closedCardClick, frozenCardClick, openedCardClick } from './utils';

type Props = {
  card: CardType;
  disabled: boolean;
};

const Card: React.FC<Props> = React.memo((props: Props) => {
  const { card, disabled } = props;
  const { src, side, freezed } = card;
  const flippedClass = side === 'front' ? 'flipped' : '';

  return (
    <div
      className={`double-cards_card ${flippedClass}`}
      data-disabled={disabled || freezed}
      data-testid="card"
    >
      <img
        src={src}
        className="double-cards_card--front"
        alt="card front"
        onClick={(event) => openedCardClick({ event })}
      />
      <img
        src={`${process.env.PUBLIC_URL}/card-cover.png`}
        className={`double-cards_card--back ${freezed ? 'freezed' : ''} `}
        alt="card back"
        onClick={(event) =>
          closedCardClick({
            event,
            card,
            disabled
          })
        }
      />
      {freezed ? (
        <img
          src={`${process.env.PUBLIC_URL}/card-frozen.png`}
          className="double-cards_card--frozen"
          alt="card frozen"
          onClick={(event) => frozenCardClick({ event })}
        />
      ) : null}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
