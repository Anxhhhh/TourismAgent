import React from 'react'
import './DestinationsSection.css'

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
  <section id="destinations" className="destinations section">
    <div className="container">
      <div className="destinations__header">
        <div>
          <span className="section-label">Top Destinations</span>
          <h2 className="destinations__title">
            Handpicked for<br />
            <span className="gradient-text">your next adventure</span>
          </h2>
        </div>
        <a href="#" className="destinations__view-all">
          View all destinations
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div className="destinations__grid">
        {destinations.map((d, i) => (
          <article key={d.name} className="dest-card glass-card">
            {/* Visual area with gradient */}
            <div
              className="dest-card__visual"
              style={{ background: d.gradient }}
            >
              <span className="dest-card__emoji">{d.emoji}</span>
              <span className="dest-card__tag">{d.tag}</span>
            </div>

            {/* Info */}
            <div className="dest-card__info">
              <div className="dest-card__name-row">
                <div>
                  <h3 className="dest-card__name">{d.name}</h3>
                  <p className="dest-card__country">{d.country}</p>
                </div>
                <div className="dest-card__rating">
                  <StarIcon />
                  <span>{d.rating}</span>
                </div>
              </div>

              <div className="dest-card__footer">
                <span className="dest-card__trips">{d.trips} trips planned</span>
                <a href="#" className="dest-card__explore">
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
