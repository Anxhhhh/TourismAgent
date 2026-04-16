import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="bg-[#0d1419] text-[#dde3eb] font-['Inter']">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a6ccdd]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#b4c9db]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <h1
                className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-glow"
                style={{ fontFamily: '"Mona Sans", sans-serif' }}
              >
                Plan Your Trip <br />
                <span className="text-[#a6ccdd] italic">with AI</span>
              </h1>
              <p className="text-xl text-[#c1c7cb] leading-relaxed max-w-lg">
                Experience the next generation of travel. Our Digital Concierge crafts bespoke itineraries using advanced neural mapping and real-time market insights.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/dashboard">
                  <button className="bg-gradient-to-r from-[#a6ccdd] to-[#7196a6] text-[#0a3542] px-8 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl">
                    Start Planning
                  </button>
                </Link>
                <button className="text-[#dde3eb] px-8 py-4 rounded-xl font-bold hover:text-[#a6ccdd] transition-all flex items-center gap-2 group">
                  View Demo
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* AI Chat Preview Card */}
            <div className="lg:col-span-6">
              <div className="glass-panel border border-[#41484b]/20 rounded-[2rem] p-6 shadow-2xl relative">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#41484b]/10">
                  <div className="w-10 h-10 rounded-full bg-[#a6ccdd]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#a6ccdd]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Voyager AI Concierge</h3>
                    <p className="text-[10px] text-[#a6ccdd] uppercase tracking-widest">Active Insight Mode</p>
                  </div>
                </div>
                <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2f363b] shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-xs">person</span>
                    </div>
                    <div className="bg-[#161c22] p-4 rounded-2xl rounded-tl-none text-sm">
                      I want a 4-day trip to Kyoto focused on hidden temples and zen gardens. No crowds.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7196a6] shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-xs text-[#012e3b]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    </div>
                    <div className="glass-panel p-4 rounded-2xl rounded-tl-none text-sm border border-[#a6ccdd]/20">
                      Generating your bespoke Zen Kyoto Itinerary... I've identified 3 private garden villas and 5 remote temples in the Northern hills. Would you like to see the transit mapping?
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-[#080f14] border-none rounded-xl py-4 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#a6ccdd]/50 transition-all"
                    placeholder="Tell the Concierge your vision..."
                    type="text"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a6ccdd]">
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-8 bg-[#161c22]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[#a6ccdd] font-bold tracking-[0.2em] uppercase text-xs">Capabilities</span>
              <h2 className="text-4xl font-black mt-4" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                The Future of Exploration
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[600px]">
              {/* Feature 1 */}
              <div className="md:col-span-8 bg-[#1a2026] p-8 rounded-[2rem] border border-[#41484b]/10 flex flex-col justify-between group hover:border-[#a6ccdd]/30 transition-all">
                <div className="max-w-md">
                  <span className="material-symbols-outlined text-[#a6ccdd] text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <h3 className="text-2xl font-bold mb-4">Neural Travel Logic</h3>
                  <p className="text-[#c1c7cb]">Our AI doesn't just search; it understands preference nuance. It weighs seasonal weather, local events, and your unique personality to recommend experiences.</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <div className="relative w-full h-32 overflow-hidden rounded-xl">
                    <img
                      className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKQL95ZwAt7M6WouEGjrm2MsCLEWkG82EjJTe_uKOhCP6Jmo2D6wDUxRhrCkWJSgLSKutg2_3hQKZAxDwtf21AU-dBQGOhEI7KhK2GoD_OZ-gPZ9niFeH7vu3rvLl5OuA-DY7FJxffWyxWsWfZ3JN7HLKnsBGHE-WKzIvNvdLFzIfnPepamhMk8cmryzk2vyr3B5_TM1BgWjxuj2XvpXpckAktfREj-UPpeCSoz323dnYfR6eQjtSDIzaxlryY7Zz3kteLUohlSw"
                      alt="Neural network visualization"
                    />
                  </div>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="md:col-span-4 bg-[#7196a6] text-[#012e3b] p-8 rounded-[2rem] flex flex-col items-center text-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a6ccdd]/20 to-transparent" />
                <span className="material-symbols-outlined text-5xl mb-6">map</span>
                <h3 className="text-2xl font-bold mb-4">Living Itineraries</h3>
                <p className="text-[#012e3b]/80 text-sm">Dynamic maps that update in real-time based on flight delays or weather changes.</p>
              </div>
              {/* Feature 3 */}
              <div className="md:col-span-5 bg-[#2f363b] p-8 rounded-[2rem] border border-[#41484b]/10 flex flex-col justify-between">
                <span className="material-symbols-outlined text-[#adcbdc] text-4xl mb-4">insights</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Market Intelligence</h3>
                  <p className="text-[#c1c7cb] text-sm">Predictive pricing models tell you exactly when to book for the best premium experience value.</p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="md:col-span-7 glass-panel p-8 rounded-[2rem] border border-[#41484b]/20 flex gap-6 items-center overflow-hidden">
                <div className="w-1/3 shrink-0">
                  <img
                    className="rounded-2xl shadow-lg rotate-3 hover:rotate-0 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7u2vygAJfesU6CyOnR5tpqgDgR9f7ERTwLU911ZVqu5IH_R3-ghiBcM6l4IISpTKbOmog9Eika8N3lfUVyER54O44gSFIQDcFa58Epu81HqeGxDaJIIU9abvCAvdFe-CtsorBDKUfABd0Wj-j0OwNNLQAWZHDmbmleJ9X3NDl0heN5Hk-6-_xjdh4VfEgckprpLiru31ecDHtFWdF8_VGIZGveBoZX1HE_SPiWZDB241RlIJwEvV8lTSGCQLDm16J7b31pCf1Fw"
                    alt="Traveler community"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Voyager Collective</h3>
                  <p className="text-[#c1c7cb] text-sm">Connect with a network of elite travelers sharing exclusive access codes and hidden gems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-black mb-12" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                  Three Steps to <br /><span className="text-[#a6ccdd]">Ethereal Travel</span>
                </h2>
                <div className="space-y-12">
                  {[
                    { num: '01', title: 'Define Your Aura', desc: 'Whisper your travel desires to our AI. The more specific the mood, the deeper the discovery.' },
                    { num: '02', title: 'Refine the Map', desc: 'Review our neural-mapped suggestions. Swap, adjust, and layer your days with editorial precision.' },
                    { num: '03', title: 'Execute Seamlessly', desc: 'One-click reservations and a digital concierge that travels in your pocket 24/7.' },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full border border-[#a6ccdd] text-[#a6ccdd] flex items-center justify-center font-bold shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-[#c1c7cb]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-10 bg-[#a6ccdd]/20 blur-[100px] rounded-full" />
                <img
                  className="rounded-[3rem] relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2n9_ufNpl1so2ykgz05VPSwCGoFEXGAgBOvn6n5oG6p6uRRxaVSt3CYVK-ccdSN8NqUgft3I2BYHHmZHuSRJTflXTVT2E-uX4PVPE_ht9MPkDroKY5c70zcmw3H5Qc7Ub7r_F0Mh9HS7kxjLn0xfIa4X66J-PsD-k3UM3SblTzWGiGbRyymNls4sS9wnPp0O_BTN9NYSAsDiDf-6fWbBpGJng4Kk2iV4Wezs54FV9PH8f03ssa12xE5S7yqY9s59UKMOEh_4u4w"
                  alt="Futuristic traveler"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-8 bg-[#080f14]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: '"It found a private dinner in a Kyoto temple that wasn\'t on any blog. Truly felt like I had a personal fixer."', name: 'Elena Valance', role: 'Global Explorer', offset: false },
                { quote: '"The predictive analytics saved me $2,400 on my Amalfi coast booking. The AI knows exactly when the dip hits."', name: 'Marcus Chen', role: 'Executive Traveler', offset: true },
                { quote: '"Finally, an interface that feels as high-end as the hotels I\'m booking. No clutter, just pure travel magic."', name: 'Sarah Jenkins', role: 'Digital Nomad', offset: false },
              ].map((t) => (
                <div
                  key={t.name}
                  className={`p-8 glass-panel rounded-[2rem] border border-[#41484b]/10 ${t.offset ? 'md:translate-y-12 bg-[#242b30]' : ''}`}
                >
                  <p className="text-lg italic text-[#dde3eb] mb-8">{t.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#242b30]" />
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <p className="text-[10px] uppercase text-[#a6ccdd] tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#7196a6] to-[#264b5a] rounded-[3rem] p-16 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#0d1419]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl md:text-6xl font-black text-[#012e3b] mb-8 relative z-10" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
              Ready to Venture into <br />the Unknown?
            </h2>
            <Link to="/dashboard">
              <button className="bg-[#0d1419] text-[#dde3eb] px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-10 shadow-2xl">
                Begin Your Itinerary
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
