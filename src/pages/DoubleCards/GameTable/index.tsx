import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCardsDeck,
  selectDisableAllCards,
  selectGridSize,
  selectSecondCard
} from '../../../features/DoubleCards/DoubleCardsSelects';
import Card from '../../../components/Card';
import { matchCards } from './utils';

const GameTable: React.FC = () => {
  const [rowAmount, setRowAmount] = useState<number>(0);
  const [columnAmount, setColumnAmount] = useState<number>(0);

  const gridSize = useSelector(selectGridSize);
  const cardsDeck = useSelector(selectCardsDeck);
  const disableAllCards = useSelector(selectDisableAllCards);
  const secondCard = useSelector(selectSecondCard);

  useEffect(() => {
    const { rowAmount, columnAmount } = gridSize;
    // show more with columns
    const isRowBigger = rowAmount > columnAmount;

    setRowAmount(isRowBigger ? columnAmount : rowAmount);
    setColumnAmount(isRowBigger ? rowAmount : columnAmount);
  }, [gridSize]);

  useEffect(() => {
    if (!secondCard) return;
    matchCards();
  }, [secondCard]);

  return (
    <section
      className="double-cards_game-table"
      style={{
        gridTemplateColumns: 'repeat(' + columnAmount + ',1fr)',
        gridTemplateRows: 'repeat(' + rowAmount + ',1fr)'
      }}
    >
      {cardsDeck?.map((card) => (
        <Card key={card.id} card={card} disabled={disableAllCards} />
      ))}
    </section>
  );
};

export default GameTable;
