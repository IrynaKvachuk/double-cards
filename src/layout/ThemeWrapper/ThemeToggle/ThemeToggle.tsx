import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeT } from '../../../features/Preferences/PreferencesTypes';
import { setTheme } from '../../../features/Preferences/PreferencesActions';

type Props = {
  theme: ThemeT;
};

const ThemeToggle: React.FC<Props> = (props: Props) => {
  const { theme } = props;
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(theme === 'dark');
  }, [theme]);

  return (
    <div className="theme__toggle" aria-label={theme}>
      <div className="toggle-icon">
        <input
          type="checkbox"
          id="hide-checkbox"
          checked={checked}
          value="theme-checkbox"
          onChange={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
        />
        <label htmlFor="hide-checkbox" className="toggle">
          <span className="toggle-button">
            <span className="crater crater-1"></span>
            <span className="crater crater-2"></span>
            <span className="crater crater-3"></span>
            <span className="crater crater-4"></span>
            <span className="crater crater-5"></span>
            <span className="crater crater-6"></span>
            <span className="crater crater-7"></span>
          </span>
          <span className="star star-1"></span>
          <span className="star star-2"></span>
          <span className="star star-3"></span>
          <span className="star star-4"></span>
          <span className="star star-5"></span>
          <span className="star star-6"></span>
          <span className="star star-7"></span>
          <span className="star star-8"></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
