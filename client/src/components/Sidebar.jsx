import { Link, useLocation } from 'react-router'

const sideLinks = [
  { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
  { label: 'AI Concierge', icon: 'auto_awesome', path: '/concierge' },
  { label: 'Itineraries', icon: 'map', path: '/itinerary' },
  { label: 'Market Analytics', icon: 'insights', path: '/analytics' },
  { label: 'Settings', icon: 'settings', path: '#' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 rounded-r-[1.5rem] bg-[#0d1419] flex flex-col py-8 px-4 z-40 border-r border-[#1a242d] mt-16">
      {/* User Profile */}
      <div className="mb-10 px-4">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full border-2 border-[#7196a6]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFh3AxcIfzjfRjn0U15kEeORnKyu984QT6tA3AANPKRkCnZGQt-vpOLyyin_pIGXOxbCHc2FP2KeTkRcFfh5Cbw3PBU01g6OQyr2XaNu_bVwppqzd7_iUgdBbEUivBrBI5sRyA6DXN_kgoacR_mOYghviF0NAkNTpG5MIzgAhQRb7DCUYahUUqx75L9-QkVU9FOZPek7D29PzRPkzL17sm4RQgUcWD6lvePYPJvCNES3xZDzPL7wU6l5f7dGgjTmgq1NQrTv1X6A"
            alt="User avatar"
          />
          <div>
            <div className="text-sm font-bold text-[#dde3eb]">Voyager Elite</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-tighter">Premium Member</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 font-['Inter'] text-sm font-medium">
        {sideLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.label}
              to={link.path}
              className={
                isActive
                  ? 'flex items-center space-x-3 px-4 py-3 bg-[#a6ccdd]/10 text-[#a6ccdd] border-r-4 border-[#a6ccdd] transition-transform translate-x-1 rounded-l-xl'
                  : 'flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all duration-200 rounded-xl'
              }
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom CTA */}
      <div className="mt-auto space-y-4">
        <button className="w-full bg-gradient-to-r from-[#a6ccdd] to-[#7196a6] text-[#0a3542] font-bold py-3 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
          Book New Trip
        </button>
        <Link
          to="#"
          className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-slate-300 transition-all text-xs uppercase tracking-widest font-bold"
        >
          <span className="material-symbols-outlined">help_outline</span>
          <span>Help Center</span>
        </Link>
      </div>
    </aside>
  )
}
