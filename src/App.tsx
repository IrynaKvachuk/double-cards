import CloudLayout from './layout/CloudLayout';
import Footer from './layout/Footer';
import Header from './layout/Header';
import DoubleCards from './pages/DoubleCards';
import './styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="game-app" data-testid="app-body">
      <Header />
      <section className="game-app_content">
        <DoubleCards />
      </section>
      <Footer />
      <CloudLayout />
    </div>
  );
};

export default App;
