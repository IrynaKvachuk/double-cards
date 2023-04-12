import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectShowAll } from '../../../../features/DoubleCards/DoubleCardsSelects';
import { showAll } from './events';

const ShowAll: React.FC = () => {
  const [selected, setSelected] = useState(false);

  const showAllCount = useSelector(selectShowAll);

  return (
    <div className={`booster show-all ${selected ? 'selected' : ''}`}>
      <button
        className="game-app_btn double-cards_btn show-all_btn"
        title="New Game"
        onClick={(event) => showAll({ event, showAllCount, setSelected })}
      >
        &#9903;
      </button>
      <span className="booster_count">{showAllCount}</span>
    </div>
  );
};

export default ShowAll;
