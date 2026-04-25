import React from 'react'

const destinations = [
  {
    name: 'Maldives',
    country: 'Indian Ocean',
    tag: 'Beach',
    gradient: 'linear-gradient(135deg, #0077b6, #00b4d8)',
    emoji: '🏝️',
    rating: 4.9,
    trips: '3.2k',
  },
  {
    name: 'Santorini',
    country: 'Greece',
    tag: 'Romantic',
    gradient: 'linear-gradient(135deg, #e07a5f, #f2cc8f)',
    emoji: '🌅',
    rating: 4.8,
    trips: '5.1k',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    tag: 'Cultural',
    gradient: 'linear-gradient(135deg, #2d6a4f, #74c69d)',
    emoji: '🌿',
    rating: 4.7,
    trips: '7.4k',
  },
  {
    name: 'Amalfi Coast',
    country: 'Italy',
    tag: 'Scenic',
    gradient: 'linear-gradient(135deg, #264653, #2a9d8f)',
    emoji: '⛵',
    rating: 4.9,
    trips: '2.8k',
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    tag: 'Heritage',
    gradient: 'linear-gradient(135deg, #c77dff, #7b2d8b)',
    emoji: '⛩️',
    rating: 4.8,
    trips: '4.6k',
  },
  {
    name: 'Patagonia',
    country: 'Argentina',
    tag: 'Adventure',
    gradient: 'linear-gradient(135deg, #0f3460, #16213e)',
    emoji: '🏔️',
    rating: 4.9,
    trips: '1.9k',
  },
]

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const DestinationsSection = () => (
  <section id="destinations" className="bg-black py-[100px] lg:py-[140px]">
    <div className="max-w-[1600px] mx-auto px-4 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-[52px]">
        <div>
          <span className="section-label">Top Destinations</span>
          <h2 className="text-[clamp(34px,4.5vw,58px)] font-bold leading-[1.15] text-white mt-2">
            Handpicked for<br />
            <span className="gradient-text">your next adventure</span>
          </h2>
        </div>
        <a href="#" className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-teal-300 whitespace-nowrap pb-2 border-b border-teal-300/30 hover:text-teal-200 hover:gap-3 hover:border-teal-300 transition-all duration-200">
          View all destinations
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 sm:gap-6">
        {destinations.map((d, i) => (
          <article 
            key={d.name} 
            className="group glass-card overflow-hidden transition-all duration-300 ease-in-out cursor-pointer rounded-2xl hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Visual area with gradient */}
            <div
              className="relative h-[220px] flex items-end p-4 overflow-hidden"
              style={{ background: d.gradient }}
            >
              {/* Gradient dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              
              <span className="absolute top-1/2 left-1/2 text-[60px] -translate-x-1/2 -translate-y-[56%] select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-transform duration-400 ease-in-out group-hover:scale-110 group-hover:-translate-y-[62%]">
                {d.emoji}
              </span>
              
              <span className="absolute bottom-[14px] left-[14px] z-10 text-[10.5px] font-semibold tracking-[0.1em] uppercase text-white/90 bg-white/15 border border-white/25 backdrop-blur-md px-2.5 py-1 rounded-full pointer-events-none">
                {d.tag}
              </span>
            </div>

            {/* Info */}
            <div className="p-5 pb-[18px] flex flex-col gap-3.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[19px] font-semibold text-white mb-1">
                    {d.name}
                  </h3>
                  <p className="text-[13.5px] font-light text-white/45">
                    {d.country}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[14px] font-semibold text-gold-400 whitespace-nowrap mt-0.5">
                  <StarIcon />
                  <span>{d.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[13px] text-white/40">
                  {d.trips} trips planned
                </span>
                <a href="#" className="text-[14.5px] font-medium text-teal-300 transition-all duration-200 hover:text-teal-200 hover:tracking-wide">
                  Explore →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default DestinationsSection
