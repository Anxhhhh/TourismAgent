import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Discover', 'Places', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        fontFamily: "'Outfit', sans-serif",
        background: scrolled ? 'rgba(9,34,42,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'background 0.4s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          color: '#fff',
          fontSize: '16px',
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        Travel
      </a>

      {/* Nav Links */}
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link, i) => (
          <li key={link}>
            <a
              href="#"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: "'Outfit', sans-serif",
                textDecoration: 'none',
                color: i === 0 ? '#fff' : 'rgba(255,255,255,0.7)',
                borderBottom: i === 0 ? '2px solid #fff' : 'none',
                paddingBottom: i === 0 ? '2px' : '0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { if (i !== 0) e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { if (i !== 0) e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
