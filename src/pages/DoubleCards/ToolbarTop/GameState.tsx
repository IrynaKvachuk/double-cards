import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Stopwatch from '../../../components/StopWatch';
import {
  selectGameFinished,
  selectGameReloaded,
  selectTurns
} from '../../../features/DoubleCards/DoubleCardsSelects';
import { setGameTime } from '../../../features/DoubleCards/DoubleCardsActions';
import { Timer } from '../../../features/_common/types';

const GameState: React.FC = () => {
  const dispatch = useDispatch();

  const gameReloaded = useSelector(selectGameReloaded);
  const gameFinished = useSelector(selectGameFinished);
  const doubleCardsTurns = useSelector(selectTurns);

  const saveTimeToStore = (time: Timer) => {
    dispatch(setGameTime(time));
  };

  return (
    <div className="double-cards_results">
      <span className="double-cards_results__turns">Turns: {doubleCardsTurns}</span>
      <span className="double-cards_results__time">
        <Stopwatch resetTime={gameReloaded} runTimer={!gameFinished} saveTime={saveTimeToStore} />
      </span>
    </div>
  );
};

export default GameState;
