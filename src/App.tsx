import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Attractions from './components/Attractions'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#111111] text-white">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Attractions />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
