import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Swiper from './components/Swiper/Swiper';
import Avatars from './components/Avatars/Avatars';
import Gallery from './components/Gallery/Gallery';
import ToggleText from './components/ToggleText/ToggleText';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Swiper/>
      <Gallery/>
      <ToggleText/>
      <Avatars/>
      <Footer/>
    </div>
  );
}

export default App;
