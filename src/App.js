
import './App.css';
import Test from './component/Test';
import Palette from './component/Palette';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Map from './component/Map';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Logo from './component/Logo';



function App() {
  return (
    <div className='App'>
      <Logo />
      <div className="centerContainer">
        {/* <NavBar/> */}
        <Palette/>
        <Header/>
        <Map/>
        <Testimonials/>
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
