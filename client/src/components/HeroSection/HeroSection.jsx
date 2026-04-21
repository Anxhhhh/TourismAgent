import React, { useEffect, useRef } from 'react'
import heroBg from '../../assets/images/home1.jpg'

/* ── card preview (bottom-right) ─────────────────────────────── */
const CardPreview = () => (
  <div
    style={{
      position: 'absolute',
      bottom: '60px',
      right: '130px',
      width: '230px',
      height: '100px',
      display: 'flex',
      overflow: 'hidden',
      background: 'rgba(15,52,63,0.88)',
    }}
  >
    {/* text side */}
    <div
      style={{
        flex: 1,
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <p style={{ color: '#fff', fontSize: '13px', fontWeight: 500, fontFamily: "'Outfit', sans-serif", lineHeight: 1.4 }}>
          5 best places
        </p>
        <p style={{ color: '#fff', fontSize: '13px', fontWeight: 500, fontFamily: "'Outfit', sans-serif", lineHeight: 1.4 }}>
          to visit
        </p>
      </div>
      <a
        href="#"
        style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.75)',
          fontFamily: "'Outfit', sans-serif",
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
      >
        More →
      </a>
    </div>

    {/* image side */}
    <div style={{ width: '88px', flexShrink: 0, overflow: 'hidden' }}>
      <img
        src={heroBg}
        alt="5 best places to visit"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '80% 60%',
          filter: 'brightness(0.55) saturate(1.1)',
        }}
      />
    </div>
  </div>
)

/* ── social icons ─────────────────────────────────────────────── */
const SocialIcons = () => (
  <div
    className="absolute flex items-center"
    style={{ bottom: '36px', left: '40px', gap: '20px' }}
  >
    {/* Facebook */}
    <a
      href="#"
      aria-label="Facebook"
      style={{ color: 'rgba(255,255,255,0.65)', display: 'flex', transition: 'color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="#"
      aria-label="Instagram"
      style={{ color: 'rgba(255,255,255,0.65)', display: 'flex', transition: 'color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>

    {/* Twitter */}
    <a
      href="#"
      aria-label="Twitter"
      style={{ color: 'rgba(255,255,255,0.65)', display: 'flex', transition: 'color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    </a>
  </div>
)

/* ── main hero ────────────────────────────────────────────────── */
const HeroSection = () => {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = 'translateY(20px)'
      setTimeout(() => {
        contentRef.current.style.transition = 'opacity 0.85s ease, transform 0.85s ease'
        contentRef.current.style.opacity = '1'
        contentRef.current.style.transform = 'translateY(0)'
      }, 150)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: "'Outfit', sans-serif",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* ── text content ── */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          paddingLeft: '40px',
          paddingTop: '70px',
          paddingBottom: '80px',
        }}
      >
        {/* sub-heading */}
        <p
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: '13px',
            fontWeight: 300,
            letterSpacing: '0.04em',
            marginBottom: '12px',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Discover your place
        </p>

        {/* main heading */}
        <h1
          style={{
            color: '#fff',
            fontSize: '62px',
            lineHeight: 1.08,
            marginBottom: '36px',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          <span style={{ fontWeight: 300 }}>Explore The</span>
          <br />
          <span style={{ fontWeight: 300 }}>Best </span>
          <span style={{ fontWeight: 800 }}>Beautiful</span>
          <br />
          <span style={{ fontWeight: 800 }}>Beaches</span>
        </h1>

        {/* CTA button */}
        <div>
          <a
            href="#discover"
            style={{
              display: 'inline-block',
              padding: '10px 28px',
              fontSize: '13px',
              fontWeight: 400,
              color: '#fff',
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '0.06em',
              background: 'rgba(15,52,63,0.75)',
              border: '1px solid rgba(255,255,255,0.25)',
              textDecoration: 'none',
              transition: 'background 0.25s, border-color 0.25s',
              borderRadius: '1px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(15,52,63,0.75)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
          >
            Explore
          </a>
        </div>
      </div>

      {/* ── bottom-right card ── */}
      <CardPreview />

      {/* ── social icons ── */}
      <SocialIcons />
    </section>
  )
}

export default HeroSection
