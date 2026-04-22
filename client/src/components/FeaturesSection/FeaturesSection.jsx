import React from 'react'
import './FeaturesSection.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: 'AI-Powered Planning',
    desc: 'Our intelligent assistant crafts personalised itineraries based on your preferences, budget, and travel style.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Global Destinations',
    desc: 'Explore over 150+ curated destinations worldwide — from hidden coastal gems to iconic landmarks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Real-Time Insights',
    desc: 'Get live weather, local events, and crowd forecasts so you visit every spot at its absolute best.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Expert Local Guides',
    desc: "Connect with verified local guides who share authentic stories and secret spots you'll never find online.",
  },
]

const FeaturesSection = () => (
  <section id="discover" className="features section">
    <div className="container">
      <div className="features__header">
        <span className="section-label">Why Choose Us</span>
        <h2 className="features__title">
          Travel smarter,<br />
          <span className="gradient-text">experience deeper</span>
        </h2>
        <p className="features__subtitle">
          From AI-generated itineraries to on-ground expert guidance — we handle the planning
          so you can focus on the memories.
        </p>
      </div>

      <div className="features__grid">
        {features.map((f, i) => (
          <div key={f.title} className="features__card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="features__card-icon">{f.icon}</div>
            <h3 className="features__card-title">{f.title}</h3>
            <p className="features__card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default FeaturesSection
