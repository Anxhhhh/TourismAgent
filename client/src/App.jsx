import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import DestinationsSection from './components/DestinationsSection/DestinationsSection'
import AISection from './components/AISection/AISection'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DestinationsSection />
        <AISection />
      </main>
      <Footer />
    </div>
  )
}

export default App