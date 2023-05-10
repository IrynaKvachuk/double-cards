import Footer from './layout/Footer';
import Header from './layout/Header';
import ThemeWrapper from './layout/ThemeWrapper/ThemeWrapper';
import DoubleCards from './pages/DoubleCards';
import './styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="game-app" data-testid="app-body">
      <ThemeWrapper>
        <Header />
        <section className="game-app_content">
          <DoubleCards />
        </section>
        <Footer />
      </ThemeWrapper>
    </div>
  );
};

export default App;
