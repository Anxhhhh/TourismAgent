import React, { useEffect, useRef } from 'react'
import heroBg from '../../assets/images/home1.jpg'
import './HeroSection.css'

const stats = [
  { value: '150+', label: 'Destinations' },
  { value: '98%', label: 'Happy Travellers' },
  { value: '12K+', label: 'Trips Planned' },
]

const topSpots = [
  { emoji: '🏝️', name: 'Maldives', sub: 'Indian Ocean', badge: '#1 Beach' },
  { emoji: '🌅', name: 'Santorini', sub: 'Greece', badge: 'Romantic' },
  { emoji: '🌿', name: 'Bali', sub: 'Indonesia', badge: 'Cultural' },
]

const HeroSection = () => {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const animate = (el, delay) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.85s ease, transform 0.85s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, delay)
    }
    animate(leftRef.current, 150)
    animate(rightRef.current, 450)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero__overlay-gradient" />
      <div className="hero__overlay-vignette" />

      {/* Two-column content */}
      <div className="hero__content container">

        {/* ── Left column ── */}
        <div className="hero__text-col" ref={leftRef}>
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Discover your perfect place
          </p>

          <h1 className="hero__heading">
            <span className="hero__heading-light">Explore The</span>
            <br />
            <span className="hero__heading-light">Best </span>
            <span className="hero__heading-bold">Beautiful</span>
            <br />
            <span className="hero__heading-bold hero__heading-teal">Beaches</span>
          </h1>

          <p className="hero__description">
            AI-powered travel planning tailored to you. Discover hidden gems, curated
            itineraries, and unforgettable experiences around the globe.
          </p>

          <div className="hero__cta-row">
            <a href="#discover" className="hero__btn hero__btn--primary">
              <span>Start Exploring</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" className="hero__btn hero__btn--ghost">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              Watch Story
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((s, i) => (
              <div key={s.label} className="hero__stat">
                <div>
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
                {i < stats.length - 1 && <span className="hero__stat-divider" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="hero__right-col" ref={rightRef}>

          {/* Weather pill */}
          <div className="hero__weather-pill glass-card">
            <span className="hero__weather-pill-icon">☀️</span>
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Current in Bali</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span className="hero__weather-pill-temp">28°C</span>
                <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)' }}>— Perfect weather</span>
              </div>
            </div>
          </div>

          {/* Main floating info card */}
          <div className="hero__info-card glass-card">
            <div className="hero__info-card-header">
              <div className="hero__info-card-badge">
                <span className="hero__info-card-badge-dot" />
                AI Curated
              </div>
              <span className="hero__info-card-tag">Top Picks 2025</span>
            </div>

            <div>
              <div className="hero__info-card-title">
                Best places to <span>visit</span> this season
              </div>
            </div>

            <div className="hero__info-card-list">
              {topSpots.map((s) => (
                <div key={s.name} className="hero__info-card-item">
                  <div className="hero__info-card-item-left">
                    <span className="hero__info-card-item-emoji">{s.emoji}</span>
                    <div>
                      <div className="hero__info-card-item-name">{s.name}</div>
                      <div className="hero__info-card-item-sub">{s.sub}</div>
                    </div>
                  </div>
                  <span className="hero__info-card-item-badge">{s.badge}</span>
                </div>
              ))}
            </div>

            <a href="#destinations" className="hero__info-card-cta">
              View all destinations
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="hero__socials">
        {[
          { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', fill: true },
          { label: 'Instagram', isInsta: true },
          { label: 'Twitter', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z', fill: true },
        ].map((s) => (
          <a key={s.label} href="#" aria-label={s.label} className="hero__social-icon">
            {s.isInsta ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.path} />
              </svg>
            )}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div>
    </section>
  )
}

export default HeroSection
