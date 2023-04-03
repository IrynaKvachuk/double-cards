import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCardsDeck,
  selectDisableAllCards,
  selectSecondCard
} from '../../../features/DoubleCards/DoubleCardsSelects';
import Card from '../../../components/Card';
import { matchCards, openCard } from './utils';

const GameTable: React.FC = () => {
  const cardsDeck = useSelector(selectCardsDeck);
  const disableAllCards = useSelector(selectDisableAllCards);
  const secondCard = useSelector(selectSecondCard);

  useEffect(() => {
    if (!secondCard) return;
    matchCards();
  }, [secondCard]);

  return (
    <section className="double-cards_table">
      {cardsDeck?.map((card) => (
        <Card key={card.id} card={card} openCard={openCard} disabled={disableAllCards} />
      ))}
    </section>
  );
};

export default GameTable;
