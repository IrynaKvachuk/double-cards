import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTurns } from '../../../features/DoubleCards/DoubleCardsSelects';
import Modal from '../../../layout/Modal/Modal';
import { onClose, refreshBestResult } from './utils';

const WinPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [bestResult, setBestResult] = useState<number>(0);

  const doubleCardsTurns = useSelector(selectTurns);

  useEffect(() => {
    refreshBestResult({ newResult: doubleCardsTurns, setBestResult });
  }, [doubleCardsTurns]);

  return (
    <Modal
      isOpen={isOpen}
      className="win-popup"
      onClose={() => onClose({ setIsOpen })}
      shouldCloseOnOverlayClick
    >
      <h1 className="win-popup_title">Win!</h1>
      <div className="win-popup_info">
        <span>Turns: {doubleCardsTurns}</span>
        <span>Best result: {bestResult}</span>
      </div>
    </Modal>
  );
};

export default WinPopup;
