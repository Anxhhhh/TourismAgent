import { Link, useLocation } from 'react-router'

const navLinks = [
  { label: 'Discover', path: '/' },
  { label: 'Planner', path: '/itinerary' },
  { label: 'Insights', path: '/analytics' },
  { label: 'Community', path: '#' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="bg-[#0d1419]/80 backdrop-blur-md sticky top-0 z-50 shadow-[0_20px_40px_rgba(5,11,16,0.4)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1920px] mx-auto">
        <Link
          to="/"
          className="text-2xl font-black text-[#a6ccdd] tracking-widest uppercase"
          style={{ fontFamily: '"Mona Sans", sans-serif' }}
        >
          Celestial Voyager
        </Link>

        <nav className="hidden md:flex items-center space-x-8 font-bold tracking-tight" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.label}
                to={link.path}
                className={
                  isActive
                    ? 'text-[#a6ccdd] border-b-2 border-[#a6ccdd] pb-1'
                    : 'text-slate-400 hover:text-slate-200 transition-colors'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-6">
          <button className="material-symbols-outlined text-slate-400 cursor-pointer hover:bg-white/5 p-2 rounded-full transition-all">
            notifications
          </button>
          <Link to="/dashboard">
            <button className="material-symbols-outlined text-slate-400 cursor-pointer hover:bg-white/5 p-2 rounded-full transition-all">
              account_circle
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#1a242d] to-transparent h-[1px] w-full" />
    </header>
  )
}
