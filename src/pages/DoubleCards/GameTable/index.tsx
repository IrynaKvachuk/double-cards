import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCardsDeck,
  selectDisableAllCards,
  selectGridSize
} from '../../../features/DoubleCards/DoubleCardsSelects';
import Card from '../../../components/Card';

const GameTable: React.FC = () => {
  const [rowAmount, setRowAmount] = useState<number>(0);
  const [columnAmount, setColumnAmount] = useState<number>(0);

  const gridSize = useSelector(selectGridSize);
  const cardsDeck = useSelector(selectCardsDeck);
  const disableAllCards = useSelector(selectDisableAllCards);

  useEffect(() => {
    const { rowAmount, columnAmount } = gridSize;
    // show more with columns
    const isRowBigger = rowAmount > columnAmount;

    setRowAmount(isRowBigger ? columnAmount : rowAmount);
    setColumnAmount(isRowBigger ? rowAmount : columnAmount);
  }, [gridSize]);

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
