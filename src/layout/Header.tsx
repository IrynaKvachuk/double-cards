import TitleLogoMedium from '../components/titleLogo/TitleLogoMedium';
import ToolbarTop from './ToolbarTop';

const Header: React.FC = () => {
  return (
    <header className="game-app_header">
      <TitleLogoMedium />
      <ToolbarTop />
    </header>
  );
};

export default Header;
