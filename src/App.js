
import './App.css';
import Test from './component/Test';
import Palette from './component/Palette';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Map from './component/Map';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';


function App() {
  return (
    <div >
      <NavBar/>
      <Palette/>
      <Header/>
      <Map/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
