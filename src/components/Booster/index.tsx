import React from 'react';
import { useEffect, useState } from 'react';
import { boosterClick } from './utils';
import { useDispatch } from 'react-redux';
import { setBooster } from '../../features/Boosters/BoostersActions';
import { BoosterIF } from '../../features/Boosters/BoosterTypes';
import { getDateOfYear } from '../../utils';

type Props = {
  boosterData: BoosterIF;
  icon?: string;
  addByDay?: number;
  className?: string;
  title?: string;
  callback?: (boosterData: BoosterIF) => void;
};

const Booster: React.FC<Props> = React.memo((props: Props) => {
  const dispatch = useDispatch();
  const {
    boosterData,
    icon = '&#9903;',
    addByDay = 3,
    className = '',
    title = '',
    callback = () => {}
  } = props;
  const { date, value } = boosterData;

  const [selected, setSelected] = useState(false);

  // add daily boosters
  useEffect(() => {
    const today = getDateOfYear(new Date());

    if (!date || today === getDateOfYear(date)) return;

    dispatch(
      setBooster({
        ...boosterData,
        value: value + addByDay,
        date: new Date()
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className={`booster ${className} ${selected ? 'selected' : ''}`} data-testid="booster">
      <button
        className="game-app_btn double-cards_btn booster_btn"
        title={title}
        onClick={(event) => boosterClick({ event, boosterData, setSelected, callback })}
      >
        {icon}
      </button>
      <span className="booster_count" title="booster count">
        {value}
      </span>
    </div>
  );
});

Booster.displayName = 'Booster';

export default Booster;
