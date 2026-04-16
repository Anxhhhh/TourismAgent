import { Link } from 'react-router'
import Navbar from '../components/Navbar'

const sideLinks = [
  { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
  { label: 'AI Concierge', icon: 'auto_awesome', path: '/concierge', active: true },
  { label: 'Itineraries', icon: 'map', path: '/itinerary' },
  { label: 'Market Analytics', icon: 'insights', path: '/analytics' },
]

export default function AIConcierge() {
  return (
    <div className="bg-[#0d1419] text-[#dde3eb] font-['Inter']">
      <Navbar />
      <main className="flex h-[calc(100vh-73px)] overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-[#0d1419] h-full w-64 flex flex-col py-8 px-4 z-40 border-r border-[#1a242d]">
          <div className="mb-10 px-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#7196a6] flex items-center justify-center text-[#012e3b] font-bold">VE</div>
              <div>
                <div className="text-sm font-bold text-[#dde3eb]">Voyager Elite</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Premium Member</div>
              </div>
            </div>
            <Link to="/dashboard">
              <button className="w-full py-3 px-4 bg-gradient-to-r from-[#a6ccdd] to-[#7196a6] text-[#0a3542] font-bold rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95 shadow-lg">
                <span className="material-symbols-outlined text-sm">add</span>
                Book New Trip
              </button>
            </Link>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto px-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-600 px-4 mb-4">Main Menu</div>
            {sideLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={
                  link.active
                    ? 'flex items-center gap-3 px-4 py-3 bg-[#a6ccdd]/10 text-[#a6ccdd] border-r-4 border-[#a6ccdd] rounded-l-xl translate-x-1 transition-transform'
                    : 'flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-xl transition-all duration-200'
                }
              >
                <span className="material-symbols-outlined" style={link.active ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  {link.icon}
                </span>
                <span className="font-['Inter'] text-sm font-medium">{link.label}</span>
              </Link>
            ))}
            <div className="pt-8">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-600 px-4 mb-4">Recent Trips</div>
              {['Moonlit Kyoto Expedition', 'Amalfi Coast Luxury Escape', 'Atacama Stargazing Tour'].map((trip) => (
                <a key={trip} className="block px-4 py-2 text-xs text-slate-400 hover:text-[#a6ccdd] transition-colors truncate" href="#">
                  {trip}
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-auto px-4 border-t border-[#1a242d] pt-6">
            <a className="flex items-center gap-3 py-3 text-slate-500 hover:text-[#a6ccdd] transition-colors" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm">Settings</span>
            </a>
            <a className="flex items-center gap-3 py-3 text-slate-500 hover:text-[#a6ccdd] transition-colors" href="#">
              <span className="material-symbols-outlined">help_outline</span>
              <span className="text-sm">Help Center</span>
            </a>
          </div>
        </aside>

        {/* Chat Canvas */}
        <section className="flex-1 flex flex-col relative overflow-hidden bg-[#0d1419]">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#a6ccdd]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-[#adcbdc]/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-12 scroll-smooth">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* User Message */}
              <div className="flex justify-end items-start gap-4">
                <div className="max-w-[80%]">
                  <div className="bg-[#242b30] p-5 rounded-2xl rounded-tr-none text-[#dde3eb] leading-relaxed editorial-shadow">
                    Suggest a 3-day luxury itinerary for Kyoto that focuses on traditional tea ceremonies and hidden temple gardens. I want to avoid the main tourist crowds.
                  </div>
                  <div className="text-[10px] text-slate-500 mt-2 text-right uppercase tracking-widest">Sent 10:42 AM</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_1jI0vXHpIkM7iFbcRHdV3NyLUF8nq6wDkwll4N64NoXSQlvk1CeRfAMHhObhPt3DFkTMBusOK2siXO-NWtrW9_IPzAL8tVhNrHc68JDBw8T-2iQgfO8MCPjgchLynzOUO9E_wzlqHYUjM_h0xMNIUMv0kTp9VVGi22g9AfX6VosqD8j2FSLz--xBJlkyW_R3PPZMDvbnuQsvx0yLLvcPwkGlwAJC52HMM6AZlfNgrccfVDGJjKmbQQd7jUMyLMhCHyUOuNXfbA"
                    alt="User"
                  />
                </div>
              </div>

              {/* AI Message */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a6ccdd] to-[#adcbdc] flex items-center justify-center shrink-0 shadow-lg">
                  <span className="material-symbols-outlined text-[#012e3b]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <div className="max-w-[85%] space-y-6">
                  <div className="glass-panel p-6 rounded-2xl rounded-tl-none text-[#dde3eb] leading-relaxed border border-white/5 editorial-shadow">
                    <p className="mb-4">
                      Kyoto reveals its soul in the quiet corners of the northern hills. For a bespoke experience focused on "Wabi-Sabi" and architectural elegance, I've curated a three-day journey that bypasses the crowds of Gion and Arashiyama.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      {/* Day 1 Hero */}
                      <div className="group relative overflow-hidden rounded-2xl bg-[#080f14] aspect-video col-span-2">
                        <img
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx1cL_LMLVq87VqXTgaNJUIOoZzQFcL9w0eQStYIqAjGkbVgvL87PSPPdz5s75crxGvvIRF-m7T-xC7TLnJAv_iQn1gxSnxzg4Ik97QHkD9t3Zf7jjPK0zNFwM_rnSonRnPTkyYdSGzOd61aWIj1mbW5a7AFCA9iefUIFrhgM5OO2L-2_at_Ud8LkO6881EqwdSoWMze0B-T60GnJyyjOHndlwG3vJkM9Yd33VPDxVsNL7MFtEMNSNlk0Ear-a2xixpHZUdsx6Ww"
                          alt="Zen garden"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080f14] via-transparent to-transparent" />
                        <div className="absolute bottom-0 p-6">
                          <div className="text-xs font-bold text-[#a6ccdd] uppercase tracking-[0.2em] mb-1">Day One</div>
                          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: '"Mona Sans", sans-serif' }}>The Moss Garden Sanctuary</h3>
                          <p className="text-sm text-slate-300 mt-2 line-clamp-2">
                            Experience the ethereal beauty of Saiho-ji, accessible only by prior meditation and calligraphy participation.
                          </p>
                        </div>
                      </div>

                      {/* Stay Card */}
                      <div className="bg-[#080f14] p-5 rounded-2xl border border-[#41484b]/10">
                        <div className="flex justify-between items-start mb-4">
                          <span className="material-symbols-outlined text-[#a6ccdd]">bed</span>
                          <span className="text-[10px] bg-[#a6ccdd]/10 text-[#a6ccdd] px-2 py-1 rounded-full font-bold">RECOMMENDED STAY</span>
                        </div>
                        <h4 className="font-bold text-lg mb-1">Aman Kyoto</h4>
                        <p className="text-xs text-slate-400 mb-4">Secret forest enclave near Kinkaku-ji</p>
                        <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-lg transition-colors">VIEW DETAILS</button>
                      </div>

                      {/* Dining Card */}
                      <div className="bg-[#080f14] p-5 rounded-2xl border border-[#41484b]/10">
                        <div className="flex justify-between items-start mb-4">
                          <span className="material-symbols-outlined text-[#a6ccdd]">restaurant</span>
                          <span className="text-[10px] bg-[#adcbdc]/10 text-[#adcbdc] px-2 py-1 rounded-full font-bold">PRIVATE EXPERIENCE</span>
                        </div>
                        <h4 className="font-bold text-lg mb-1">Shigetsu Zen Cuisine</h4>
                        <p className="text-xs text-slate-400 mb-4">Plant-based temple dining within Tenryu-ji</p>
                        <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-lg transition-colors">BOOK PRIVATE CHEF</button>
                      </div>
                    </div>
                  </div>

                  {/* Follow-up chips */}
                  <div className="flex flex-wrap gap-3">
                    {['Adjust for a higher budget', 'Show transportation options', 'Add a day in Nara'].map((chip) => (
                      <button
                        key={chip}
                        className="px-4 py-2 bg-[#242b30] rounded-full text-xs font-medium hover:bg-[#a6ccdd] hover:text-[#0a3542] transition-all duration-300"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 md:p-10 bg-gradient-to-t from-[#0d1419] via-[#0d1419]/95 to-transparent">
            <div className="max-w-4xl mx-auto relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#a6ccdd]/30 to-[#adcbdc]/30 rounded-2xl blur opacity-30 group-focus-within:opacity-100 transition-opacity" />
              <div className="relative flex items-end gap-2 bg-[#080f14] p-2 rounded-2xl border border-[#41484b]/20 shadow-2xl">
                <button className="p-3 text-slate-500 hover:text-[#a6ccdd] transition-colors">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <textarea
                  className="flex-1 bg-transparent border-none focus:outline-none text-[#dde3eb] py-3 resize-none max-h-48 placeholder-slate-600 font-medium"
                  placeholder="Where should your next story begin?"
                  rows={1}
                />
                <div className="flex items-center gap-2 pr-2 pb-1">
                  <button className="w-10 h-10 rounded-xl bg-[#a6ccdd] text-[#0a3542] flex items-center justify-center transition-transform active:scale-90 hover:shadow-lg">
                    <span className="material-symbols-outlined">arrow_upward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 text-[10px] text-slate-600 uppercase tracking-widest font-medium">
              Celestial AI can provide bespoke recommendations but always verify critical travel details.
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
