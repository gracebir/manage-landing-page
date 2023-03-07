import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='bg-bgLightGray min-h-screen font-vietnam'>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
