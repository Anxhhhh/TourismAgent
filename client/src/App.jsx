import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'

const App = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App