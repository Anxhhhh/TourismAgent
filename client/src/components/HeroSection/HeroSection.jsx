import React, { useEffect, useRef } from 'react'
import heroBg from '../../assets/images/home1.jpg'

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
    // Entrance animations
    const animate = (el, delay) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.85s ease, transform 0.85s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        
        // Remove the transition delay after animation finishes 
        // to allow smooth, instant parallax tracking.
        setTimeout(() => {
          if (el) el.style.transition = 'none'
        }, 850)
      }, delay)
    }
    
    animate(leftRef.current, 150)
    animate(rightRef.current, 450)

    // Scroll handler for Parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Stop tracking once it scrolls out of view (~1000px)
      if (scrollY > 1200) return 

      // Left column moves left
      if (leftRef.current && leftRef.current.style.transition === 'none') {
        // Translate horizontally based on scroll depth, and fade out opacity slightly
        leftRef.current.style.transform = `translate3d(-${scrollY * 0.35}px, 0, 0)`
        leftRef.current.style.opacity = `${1 - scrollY / 700}`
      }
      
      // Right column moves right
      if (rightRef.current && rightRef.current.style.transition === 'none') {
        rightRef.current.style.transform = `translate3d(${scrollY * 0.45}px, 0, 0)`
        rightRef.current.style.opacity = `${1 - scrollY / 700}`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center group font-primary">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat scale-105 transition-transform duration-[8s] ease-in-out group-hover:scale-110 will-change-transform" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,31,38,0.92)] via-[rgba(10,31,38,0.65)] to-[rgba(10,31,38,0.20)] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)] z-10" />

      {/* Two-column content */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 md:px-6 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[100px] items-center">

        {/* ── Left column ── */}
        <div ref={leftRef}>
          <p className="inline-flex items-center gap-[10px] text-[13px] text-white/65 tracking-[0.14em] uppercase mb-[22px]">
            <span className="w-[7px] h-[7px] rounded-full bg-teal-300 animate-pulse-glow" />
            Discover your perfect place
          </p>

          <h1 className="text-[clamp(40px,10vw,64px)] lg:text-[clamp(52px,7vw,96px)] leading-[1.03] tracking-tight mb-[28px]">
            <span className="font-light text-white">Explore The</span>
            <br />
            <span className="font-light text-white">Best </span>
            <span className="font-[800] text-white">Beautiful</span>
            <br />
            <span className="font-[800] bg-gradient-to-br from-teal-200 to-teal-300 bg-clip-text text-transparent">Beaches</span>
          </h1>

          <p className="text-[15px] lg:text-[17px] font-light leading-[1.8] text-white/60 mb-10">
            AI-powered travel planning tailored to you. Discover hidden gems, curated
            itineraries, and unforgettable experiences around the globe.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-[60px]">
            <a href="#discover" className="inline-flex items-center gap-[10px] px-8 py-[15px] text-[15px] font-medium tracking-[0.03em] text-white bg-gradient-to-br from-teal-500 to-teal-400 rounded-xl shadow-[0_6px_24px_rgba(23,100,117,0.45)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(23,100,117,0.65)] transition-all">
              <span>Start Exploring</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" className="inline-flex items-center gap-[10px] px-8 py-[15px] text-[15px] font-medium text-white/85 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl hover:bg-white/15 hover:border-white/35 hover:-translate-y-1 transition-all">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              Watch Story
            </a>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-0">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-0 lg:gap-7">
                <div>
                  <span className="block text-[28px] lg:text-[34px] font-bold text-white leading-none tracking-tight">{s.value}</span>
                  <span className="block text-[12px] text-white/50 tracking-[0.08em] uppercase mt-1.5">{s.label}</span>
                </div>
                {i < stats.length - 1 && <span className="hidden lg:block w-[1px] h-10 bg-white/15 mx-8 shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="hidden lg:flex flex-col items-end gap-5" ref={rightRef}>

          {/* Weather pill */}
          <div className="glass-card inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[13.5px] text-white/75 self-end whitespace-nowrap">
            <span className="text-[20px]">☀️</span>
            <div>
              <div className="text-[11px] text-white/45 tracking-[0.08em] uppercase">Current in Bali</div>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[17px] font-bold text-white">28°C</span>
                <span className="text-[12.5px] text-white/55">— Perfect weather</span>
              </div>
            </div>
          </div>

          {/* Main floating info card */}
          <div className="glass-card w-full max-w-[380px] p-7 pb-6 rounded-[20px] flex flex-col gap-5 animate-float">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-teal-300">
                <span className="w-[5px] h-[5px] rounded-full bg-green-400 animate-pulse-glow" />
                AI Curated
              </div>
              <span className="text-[10.5px] font-semibold tracking-wider text-white/40 uppercase bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                Top Picks 2025
              </span>
            </div>

            <div>
              <div className="text-[22px] font-bold leading-tight text-white">
                Best places to <span className="text-teal-300">visit</span> this season
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {topSpots.map((s) => (
                <div key={s.name} className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[20px]">{s.emoji}</span>
                    <div>
                      <div className="text-[14px] font-medium text-white">{s.name}</div>
                      <div className="text-[11.5px] text-white/40 mt-[1px]">{s.sub}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-gold-400 bg-gold-400/10 px-2 py-1 rounded-full">{s.badge}</span>
                </div>
              ))}
            </div>

            <a href="#destinations" className="inline-flex items-center justify-center w-full p-3.5 text-[14px] font-medium text-white bg-gradient-to-br from-teal-600 to-teal-500 rounded-xl gap-2 hover:shadow-[0_8px_24px_rgba(23,100,117,0.5)] hover:-translate-y-[1px] transition-all">
              View all destinations
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex absolute bottom-9 left-[clamp(20px,3vw,40px)] z-30 items-center gap-3.5">
        {[
          { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', fill: true },
          { label: 'Instagram', isInsta: true },
          { label: 'Twitter', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z', fill: true },
        ].map((s) => (
          <a key={s.label} href="#" aria-label={s.label} className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white/10 border border-white/10 text-white/55 hover:bg-white/20 hover:text-white hover:border-white/30 hover:-translate-y-0.5 transition-all">
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
      <div className="hidden lg:flex absolute right-[clamp(20px,2.5vw,36px)] top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2.5">
        <div className="relative w-[1px] h-[70px] bg-gradient-to-b from-transparent to-white/40 overflow-hidden">
          <div className="absolute top-[-100%] left-0 w-full h-full bg-gradient-to-b from-transparent via-teal-300 to-transparent animate-slide-down" />
        </div>
        <span className="text-[10px] uppercase text-white/35 tracking-[0.2em]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </section>
  )
}

export default HeroSection
