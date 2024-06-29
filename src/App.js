import './App.css';
import Skills from './components/Home/Skills';
import SocialLinks from './components/SocialLinks';
import Footer from './components/comman/Footer';
import Navbar from './components/comman/Navbar';
import Home from './page/Home';
// import Home from './components/Home';


function App() {
  return (
    <div className="w-screen min-h-screen max-w-[100vw] bg-richblack-900 flex flex-col">
      <Navbar />

      <Home />

      <SocialLinks />

      <div className='pt-20'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
