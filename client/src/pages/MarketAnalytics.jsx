import { Link } from 'react-router'
import Footer from '../components/Footer'

const sideLinks = [
  { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
  { label: 'AI Concierge', icon: 'auto_awesome', path: '/concierge' },
  { label: 'Itineraries', icon: 'map', path: '/itinerary' },
  { label: 'Market Analytics', icon: 'insights', path: '/analytics', active: true },
  { label: 'Settings', icon: 'settings', path: '#' },
]

const destinations = [
  {
    name: 'Paris Prime',
    subLabel: 'Europe Hub Alpha',
    volume: '42.5k',
    price: '$1,240/nt',
    trend: '+18.2%',
    positive: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDqNf4KGOg5w0IXhZIWvl9fniWEUp7HRrGKYtZqH-YJLyTmg8dyM0oQeA27thTv84__yokXZS0KI0NniVakJ1bPmHSVcLBXMsDDx9yLOHziKRsvAtyGO2f9NOjcQ0PzWmNryk8tOiMa69dXUrATaBU-b0skH-DPVk-tufkPNLgifwvZ5ZrqYJ1eGU9d1MZ5r1UwSvrmXXCzs9kRaFFKiiov2LrqEltoIaKVauEpTFb3wykDeLEVdYPM5aR14kzNFxnuuJNm6WRnQ',
  },
  {
    name: 'Dubai Oasis',
    subLabel: 'MEA Strategic Center',
    volume: '28.9k',
    price: '$2,100/nt',
    trend: '+5.4%',
    positive: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDqomAwZzKJrTxFYDyAMTNQcTVYOv8gtFUAx_JIYarKUI5F7z_HLu9Ky61bYA6yvswW2s0iLYRra2OEcUEsV2L05v64Btl1r8JV39TOyOr7n4cUCR_DX4rGdcfUqjCRh9mSlCJbrjkkpwCHuKXUA3vWuSvNrd_sz2OXdNjvP3c0w7qTZz-d6nIQ_Ei1pvDIvOFIyLVaqrUcPfZm0yMxtcDsW4FQJbeYL8-adY5cOAUstVPOinoqXI3p1Q-t8BZnQIAU7G0PnHOOw',
  },
  {
    name: 'Kyoto Zenith',
    subLabel: 'APAC Cultural Anchor',
    volume: '15.2k',
    price: '$980/nt',
    trend: '-2.1%',
    positive: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC87F06YZPq6-gxn27cUPkMpEqBmoCJeEoidTma8ojJIqXIGft8LAS9vggg1mF1c-t9cGnoQccXGdRWVWiYPgeprosSGlYEVpCd2uok7vFAZW4pGSjO8Q4uPTDj1mJ1G2lwFzViFwWlZqfjVbDYTFhAADhOIMap4L9xz3wT9Ar_o25RcYrFafRvaKvM-lDITQ-mHIgISenz4Xf2aymh-ZsNWf_fJ4oTQx_ZJxkyuj2fJ-JY8it3rQn6EtcbWwIFuYI6BpyBnTxwhQ',
  },
]

export default function MarketAnalytics() {
  return (
    <div className="bg-[#0d1419] text-[#dde3eb] font-['Inter']">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 rounded-r-[1.5rem] bg-[#0d1419] flex flex-col py-8 px-4 z-50 border-r border-[#41484b]/10">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#a6ccdd] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0a3542]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div>
              <h2 className="font-['Manrope'] font-bold text-[#dde3eb] leading-tight">Voyager Elite</h2>
              <p className="text-[10px] uppercase tracking-widest text-[#a6ccdd] font-semibold">Premium Member</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          {sideLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={
                link.active
                  ? 'flex items-center gap-4 py-3 px-4 rounded-xl bg-[#a6ccdd]/10 text-[#a6ccdd] border-r-4 border-[#a6ccdd] translate-x-1 transition-transform'
                  : 'flex items-center gap-4 py-3 px-4 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all duration-200'
              }
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span className="font-['Inter'] text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-6">
          <button className="w-full bg-gradient-to-r from-[#a6ccdd] to-[#7196a6] text-[#0a3542] py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-opacity">
            Book New Trip
          </button>
          <div className="pt-6 border-t border-[#41484b]/20">
            <a className="flex items-center gap-4 py-2 px-4 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">help_outline</span>
              <span className="font-['Inter'] text-sm font-medium">Help Center</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-[#0d1419]/80 backdrop-blur-md px-8 py-4 flex justify-between items-center max-w-[1920px] mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black text-[#a6ccdd] tracking-widest uppercase" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
              Celestial Voyager
            </span>
            <nav className="hidden md:flex gap-6 items-center">
              {[
                { label: 'Discover', path: '/', active: false },
                { label: 'Planner', path: '/itinerary', active: false },
                { label: 'Insights', path: '/analytics', active: true },
                { label: 'Community', path: '#', active: false },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={
                    link.active
                      ? 'text-[#a6ccdd] border-b-2 border-[#a6ccdd] pb-1 font-bold tracking-tight'
                      : 'text-slate-400 hover:text-slate-200 transition-colors font-bold tracking-tight'
                  }
                  style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:bg-white/5 rounded-full transition-all duration-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-[#41484b]/30">
              <img
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXl2lUGjN_ngFyKl-K8no2NDA0iC4kfjDdh84hVZBUScBI6SpbPI3ZiGjWRk8hbKoBhpXOUu7J-5reh93isAwIOSBwOFg0jAPOgh6TxFQ6oj4f6xCAYMJsUQLw-SN_ke_xjDKnbENmebJP3et3Xv22ZuCbfuuBHL6PRvo1pIJ0bmKCLjEAh51DajZI1NJNlhV42hFFDJ6if_tptVxMOyMBmfhlFBn_eNNeSJvTRFU7qikoCyb8JoAKzo5OLAej7DB95wAAJ-2QYQ"
              />
              <span className="material-symbols-outlined text-slate-400">account_circle</span>
            </div>
          </div>
        </header>

        <div className="px-10 py-8 space-y-10">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-[2rem] bg-[#161c22] p-12">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-5xl font-black tracking-tight text-[#dde3eb] mb-4" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                Market Intelligence <span className="text-[#a6ccdd]">2024</span>
              </h1>
              <p className="text-[#c1c7cb] text-lg leading-relaxed mb-8">
                Analyze real-time travel patterns, surging pricing indices, and traveler sentiment through our proprietary AI concierge engine.
              </p>
              <div className="flex gap-4">
                <div className="bg-[#242b30] px-6 py-3 rounded-full flex items-center gap-3 border border-[#41484b]/20">
                  <span className="material-symbols-outlined text-[#a6ccdd]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                  <span className="font-bold text-[#dde3eb]">+14.2% Market Growth</span>
                </div>
                <div className="bg-[#242b30] px-6 py-3 rounded-full flex items-center gap-3 border border-[#41484b]/20">
                  <span className="material-symbols-outlined text-[#b4c9db]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  <span className="font-bold text-[#dde3eb]">Peak Demand Alert</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#a6ccdd]/10 blur-[100px] rounded-full" />
            <div className="absolute -right-40 -bottom-20 w-80 h-80 bg-[#b4c9db]/5 blur-[80px] rounded-full" />
          </section>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Active Travelers', value: '1,284,092', trend: '↑ 4%', color: 'text-[#a6ccdd]' },
              { label: 'Avg. Itinerary Value', value: '$8,420', trend: '↑ 12%', color: 'text-[#a6ccdd]' },
              { label: 'Retention Rate', value: '94.8%', trend: '~ 0.2%', color: 'text-[#b4c9db]' },
              { label: 'Sentiment Score', value: '4.9/5.0', trend: '↑ 0.1', color: 'text-[#a6ccdd]' },
            ].map((m) => (
              <div key={m.label} className="bg-[#080f14] p-6 rounded-xl border border-[#41484b]/10 group hover:border-[#a6ccdd]/40 transition-colors">
                <p className="text-xs uppercase tracking-widest text-[#c1c7cb] mb-2">{m.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-[#dde3eb]">{m.value}</h3>
                  <span className={`text-sm font-medium ${m.color}`}>{m.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Analytics Grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Demand Chart */}
            <div className="col-span-12 lg:col-span-8 bg-[#1a2026] p-8 rounded-[2rem] relative overflow-hidden">
              <div className="flex justify-between items-center mb-10 relative z-10">
                <div>
                  <h4 className="text-xl font-bold text-[#dde3eb]">Travel Demand Trends</h4>
                  <p className="text-[#c1c7cb] text-sm">Aggregated bookings across global luxury nodes</p>
                </div>
                <div className="flex bg-[#2f363b] rounded-full p-1">
                  <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#a6ccdd] text-[#0a3542]">12 Months</button>
                  <button className="px-4 py-1.5 rounded-full text-xs font-bold text-[#c1c7cb] hover:text-[#dde3eb]">30 Days</button>
                </div>
              </div>
              {/* Bar Chart */}
              <div className="h-64 flex items-end justify-between gap-2 relative z-10 px-4">
                {[
                  { bg: 'h-32', fill: 'h-1/2', label: 'JAN' },
                  { bg: 'h-40', fill: 'h-3/5', label: 'FEB' },
                  { bg: 'h-24', fill: 'h-1/4', label: 'MAR' },
                  { bg: 'h-52', fill: 'h-4/5', label: 'APR' },
                  { bg: 'h-48', fill: 'h-2/3', label: 'MAY' },
                  { bg: 'h-56', fill: 'h-full', label: 'JUN' },
                  { bg: 'h-64', fill: 'h-5/6', label: 'JUL' },
                ].map((bar) => (
                  <div key={bar.label} className={`w-full bg-[#a6ccdd]/20 ${bar.bg} rounded-t-lg relative group`}>
                    <div className={`w-full ${bar.fill} bg-[#a6ccdd] absolute bottom-0 rounded-t-lg`} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest text-[#c1c7cb] px-4 font-bold">
                {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            {/* Sentiment Card */}
            <div className="col-span-12 lg:col-span-4 glass-panel p-8 rounded-[2rem] border border-white/5 flex flex-col">
              <h4 className="text-xl font-bold text-[#dde3eb] mb-6">Review Sentiment</h4>
              <div className="space-y-6 flex-1">
                {[
                  { label: 'Exceptional', pct: 82, color: 'bg-[#a6ccdd]', textColor: 'text-[#a6ccdd]' },
                  { label: 'Satisfactory', pct: 14, color: 'bg-[#adcbdc]', textColor: 'text-[#adcbdc]' },
                  { label: 'Neutral', pct: 4, color: 'bg-[#b4c9db]', textColor: 'text-[#b4c9db]' },
                ].map((row) => (
                  <div key={row.label} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#dde3eb] font-medium">{row.label}</span>
                      <span className={`${row.textColor} font-bold`}>{row.pct}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#2f363b] rounded-full overflow-hidden">
                      <div className={`h-full ${row.color}`} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-sm text-[#c1c7cb] italic leading-relaxed">
                  "The AI concierge accuracy has improved traveler satisfaction by 22% in the Q3 window."
                </p>
                <p className="text-xs text-[#a6ccdd] font-bold mt-2 uppercase tracking-tighter">— Automated Insight</p>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="col-span-12 bg-[#161c22] rounded-[2rem] p-10">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-[#dde3eb]">Regional Pricing Index</h4>
                  <p className="text-[#c1c7cb]">Comparative rates for primary celestial hubs</p>
                </div>
                <button className="flex items-center gap-2 text-[#a6ccdd] font-bold hover:gap-3 transition-all">
                  <span>View Full Report</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-widest text-[#c1c7cb] border-b border-[#41484b]/20">
                      <th className="pb-4 font-bold">Hub Destination</th>
                      <th className="pb-4 font-bold text-center">Volume</th>
                      <th className="pb-4 font-bold text-center">Avg Price</th>
                      <th className="pb-4 font-bold text-right">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#41484b]/10">
                    {destinations.map((dest) => (
                      <tr key={dest.name}>
                        <td className="py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#2f363b]">
                              <img alt={dest.name} className="w-full h-full object-cover" src={dest.img} />
                            </div>
                            <div>
                              <p className="font-bold text-[#dde3eb]">{dest.name}</p>
                              <p className="text-xs text-[#c1c7cb]">{dest.subLabel}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-6 text-center text-[#dde3eb] font-medium">{dest.volume}</td>
                        <td className="py-6 text-center text-[#dde3eb] font-medium">{dest.price}</td>
                        <td className="py-6 text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${dest.positive ? 'text-[#a6ccdd] bg-[#a6ccdd]/10' : 'text-[#b4c9db] bg-[#b4c9db]/10'}`}>
                            {dest.trend}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full py-12 px-8 bg-[#050b10] mt-20">
          <div className="bg-[#1a242d] h-[1px] mb-8" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-slate-200 font-bold mb-2">Celestial Voyager</span>
              <p className="font-['Inter'] text-xs uppercase tracking-widest text-slate-400">© 2024 Celestial Voyager. Part of the Digital Concierge Network.</p>
            </div>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service', 'API Access', 'Sustainability'].map((label) => (
                <a key={label} className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#a6ccdd] transition-opacity opacity-80 hover:opacity-100" href="#">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
