//import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Footer from './component/Footer';

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <main>
        <MainVisual/>
      </main>
      <Footer />
    </div>   
  );
}

export default App;


