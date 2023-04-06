import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showAllCards } from '../../../features/DoubleCards/DoubleCardsActions';
import { useSelector } from 'react-redux';
import { selectShowAll } from '../../../features/DoubleCards/DoubleCardsSelects';

const ShowAll: React.FC = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);

  const showAllCount = useSelector(selectShowAll);

  const showAll = () => {
    setSelected(true);
    dispatch(showAllCards(true));

    setTimeout(() => {
      dispatch(showAllCards(false));
      setSelected(false);
    }, 3000);
  };

  return (
    <div className={`show-all ${selected ? 'selected' : ''}`}>
      <button
        className="game-app_btn double-cards_btn show-all_btn"
        title="New Game"
        onClick={showAll}
      >
        &#9903;
      </button>
      <span className="show-all_count">{showAllCount}</span>
    </div>
  );
};

export default ShowAll;
