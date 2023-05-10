import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGameFinished } from '../../features/DoubleCards/DoubleCardsSelects';
import { openModal } from '../../features/Modal/ModalActions';
import { selectModal } from '../../features/Modal/ModalSelects';
import { useEffectOnce } from '../../hooks/UseEffectOnce';
import Container from '../../layout/Container';
import ToolbarMain from './ToolbarMain/ToolbarMain';
import { getPrevSettings, reloadGame } from './utils';
import WinPopup from './WinPopup';
import GameTable from './GameTable';
import ToolbarBoosters from './ToolbarBoosters/ToolbarBoosters';
import ToolbarObstacles from './ToolbarObstacles';

const DoubleCards: React.FC = () => {
  const dispatch = useDispatch();

  const gameFinished = useSelector(selectGameFinished);
  const modal = useSelector(selectModal);

  useEffectOnce(() => {
    getPrevSettings();
    reloadGame();
  });

  useEffect(() => {
    gameFinished && dispatch(openModal('WinPopup'));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameFinished]);

  return (
    <Container classList="double-cards">
      <ToolbarMain />
      <ToolbarBoosters />
      <GameTable />
      <ToolbarObstacles />
      {modal === 'WinPopup' ? <WinPopup /> : null}
    </Container>
  );
};

export default DoubleCards;
