import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Testomonials from './components/Testimonial'
import GetStart from './components/Getstart'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-bgLightGray min-h-screen relative overflow-hidden">
      <div className='absolute hidden lg:block w-1/2 min-h-screen bg-bgHero -right-32 -top-32  bg-no-repeat bg-contain'>
      </div>
      <Navbar/>
      <main className='z-40'>
        <Hero/>
        <About/>
        <Testomonials/>
        <GetStart/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
