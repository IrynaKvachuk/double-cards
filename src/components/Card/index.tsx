import { useState } from 'react';
import { CardType, CardSide } from '../../features/DoubleCards/DoubleCardsTypes';
import { turnCard } from './utils';

type Props = {
  card: CardType;
};

const Card: React.FC<Props> = (props: Props) => {
  const { card } = props;
  const { src } = card;

  const [side, setSide] = useState<CardSide>('front');

  return (
    <div className="double-cards_card" onClick={() => turnCard({ setSide })}>
      {side === 'front' ? (
        <img src={src} className="double-cards_card--front" alt="card front" />
      ) : null}
      {side === 'back' ? (
        <img src="/card-cover.png" className="double-cards_card--back" alt="card back" />
      ) : null}
    </div>
  );
};

export default Card;
