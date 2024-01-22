import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';

import './App.css';
import SvgLogo from './components/SvgLogo';

function App() {

  return (
    <>
      <SvgLogo />
      <Header />
      <About />
      <Works />
      <Footer />
    </>
  )
}

export default App;
