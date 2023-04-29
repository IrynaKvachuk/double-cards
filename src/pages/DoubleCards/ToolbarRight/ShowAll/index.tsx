import { useSelector } from 'react-redux';
import { selectShowAllBooster } from '../../../../features/Boosters/BoostersSelects';
import Booster from '../../../../components/Booster';
import { turnAllCards } from './utils';

const ShowAll: React.FC = () => {
  const showAllData = useSelector(selectShowAllBooster);

  return (
    <Booster
      boosterData={showAllData}
      icon="&#9903;"
      title="show all cards for 3 sec"
      className="show-all"
      callback={turnAllCards}
    />
  );
};

export default ShowAll;
