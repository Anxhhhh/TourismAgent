import React, { useState } from 'react'
import './AISection.css'

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
    <section id="ai-agent" className="ai-section section">
      {/* Background glow */}
      <div className="ai-section__glow" />

      <div className="container">
        <div className="ai-section__inner">
          {/* Left content */}
          <div className="ai-section__content">
            <span className="section-label">AI Travel Agent</span>
            <h2 className="ai-section__title">
              Your intelligent <br />
              <span className="gradient-text">travel companion</span>
            </h2>
            <p className="ai-section__desc">
              Ask anything — from crafting a perfect itinerary to finding the best
              local restaurants. Our AI has been trained on millions of travel insights
              to give you personalised, expert-level advice.
            </p>

            <ul className="ai-section__perks">
              {[
                'Real-time flight & hotel recommendations',
                'Budget optimisation & cost breakdowns',
                'Weather-aware scheduling',
                'Offline access to saved itineraries',
              ].map((p) => (
                <li key={p} className="ai-section__perk">
                  <span className="ai-section__perk-dot" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: chat demo */}
          <div className="ai-chat glass-card">
            <div className="ai-chat__header">
              <div className="ai-chat__avatar">✦</div>
              <div>
                <p className="ai-chat__name">Celestial AI</p>
                <p className="ai-chat__status">
                  <span className="ai-chat__online-dot" />
                  Online · Ready to help
                </p>
              </div>
            </div>

            <div className="ai-chat__messages">
              {/* Bot message */}
              <div className="ai-chat__msg ai-chat__msg--bot">
                <p>Hello! 👋 Where would you like to travel? I'll create a personalised itinerary just for you.</p>
              </div>

              {/* Suggestion chips */}
              <div className="ai-chat__suggestions">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    className="ai-chat__chip"
                    onClick={() => setInput(s)}
                    type="button"
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* User message (if submitted) */}
              {submitted && (
                <div className="ai-chat__msg ai-chat__msg--user">
                  <p>{input}</p>
                </div>
              )}

              {/* Typing indicator */}
              {submitted && (
                <div className="ai-chat__msg ai-chat__msg--bot">
                  <span className="ai-chat__typing">
                    <span /><span /><span />
                  </span>
                </div>
              )}
            </div>

            {/* Input */}
            <form className="ai-chat__input-row" onSubmit={handleSubmit}>
              <input
                className="ai-chat__input"
                type="text"
                placeholder="Ask about any destination..."
                value={input}
                onChange={(e) => { setInput(e.target.value); setSubmitted(false) }}
              />
              <button
                className="ai-chat__send"
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
