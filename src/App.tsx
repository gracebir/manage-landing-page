import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {
  return (
    <div className="bg-bgLightGray min-h-screen lg:bg-bgHero lg:bg-no-repeat bg-contain lg:bg-right-top">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
