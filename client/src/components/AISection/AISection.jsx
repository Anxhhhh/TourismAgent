import React, { useState } from 'react'

const suggestions = [
  'Plan a 7-day trip to Bali on a $2,000 budget',
  'Best beaches for snorkelling in Southeast Asia',
  'Hidden gems in southern Italy in October',
  'Family-friendly itinerary for Japan',
]

const AISection = () => {
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) setSubmitted(true)
  }

  return (
    <section id="ai-agent" className="relative overflow-hidden bg-gradient-to-b from-black to-teal-900 py-[100px] lg:py-[140px]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(23,100,117,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 min-[900px]:gap-[clamp(40px,6vw,100px)] items-center">
          {/* Left content */}
          <div className="flex flex-col">
            <span className="section-label">AI Travel Agent</span>
            <h2 className="text-[clamp(34px,4.5vw,58px)] font-bold leading-[1.15] text-white mb-5 mt-2">
              Your intelligent <br />
              <span className="gradient-text">travel companion</span>
            </h2>
            <p className="text-[17px] font-light leading-[1.8] text-white/50 mb-8">
              Ask anything — from crafting a perfect itinerary to finding the best
              local restaurants. Our AI has been trained on millions of travel insights
              to give you personalised, expert-level advice.
            </p>

            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              {[
                'Real-time flight & hotel recommendations',
                'Budget optimisation & cost breakdowns',
                'Weather-aware scheduling',
                'Offline access to saved itineraries',
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15.5px] text-white/70 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: chat demo */}
          <div className="glass-card flex flex-col h-[420px] min-[900px]:h-[480px] rounded-[20px] overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-[18px] border-b border-white/5 bg-white/[0.03] shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center text-[16px] text-white shrink-0 animate-pulse-glow">✦</div>
              <div>
                <p className="text-[15px] font-semibold text-white mb-0.5">Celestial AI</p>
                <p className="flex items-center gap-1.5 text-[11.5px] text-white/45">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
                  Online · Ready to help
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 [&::-webkit-scrollbar]:w-1">
              {/* Bot message */}
              <div className="max-w-[85%] px-4 py-3 text-[15px] leading-[1.6] bg-white/5 border border-white/10 text-white/85 self-start rounded-r-xl rounded-bl-xl rounded-tl-sm">
                <p>Hello! 👋 Where would you like to travel? I'll create a personalised itinerary just for you.</p>
              </div>

              {/* Suggestion chips */}
              <div className="flex flex-wrap gap-2 -mt-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    className="px-4 py-2 text-[13px] text-left text-teal-300 bg-teal-600/15 border border-teal-600/30 rounded-full cursor-pointer transition-all duration-200 hover:bg-teal-600/30 hover:border-teal-400 hover:text-teal-200"
                    onClick={() => setInput(s)}
                    type="button"
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* User message (if submitted) */}
              {submitted && (
                <div className="max-w-[85%] px-4 py-3 text-[15px] leading-[1.6] bg-gradient-to-br from-teal-600 to-teal-500 text-white self-end rounded-l-xl rounded-tr-xl rounded-br-sm">
                  <p>{input}</p>
                </div>
              )}

              {/* Typing indicator */}
              {submitted && (
                <div className="max-w-[85%] px-4 py-3 bg-white/5 border border-white/10 self-start rounded-r-xl rounded-bl-xl rounded-tl-sm">
                  <span className="flex items-center gap-1 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:0.4s]" />
                  </span>
                </div>
              )}
            </div>

            {/* Input */}
            <form className="flex items-center gap-2.5 px-4 py-3.5 border-t border-white/5 bg-white/[0.02] shrink-0" onSubmit={handleSubmit}>
              <input
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-[15px] text-white outline-none transition-all duration-200 placeholder-white/30 focus:border-teal-400 focus:bg-white/10"
                type="text"
                placeholder="Ask about any destination..."
                value={input}
                onChange={(e) => { setInput(e.target.value); setSubmitted(false) }}
              />
              <button
                className="w-[38px] h-[38px] shrink-0 rounded-lg bg-gradient-to-br from-teal-500 to-teal-400 border-none cursor-pointer flex items-center justify-center text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_16px_rgba(23,100,117,0.5)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISection
