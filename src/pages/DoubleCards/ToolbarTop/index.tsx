import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Stopwatch from '../../../components/StopWatch';
import { setGameTime } from '../../../features/DoubleCards/DoubleCardsActions';
import {
  selectGameFinished,
  selectGameReloaded,
  selectTurns
} from '../../../features/DoubleCards/DoubleCardsSelects';
import ReloadGameBtn from './ReloadGameBtn';

type Props = {};

const ToolbarTop: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const gameReloaded = useSelector(selectGameReloaded);
  const gameFinished = useSelector(selectGameFinished);
  const doubleCardsTurns = useSelector(selectTurns);

  const saveTimeToStore = (time: number) => {
    dispatch(setGameTime(time));
  };

  return (
    <section className="double-cards_toolbar-top">
      <div className="double-cards_toolbar-top__info">
        <div className="double-cards_results">
          <span className="double-cards_results__turns">Turns: {doubleCardsTurns}</span>
          <span className="double-cards_results__time">
            <Stopwatch
              resetTime={gameReloaded}
              runTimer={!gameFinished}
              saveTime={saveTimeToStore}
            />
          </span>
        </div>
      </div>
      <div className="double-cards_toolbar-top__actions">
        <ReloadGameBtn />
      </div>
    </section>
  );
};

export default ToolbarTop;
