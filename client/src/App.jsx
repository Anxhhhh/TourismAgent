import { Routes, Route, Navigate } from 'react-router'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import AIConcierge from './pages/AIConcierge'
import ItineraryPlanner from './pages/ItineraryPlanner'
import MarketAnalytics from './pages/MarketAnalytics'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/concierge" element={<AIConcierge />} />
      <Route path="/itinerary" element={<ItineraryPlanner />} />
      <Route path="/analytics" element={<MarketAnalytics />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App