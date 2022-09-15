//import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Footer from './component/Footer';
import Convenient from './component/Convenient';
import Search from './component/Search';
import News from './component/News';
import Health from './component/Health';
import Orgchart from './component/Orgchart';

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <main>
        <MainVisual />
        <Convenient />
        <Search />
        <News />
        <Health />
      </main>
      <Footer />
    </div>   
  );
}

export default App;


