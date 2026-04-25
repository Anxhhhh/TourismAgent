import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import PlacesSection from './components/PlacesSection/PlacesSection'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import DestinationsSection from './components/DestinationsSection/DestinationsSection'
import AISection from './components/AISection/AISection'
import Footer from './components/Footer/Footer'
import ChatWidget from './components/ChatWidget/ChatWidget'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PlacesSection />
        <FeaturesSection />
        <DestinationsSection />
        <AISection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App