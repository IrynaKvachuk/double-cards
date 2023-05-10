import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FireWorkCSS from '../../../components/FireworkCSS';
import {
  selectGameTime,
  selectGridSize,
  selectTurns
} from '../../../features/DoubleCards/DoubleCardsSelects';
import Modal from '../../../layout/Modal/Modal';
import { onClose, refreshBestResult } from './utils';
import { Timer } from '../../../features/_common/types';
import { initTimerValues } from '../../../features/_common/initValues';
import { selectTheme } from '../../../features/Preferences/PreferencesSelects';

export type GameResult = {
  time: Timer;
  turns: number;
};

const WinPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [gameResult, setGameResult] = useState<GameResult>({
    time: initTimerValues,
    turns: 0
  });

  const gridSize = useSelector(selectGridSize);
  const time = useSelector(selectGameTime);
  const turns = useSelector(selectTurns);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    refreshBestResult({ newResult: { time, turns }, gridSize, setGameResult });
  }, [time, turns]);

  return (
    <Modal
      isOpen={isOpen}
      className={`win-popup theme--${theme}`}
      onClose={() => onClose({ setIsOpen })}
      shouldCloseOnOverlayClick
    >
      <h1 className="win-popup_title">Win!</h1>
      <div className="win-popup_info">
        <div className="win-popup_info__current-result">
          <span>
            Time:
            <span> {time.minutes}m</span>
            <span>{time.seconds}s</span>
          </span>
          <span>Turns: {turns}</span>
        </div>
        <div className="win-popup_info__best-result">
          <h2>
            Best result for {gridSize.columnAmount}x{gridSize.rowAmount}
          </h2>
          <span>
            Time:
            <span> {gameResult.time.minutes}m</span>
            <span>{gameResult.time.seconds}s</span>
          </span>
          <span>Turns: {gameResult.turns}</span>
        </div>
      </div>
      <FireWorkCSS />
    </Modal>
  );
};

export default WinPopup;
