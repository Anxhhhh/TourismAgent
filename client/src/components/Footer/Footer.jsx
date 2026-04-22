import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer id="contact" className="footer">
    <div className="container">
      <div className="footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-icon">✦</span>
            Celestial<span>Voyager</span>
          </a>
          <p className="footer__tagline">
            AI-powered travel planning for the modern explorer. Discover the world,
            your way.
          </p>
          <div className="footer__socials">
            {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          {
            heading: 'Explore',
            links: ['Destinations', 'Travel Guides', 'Trip Planner', 'AI Assistant', 'Blog'],
          },
          {
            heading: 'Company',
            links: ['About Us', 'Careers', 'Press Kit', 'Partners', 'Contact'],
          },
          {
            heading: 'Support',
            links: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
          },
        ].map((col) => (
          <div key={col.heading} className="footer__col">
            <h4 className="footer__col-heading">{col.heading}</h4>
            <ul className="footer__col-links">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="footer__col-link">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} CelestialVoyager. All rights reserved.</p>
        <p>Made with ♥ for travellers worldwide</p>
      </div>
    </div>
  </footer>
)

export default Footer
