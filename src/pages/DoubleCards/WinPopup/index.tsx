import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FireWorkCSS from '../../../components/FireworkCSS';
import { selectGameTime, selectTurns } from '../../../features/DoubleCards/DoubleCardsSelects';
import Modal from '../../../layout/Modal/Modal';
import { onClose, refreshBestResult } from './utils';

export type GameResult = {
  time: number;
  turns: number;
};

const WinPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [gameResult, setGameResult] = useState<GameResult>({ time: 0, turns: 0 });

  const time = useSelector(selectGameTime);
  const turns = useSelector(selectTurns);

  useEffect(() => {
    refreshBestResult({ newResult: { time, turns }, setGameResult });
  }, [time, turns]);

  return (
    <Modal
      isOpen={isOpen}
      className="win-popup"
      onClose={() => onClose({ setIsOpen })}
      shouldCloseOnOverlayClick
    >
      <h1 className="win-popup_title">Win!</h1>
      <div className="win-popup_info">
        <span>Time: {time}</span>
        <span>Turns: {turns}</span>
        <div>
          <h2>Best result</h2>
          <span>Time: {gameResult.time}</span>
          <span>Turns: {gameResult.turns}</span>
        </div>
      </div>
      <FireWorkCSS />
    </Modal>
  );
};

export default WinPopup;
