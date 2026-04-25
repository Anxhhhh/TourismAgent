import React from 'react'

const Footer = () => (
  <footer id="contact" className="bg-teal-900 border-t border-white/5 pt-[72px]">
    <div className="max-w-[1600px] mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-[1.6fr_repeat(3,1fr)] gap-8 min-[560px]:gap-12 pb-16">
        {/* Brand */}
        <div>
          <a href="#hero" className="inline-flex items-center gap-2 text-[18px] font-semibold text-white mb-[18px]">
            <span className="text-[14px] text-teal-300">✦</span>
            Celestial<span className="text-teal-300">Voyager</span>
          </a>
          <p className="text-[13.5px] font-light leading-[1.75] text-white/40 mb-7 max-w-[260px]">
            AI-powered travel planning for the modern explorer. Discover the world,
            your way.
          </p>
          <div className="flex gap-2.5">
            {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((s) => (
              <a 
                key={s} 
                href="#" 
                className="w-[34px] h-[34px] flex items-center justify-center text-[12px] font-semibold bg-white/[0.06] border border-white/10 rounded-lg text-white/55 transition-all duration-200 hover:bg-white/[0.12] hover:text-white hover:border-white/25 hover:-translate-y-0.5" 
                aria-label={s}
              >
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
          <div key={col.heading} className="flex flex-col">
            <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase text-white/50 mb-5">{col.heading}</h4>
            <ul className="list-none flex flex-col gap-3 m-0 p-0">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13.5px] font-light text-white/50 transition-colors duration-200 hover:text-teal-300">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 py-5 flex flex-col min-[560px]:flex-row items-center justify-between gap-[6px] min-[560px]:gap-3 text-[12.5px] text-white/30 text-center min-[560px]:text-left">
        <p className="m-0">© {new Date().getFullYear()} CelestialVoyager. All rights reserved.</p>
        <p className="m-0">Made with ♥ for travellers worldwide</p>
      </div>
    </div>
  </footer>
)

export default Footer
