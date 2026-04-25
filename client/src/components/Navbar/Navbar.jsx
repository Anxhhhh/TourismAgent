import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scroll effect after 40px
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Discover', href: '#discover' },
    { label: 'Places', href: '#destinations' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    // Outer wrapper remains fixed to avoid layout jumps, but handles the padding/margin transition
    <div className={`fixed top-0 left-0 w-full z-[100] flex justify-center transition-all duration-500 ease-in-out ${scrolled ? 'pt-4 md:pt-6 px-4 md:px-6' : 'pt-0 px-0'}`}>
      
      {/* Inner Nav element morphs into a floating pill/card on scroll */}
      <nav className={`w-full transition-all duration-500 ease-in-out relative ${
        scrolled 
          ? 'max-w-[1000px] bg-[#0A0F1A]/30 backdrop-blur-md rounded-full shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] border border-teal-500/20 mx-auto'
          : 'max-w-full bg-transparent border-transparent mx-auto'
      }`}>
        
        {/* Content container adjusts padding smoothly */}
        <div className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out ${scrolled ? 'px-6 py-3 md:py-3.5' : 'px-6 md:px-12 py-6 md:py-8'}`}>
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 text-lg font-bold tracking-wider text-white whitespace-nowrap hover:text-teal-300 transition-colors duration-300">
            <span className="text-teal-400 text-base shadow-teal-400/50 drop-shadow-md">✦</span>
            Celestial<span className="text-teal-400 font-light">Voyager</span>
          </a>

          {/* Desktop Links (Centered) */}
          <ul className="hidden md:flex items-center justify-center gap-10 m-0 p-0 list-none absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`group relative text-sm font-medium tracking-wider transition-colors duration-300 py-2 ${activeLink === link.label ? 'text-white' : 'text-white/60 hover:text-white'}`}
                  onClick={() => setActiveLink(link.label)}
                >
                  {link.label}
                  {/* Underline Hover Animation */}
                  <span className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-teal-400 to-teal-200 transition-all duration-300 ease-out ${activeLink === link.label ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section: CTA */}
          <a href="#discover" className={`hidden md:inline-flex shrink-0 items-center justify-center text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] ${scrolled ? 'px-6 py-2.5' : 'px-8 py-3'}`}>
            Start Journey
          </a>

          {/* Mobile hamburger button */}
          <button
            className="flex md:hidden flex-col gap-[6px] bg-transparent border-none cursor-pointer p-2 z-50 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-[24px] h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${menuOpen ? 'rotate-45 translate-y-[8px]' : 'group-hover:bg-teal-300'}`} />
            <span className={`block w-[24px] h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${menuOpen ? 'opacity-0 translate-x-2' : 'group-hover:bg-teal-300'}`} />
            <span className={`block w-[24px] h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${menuOpen ? '-rotate-45 -translate-y-[8px]' : 'group-hover:bg-teal-300'}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            menuOpen ? 'max-h-[500px] opacity-100 mt-3 md:mt-4 pointer-events-auto' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          {/* We duplicate the styling of the main navbar container for the dropdown so they match beautifully */}
          <div className="bg-[#0A0F1A]/95 backdrop-blur-2xl rounded-2xl border border-teal-500/20 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] mx-4 mb-4 flex flex-col p-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`py-4 text-base font-medium tracking-wide border-b border-white/5 transition-colors ${activeLink === link.label ? 'text-teal-400' : 'text-white/70 hover:text-white'}`}
                onClick={() => { setActiveLink(link.label); setMenuOpen(false) }}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#discover" 
              className="mt-6 px-6 py-4 text-sm font-semibold tracking-wider text-white text-center bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl shadow-lg shadow-teal-500/25"
            >
              Start Journey
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
