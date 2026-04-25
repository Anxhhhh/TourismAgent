import React from 'react'

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
  <section id="discover" className="bg-gradient-to-b from-teal-900 to-black py-[100px] lg:py-[140px]">
    <div className="max-w-[1600px] mx-auto px-4 md:px-6">
      <div className="text-center max-w-[680px] mx-auto mb-16 flex flex-col items-center">
        <span className="section-label">Why Choose Us</span>
        <h2 className="text-[clamp(36px,4.5vw,60px)] font-bold leading-tight mb-[18px] text-white">
          Travel smarter,<br />
          <span className="gradient-text">experience deeper</span>
        </h2>
        <p className="text-[17px] font-light leading-[1.8] text-white/50">
          From AI-generated itineraries to on-ground expert guidance — we handle the planning
          so you can focus on the memories.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7">
        {features.map((f, i) => (
          <div 
            key={f.title} 
            className="group relative overflow-hidden glass-card flex flex-col gap-4 px-8 py-11 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(30,138,158,0.2)]"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Top Border Hover Effect */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-teal-800 to-teal-700 rounded-xl text-teal-300 shrink-0 border border-white/10">
              <span className="w-[26px] h-[26px]">{f.icon}</span>
            </div>
            <h3 className="text-[19px] font-semibold text-white leading-tight mt-1">{f.title}</h3>
            <p className="text-[15.5px] font-light leading-[1.75] text-white/50">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default FeaturesSection
