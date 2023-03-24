import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Card from '../../components/Card';
import {
  selectCardsDeck,
  selectDisableAllCards,
  selectGameFinished,
  selectSecondCard
} from '../../features/DoubleCards/DoubleCardsSelects';
import { openModal } from '../../features/Modal/ModalActions';
import { selectModal } from '../../features/Modal/ModalSelects';
import { useEffectOnce } from '../../hooks/UseEffectOnce';
import Container from '../../layout/Container';
import ToolbarTop from './ToolbarTop';
import { matchCards, openCard, reloadGame } from './utils';
import WinPopup from './WinPopup';

const DoubleCards: React.FC = () => {
  const dispatch = useDispatch();

  const cardsDeck = useSelector(selectCardsDeck);
  const secondCard = useSelector(selectSecondCard);
  const disableAllCards = useSelector(selectDisableAllCards);
  const gameFinished = useSelector(selectGameFinished);
  const modal = useSelector(selectModal);

  useEffectOnce(() => {
    reloadGame();
  });

  useEffect(() => {
    if (!secondCard) return;
    matchCards();
  }, [secondCard]);

  useEffect(() => {
    gameFinished && dispatch(openModal('WinPopup'));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameFinished]);

  return (
    <Container classList="double-cards">
      <ToolbarTop />
      <section className="double-cards_table">
        {cardsDeck?.map((card) => (
          <Card key={card.id} card={card} openCard={openCard} disabled={disableAllCards} />
        ))}
      </section>
      {modal === 'WinPopup' ? <WinPopup /> : null}
    </Container>
  );
};

export default DoubleCards;
