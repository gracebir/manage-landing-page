import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='bg-bgLightGray min-h-screen lg:bg-bgHero lg:bg-no-repeat bg-contain lg:bg-right-top'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
