import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { showAll } from './utils';
import { selectShowAll } from '../../../../features/Boosters/BoostersSelects';
import { useDispatch } from 'react-redux';
import { setBooster } from '../../../../features/Boosters/BoostersActions';

const ShowAll: React.FC = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);

  const showAllData = useSelector(selectShowAll);

  useEffect(() => {
    if (!showAllData) return;
    const today = new Date();
    if (today === showAllData.date) return;

    dispatch(
      setBooster({
        ...showAllData,
        type: 'showAll',
        value: showAllData.value + 3,
        date: today
      })
    );
  }, []);

  return (
    <div className={`booster show-all ${selected ? 'selected' : ''}`}>
      <button
        className="game-app_btn double-cards_btn show-all_btn"
        title="show all cards for 3 sec"
        onClick={(event) => showAll({ event, showAllData, setSelected })}
      >
        &#9903;
      </button>
      <span className="booster_count">{showAllData.value}</span>
    </div>
  );
};

export default ShowAll;
