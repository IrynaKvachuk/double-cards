import { useSelector } from 'react-redux';
import { selectTheme } from '../../features/Preferences/PreferencesSelects';
import CloudLayout from '../CloudLayout';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import StarSkyLayout from '../StarSkyLayout/StarSkyLayout';

type Props = {
  children?: React.ReactNode;
};

const ThemeWrapper: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const theme = useSelector(selectTheme);

  return (
    <section className={`theme theme--${theme}`}>
      {theme === 'light' ? <CloudLayout /> : null}
      {theme === 'dark' ? <StarSkyLayout /> : null}
      <ThemeToggle theme={theme} />
      {children}
    </section>
  );
};

export default ThemeWrapper;
