import { useSelector } from 'react-redux';
import { selectTurns } from '../../../features/DoubleCards/DoubleCardsSelects';
import ReloadGameBtn from './ReloadGameBtn';

type Props = {};

const ToolbarTop: React.FC<Props> = () => {
  const doubleCardsTurns = useSelector(selectTurns);

  return (
    <section className="double-cards_toolbar-top">
      <div className="double-cards_toolbar-top__info">
        <span className="double-cards_turns">Turns: {doubleCardsTurns}</span>
      </div>
      <div className="double-cards_toolbar-top__actions">
        <ReloadGameBtn />
      </div>
    </section>
  );
};

export default ToolbarTop;
