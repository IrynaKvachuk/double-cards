import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCardsDeck,
  selectDisableAllCards,
  selectGridSize,
  selectNoTurnReload
} from '../../../features/DoubleCards/DoubleCardsSelects';
import Card from '../../../components/Card';
import { CardsDeck } from '../../../features/Card/CardTypes';
import { useDispatch } from 'react-redux';
import { setNoTurnReload } from '../../../features/DoubleCards/DoubleCardsActions';

const GameTable: React.FC = () => {
  const dispatch = useDispatch();

  const [rowAmount, setRowAmount] = useState<number>(0);
  const [columnAmount, setColumnAmount] = useState<number>(0);
  const [deck, setDeck] = useState<CardsDeck>([]);

  const gridSize = useSelector(selectGridSize);
  const cardsDeck = useSelector(selectCardsDeck);
  const disableAllCards = useSelector(selectDisableAllCards);
  const noTurnReload = useSelector(selectNoTurnReload);

  useEffect(() => {
    const { rowAmount, columnAmount } = gridSize;
    // show more with columns
    const isRowBigger = rowAmount > columnAmount;

    setRowAmount(isRowBigger ? columnAmount : rowAmount);
    setColumnAmount(isRowBigger ? rowAmount : columnAmount);
  }, [gridSize]);

  useEffect(() => {
    if (!cardsDeck.length) return;
    setDeck(cardsDeck);
  }, [cardsDeck]);

  // rerender deck on shuffle
  useEffect(() => {
    if (!noTurnReload) return;

    const timer = setTimeout(() => {
      setDeck(cardsDeck);
      dispatch(setNoTurnReload(false));
    }, 2000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noTurnReload]);

  return (
    <section
      className="double-cards_game-table"
      style={{
        gridTemplateColumns: 'repeat(' + columnAmount + ',1fr)',
        gridTemplateRows: 'repeat(' + rowAmount + ',1fr)'
      }}
      data-testid="game-table"
    >
      {deck?.map((card) => (
        <Card key={card.id} card={card} disabled={disableAllCards} />
      ))}
    </section>
  );
};

export default GameTable;
