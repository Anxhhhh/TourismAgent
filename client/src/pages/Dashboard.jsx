import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Dashboard() {
  return (
    <div className="bg-[#0d1419] text-[#dde3eb] font-['Inter']">
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 lg:p-12 max-w-[1600px]">
          {/* Header */}
          <section className="mb-12">
            <h1 className="text-5xl font-black text-[#dde3eb] tracking-tight mb-2" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
              Welcome back, <span className="text-[#a6ccdd]">Alexandre</span>.
            </h1>
            <p className="text-[#c1c7cb] font-['Inter'] text-lg max-w-2xl opacity-80">
              Your next adventure to the Swiss Alps begins in 14 days. We've optimized your transit routes.
            </p>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-[#161c22] rounded-[1.5rem] p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">public</span>
              </div>
              <div className="text-slate-500 uppercase text-[10px] tracking-widest font-bold mb-4">Total Explorations</div>
              <div className="text-5xl font-black text-[#dde3eb] mb-2">24</div>
              <div className="flex items-center text-[#a6ccdd] text-xs font-bold">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                <span>+3 this year</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1a2026] rounded-[1.5rem] p-8 border border-[#41484b]/10">
              <div className="flex justify-between items-start mb-4">
                <div className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">Upcoming Journeys</div>
                <span className="bg-[#7196a6]/20 text-[#c2e8fa] px-2 py-1 rounded text-[10px] font-bold">ACTIVE</span>
              </div>
              <div className="text-5xl font-black text-[#dde3eb] mb-2">03</div>
              <div className="text-[#c1c7cb] text-xs font-medium">Next: Zermatt, Switzerland</div>
            </div>
            {/* Card 3 – Glass */}
            <div className="glass-panel rounded-[1.5rem] p-8 border border-[#a6ccdd]/20 shadow-2xl">
              <div className="text-[#a6ccdd] uppercase text-[10px] tracking-widest font-bold mb-4">Investment in Memory</div>
              <div className="text-5xl font-black text-[#dde3eb] mb-2">$12.4k</div>
              <div className="w-full bg-[#2f363b] h-1 rounded-full overflow-hidden">
                <div className="bg-[#a6ccdd] h-full w-[65%]" />
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-slate-500 font-bold">
                <span>ANNUAL BUDGET</span>
                <span>65% USED</span>
              </div>
            </div>
          </section>

          {/* Saved Itineraries */}
          <section className="mb-12">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-['Manrope'] text-3xl font-bold text-[#dde3eb]">Saved Itineraries</h2>
                <div className="h-1 w-12 bg-[#a6ccdd] mt-2 rounded-full" />
              </div>
              <button className="text-[#a6ccdd] text-sm font-bold flex items-center hover:translate-x-1 transition-transform">
                View All <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Itinerary 1 */}
              <div className="group flex flex-col md:flex-row bg-[#161c22] rounded-[1.5rem] overflow-hidden hover:bg-[#1a2026] transition-all duration-300">
                <div className="md:w-48 h-48 md:h-auto overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAupK5VNkkn5wlpsaTEVR8vEhAyXPMLTtK5JOIHYcxWg2utxgyN2y9zBN0VPbpRmNY2_4LYgGjo_SUHUenY1Xty6ryBM27l0xAxjDeniyTWVpUBELkv1oKD_KqrbmPAbDl0I4Ytq8AeUuH8YU34xxd7ttFYQruKNAgGtxDG_iHt5eD_vZfsexzbZCwmUflsDfg5Pb7--y1zmyFCN-H6qSr7ot00RNC_owxjl-5ls46JFSDdVEPctrFvOvSj-ChDlN5KH3d3IzELA"
                    alt="Zermatt"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#dde3eb]">Zermatt Peak Retreat</h3>
                      <span className="material-symbols-outlined text-slate-500 hover:text-[#a6ccdd] cursor-pointer" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
                    </div>
                    <p className="text-sm text-[#c1c7cb] line-clamp-2 opacity-70">
                      A 7-day immersive experience featuring helicopter transfers, Michelin-starred dining, and private ski guiding.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-[#0d1419]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChZtibnBDzlvImp3UwB_jcUCJKChuPqvNAl7SD1c0ViRi7y4MpY7YPn67ypDW-cCUx4wCU0rmjgT-X-hTYevDQPrNpX9KExNPbXukJIeULfazOi_WPEE5Sg73htZkiCCbeNtkVzh_Mlt__feYNBtqkhbn-5RPyUN2GZ26Voqp03yHBd8OyZ5dEUdSylImDnY1AdWdWLzFHBHvomBpo93uhVXBrdadI7ghELgw4HTCqoDsrI0pcJa5ude4xA99Zz6Eo356wwc_otA" alt="traveler" />
                      <img className="w-8 h-8 rounded-full border-2 border-[#0d1419]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxtSfcnTzVnwCLqFbnU7gYMGn3VW7hf024T8Xor4USB1ToS6WqETREfNAMtTxG5OSjSVZOSU5TA2plvgIkQ9cPCXURWblavek2zYTFXgMPuwJ9oAZC6roOagYEcIabana8WFydt9i9suWe0TvwH6F1X2sp0DkGctXqjk4fHs6ZAHiW_M9jE58jtR21c6FKpnUQbWKaABOevhfA989obAQH5XlVCo95cOQpmCE0y-kaRB7-L6x0Y42pW0n6Q7JSlcicb6DHT-UKAA" alt="traveler" />
                      <div className="w-8 h-8 rounded-full bg-[#2f363b] border-2 border-[#0d1419] flex items-center justify-center text-[10px] font-bold text-[#a6ccdd]">+2</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-lg bg-[#2f363b] text-[#c1c7cb] hover:text-[#a6ccdd] transition-colors">
                        <span className="material-symbols-outlined text-sm">share</span>
                      </button>
                      <Link to="/itinerary">
                        <button className="px-4 py-2 rounded-lg bg-[#a6ccdd]/10 text-[#a6ccdd] text-xs font-bold hover:bg-[#a6ccdd] hover:text-[#0a3542] transition-all">
                          Open Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Itinerary 2 */}
              <div className="group flex flex-col md:flex-row bg-[#161c22] rounded-[1.5rem] overflow-hidden hover:bg-[#1a2026] transition-all duration-300">
                <div className="md:w-48 h-48 md:h-auto overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCma4b6RxaR7ZK_Lrd3amkzEEdOFyq-gOgXMzZY6TFlTXHb49hQsM-ohzNorEWphuDa058wcW8GutYIeNiwucG8nQQ_oE9UW1QPUdYAh1ykacyNpzAeWnoiE5GwuWxA7P-ClpzhqsmOatdoIyY_xXme4z_aowQsd7aYqvWqWVUeS8HJtnI1SkhoclRpEIXjzNa3rqi93vQ5FsE9xhGzEF6csCesVXQpkSOmV8jBqORIl4qKzyxL1g1om1MtqHiDQ2d3Flzkw5HSQQ"
                    alt="Ubud"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#dde3eb]">Ubud Sanctuary</h3>
                      <span className="material-symbols-outlined text-slate-500 hover:text-[#a6ccdd] cursor-pointer">bookmark</span>
                    </div>
                    <p className="text-sm text-[#c1c7cb] line-clamp-2 opacity-70">
                      Focus on wellness and traditional Balinese architecture with private meditation sessions and jungle treks.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-500 flex items-center">
                      <span className="material-symbols-outlined text-xs mr-1">schedule</span>
                      Planned for Oct 2024
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-lg bg-[#2f363b] text-[#c1c7cb] hover:text-[#a6ccdd] transition-colors">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-[#a6ccdd]/10 text-[#a6ccdd] text-xs font-bold hover:bg-[#a6ccdd] hover:text-[#0a3542] transition-all">
                        Open Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Insight Glass Panel */}
          <section className="glass-panel p-10 rounded-[2rem] border border-[#a6ccdd]/10 mb-12 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#a6ccdd]/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#a6ccdd] text-[#0a3542] p-2 rounded-xl">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <span className="uppercase tracking-widest text-xs font-black text-[#a6ccdd]">Concierge Intelligence</span>
              </div>
              <h3 className="font-['Manrope'] text-2xl font-bold mb-4 text-[#dde3eb]">Price Drop Alert: Tokyo Business Class</h3>
              <p className="text-[#c1c7cb] mb-8 max-w-xl text-lg leading-relaxed">
                Flights for your "Cyberpunk Tokyo" itinerary have dropped by 15% for early November. Based on your preferences, this is the optimal time to book.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl bg-[#a6ccdd] text-[#0a3542] font-bold shadow-xl hover:scale-105 transition-transform">
                  Update Itinerary
                </button>
                <button className="px-8 py-4 rounded-xl bg-white/5 text-[#dde3eb] border border-white/10 font-bold hover:bg-white/10 transition-all">
                  Snooze Alert
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}
