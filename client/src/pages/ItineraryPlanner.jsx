import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function ItineraryPlanner() {
  return (
    <div className="bg-[#0d1419] text-[#dde3eb] font-['Inter']">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-8 md:p-12 min-h-screen bg-[#0d1419]">
          {/* Header */}
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-[#a6ccdd] font-bold uppercase tracking-widest text-xs mb-2">Summer 2024 Expedition</div>
              <h1
                className="text-5xl md:text-6xl font-black text-[#dde3eb] tracking-tighter leading-none mb-4"
                style={{ fontFamily: '"Mona Sans", sans-serif' }}
              >
                The Amalfi Dreamscape
              </h1>
              <p className="text-[#c1c7cb] text-lg leading-relaxed font-light">
                A curated 7-day journey through Italy's most dramatic coastline. Precision-engineered for serenity and discovery.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 border border-[#41484b]/30 rounded-xl hover:bg-white/5 transition-all text-sm font-semibold">
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download as PDF</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-[#a6ccdd] text-[#0a3542] rounded-xl font-bold shadow-lg hover:brightness-110 transition-all text-sm">
                <span className="material-symbols-outlined text-sm">save</span>
                <span>Save Itinerary</span>
              </button>
            </div>
          </header>

          {/* Itinerary Content */}
          <div className="space-y-24">
            {/* Day 1 */}
            <section className="relative">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#7196a6] text-[#012e3b] flex items-center justify-center font-bold text-xl">1</div>
                <h2 className="text-3xl font-bold" style={{ fontFamily: '"Mona Sans", sans-serif' }}>Arrival in Sorrento</h2>
                <div className="h-[1px] flex-1 bg-[#41484b]/20 ml-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Main Activity */}
                <div className="md:col-span-8 group">
                  <div className="relative rounded-3xl overflow-hidden aspect-[21/9] mb-4">
                    <img
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuESz7SPkH4akQexxIJYf8t3-319GtDt2rakB7Hgv69kLxCF7wBcOusnNOS7h0BSEs4uFHVzg4UG7aFAwsXEkwzph84XI-RGdhLkv5xZ6JNJmBfAVK-wu7xj7O-_VsOMJjUeoqDYa5KJt6Cmhtdc5I4jJdA8yresR_4v1IsWFncyeWC0f5TIDl7SB0ZEGGLc983-FvI35hWscBFkKKvvHAv50f2xLBs2kxC_iyWrYtTSFSIneeYNHYvVKt7p_6yXiJcDkl6biSFw"
                      alt="Sorrento"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1419] to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-8">
                      <span className="px-3 py-1 bg-[#a6ccdd]/20 backdrop-blur-md rounded-full text-[#a6ccdd] text-xs font-bold uppercase tracking-widest">14:00 PM</span>
                      <h3 className="text-2xl font-bold mt-2">Check-in: Grand Hotel Excelsior</h3>
                    </div>
                  </div>
                  <div className="flex justify-between items-start px-2">
                    <p className="text-[#c1c7cb] leading-relaxed max-w-xl">
                      Welcome to your seaside haven. Private terrace overlooking Mount Vesuvius with complimentary Prosecco upon arrival.
                    </p>
                    <span className="text-[#a6ccdd] font-bold text-lg" style={{ fontFamily: '"Mona Sans", sans-serif' }}>€450.00</span>
                  </div>
                </div>

                {/* Dinner Card */}
                <div className="md:col-span-4 space-y-6">
                  <div className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[#a6ccdd] text-xs font-bold uppercase">19:30 PM</span>
                        <button className="text-slate-500 hover:text-[#ffb4ab] transition-colors">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Dinner at Il Buco</h3>
                      <p className="text-sm text-[#c1c7cb] font-light mb-6 leading-relaxed">
                        Michelin-starred dining in a former monastery cellar. Focus on artisanal pastas and local lemon-infused seafood.
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-[#41484b]/20">
                      <div className="flex items-center space-x-1 text-slate-400">
                        <span className="material-symbols-outlined text-sm">payments</span>
                        <span className="text-xs uppercase">Est. Cost</span>
                      </div>
                      <span className="font-bold text-[#a6ccdd]">€120.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Day 2 */}
            <section className="relative">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#242b30] text-[#c1c7cb] border border-[#41484b]/30 flex items-center justify-center font-bold text-xl">2</div>
                <h2 className="text-3xl font-bold" style={{ fontFamily: '"Mona Sans", sans-serif' }}>Capri Island Charter</h2>
                <div className="h-[1px] flex-1 bg-[#41484b]/20 ml-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Activity 1 */}
                <div className="bg-[#161c22] p-8 rounded-3xl border border-transparent hover:border-[#a6ccdd]/20 transition-all group">
                  <div className="flex justify-between mb-4">
                    <span className="text-[#a6ccdd] text-xs font-bold">09:00 AM</span>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-[#a6ccdd] transition-colors">sailing</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Private Riva Boat</h3>
                  <p className="text-sm text-[#c1c7cb] font-light mb-8">Full day circumnavigation of Capri, including Blue Grotto and Faraglioni rocks.</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-black text-[#dde3eb]" style={{ fontFamily: '"Mona Sans", sans-serif' }}>€850</span>
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#a6ccdd] hover:text-[#0a3542] transition-all">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                </div>

                {/* Activity 2 */}
                <div className="bg-[#161c22] p-8 rounded-3xl border border-transparent hover:border-[#a6ccdd]/20 transition-all group">
                  <div className="flex justify-between mb-4">
                    <span className="text-[#a6ccdd] text-xs font-bold">13:30 PM</span>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-[#a6ccdd] transition-colors">restaurant</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Lunch at La Fontelina</h3>
                  <p className="text-sm text-[#c1c7cb] font-light mb-8">Iconic beach club dining with world-famous linguine alle vongole and white wine sangria.</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-black text-[#dde3eb]" style={{ fontFamily: '"Mona Sans", sans-serif' }}>€180</span>
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#a6ccdd] hover:text-[#0a3542] transition-all">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                </div>

                {/* Add Activity */}
                <div className="border-2 border-dashed border-[#41484b]/30 rounded-3xl flex flex-col items-center justify-center p-8 hover:bg-white/5 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-[#242b30] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[#a6ccdd]">add</span>
                  </div>
                  <span className="text-sm font-bold text-[#c1c7cb]">Add Activity</span>
                </div>
              </div>
            </section>

            {/* AI Insight Panel */}
            <div className="glass-panel p-8 rounded-3xl border border-[#a6ccdd]/20 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#a6ccdd]/10 blur-3xl rounded-full" />
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#a6ccdd] to-[#7196a6] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="material-symbols-outlined text-[#0a3542]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Concierge Recommendation</h4>
                  <p className="text-[#c1c7cb] font-light leading-relaxed mb-4">
                    Based on your preference for quiet evenings, I suggest moving your Day 3 Positano dinner to 20:30 to catch the blue hour lights without the ferry crowds.
                  </p>
                  <button className="text-[#a6ccdd] text-sm font-bold flex items-center space-x-2 hover:underline">
                    <span>Apply adjustment</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
