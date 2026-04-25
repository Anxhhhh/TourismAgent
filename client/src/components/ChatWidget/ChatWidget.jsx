import React, { useState, useEffect, useRef, useCallback } from 'react'
import useChatApi from '../../hooks/useChatApi'
import chatAnalytics from '../../utils/chatAnalytics'

const DEFAULT_SUGGESTIONS = [
  'Plan a 7-day trip to Bali',
  'Best beaches this season',
  'Family-friendly destinations',
  'Hidden gems in Europe',
]

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [hasGreeted, setHasGreeted] = useState(
    () => sessionStorage.getItem('cv-chat-greeted') === 'true'
  )
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const { messages, isLoading, error, sendMessage, retry, clearChat } =
    useChatApi()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        chatAnalytics.trackChatClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const toggleChat = useCallback(() => {
    const willOpen = !isOpen
    setIsOpen(willOpen)
    if (willOpen) {
      chatAnalytics.trackChatOpen()
      if (!hasGreeted) {
        setHasGreeted(true)
        sessionStorage.setItem('cv-chat-greeted', 'true')
      }
    } else {
      chatAnalytics.trackChatClose()
    }
  }, [isOpen, hasGreeted])

  const handleSend = useCallback(
    (text) => {
      const msg = text || input
      if (!msg.trim()) return
      sendMessage(msg)
      setInput('')
    },
    [input, sendMessage]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSend()
  }

  const handleChipClick = (text) => {
    setInput('')
    handleSend(text)
  }

  const lastBotMessage = [...messages].reverse().find((m) => m.role === 'assistant')
  const activeSuggestions =
    lastBotMessage?.suggestedActions?.length > 0
      ? lastBotMessage.suggestedActions
      : messages.length === 0
        ? DEFAULT_SUGGESTIONS
        : []

  return (
    <>
      {/* ── Chat Panel ── */}
      <div
        className={`fixed bottom-0 right-0 sm:bottom-[100px] sm:right-7 z-[999] w-full sm:w-[420px] h-full sm:h-[600px] max-h-[100dvh] sm:max-h-[calc(100dvh-130px)] sm:rounded-[24px] overflow-hidden flex flex-col bg-teal-900/92 border border-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(30,138,158,0.08)] transform origin-bottom-right transition-all duration-[400ms] ${isOpen ? 'translate-y-0 scale-100 opacity-100 visible pointer-events-auto' : 'translate-y-5 scale-95 opacity-0 invisible pointer-events-none'}`}
        role="dialog"
        aria-labelledby="chat-panel-title"
        aria-hidden={!isOpen}
        ref={panelRef}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-[18px] py-4 border-b border-white/5 bg-white/[0.03] shrink-0">
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center text-[15px] text-white shrink-0 animate-pulse-glow" aria-hidden="true">
            ✦
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-[14.5px] font-semibold text-white m-0" id="chat-panel-title">
              Celestial AI
            </h2>
            <div className="flex items-center gap-1.5 text-[11px] text-white/40 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
              Online · Ready to help
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              className="w-8 h-8 rounded-lg border-none bg-transparent text-white/40 cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-white/10 hover:text-white"
              onClick={clearChat}
              aria-label="Clear chat history"
              title="Clear chat"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              </svg>
            </button>
            <button
              className="w-8 h-8 rounded-lg border-none bg-transparent text-white/40 cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-white/10 hover:text-white"
              onClick={toggleChat}
              aria-label="Close chat"
              title="Close"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 md:py-[18px] flex flex-col gap-3.5 scroll-smooth [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-teal-700 [&::-webkit-scrollbar-thumb]:rounded-full" role="log" aria-live="polite">
          {messages.length === 0 && !isLoading ? (
            <div className="flex flex-col items-center justify-center text-center flex-1 px-5 py-6 gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center text-[24px] animate-float">✦</div>
              <h3 className="text-[18px] font-semibold text-white m-0">
                Hey there, traveller! 👋
              </h3>
              <p className="text-[13.5px] font-light text-white/45 leading-[1.6] m-0 max-w-[280px]">
                I&apos;m your AI travel companion. Ask me anything about
                destinations, itineraries, or travel tips.
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[85%] px-[15px] py-[11px] text-[14px] leading-[1.65] animate-fade-up ${msg.role === 'assistant' ? 'bg-white/[0.055] border border-white/[0.07] text-white/90 self-start rounded-r-[14px] rounded-bl-[14px] rounded-tl-sm' : 'bg-gradient-to-br from-teal-600 to-teal-500 text-white self-end rounded-l-[14px] rounded-tr-[14px] rounded-br-sm'}`}
              >
                <p className="m-0 whitespace-pre-wrap break-words">{msg.content}</p>
                <span className={`text-[10px] mt-1 block ${msg.role === 'assistant' ? 'text-white/25' : 'text-right text-white/45'}`}>
                  {formatTime(msg.timestamp)}
                </span>
              </div>
            ))
          )}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex items-center gap-[5px] px-[15px] py-[14px] bg-white/[0.055] border border-white/[0.07] rounded-r-[14px] rounded-bl-[14px] rounded-tl-sm self-start max-w-[70px] animate-fade-up" aria-label="AI is typing">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}

          {/* Error banner */}
          {error && (
            <div
              className={`flex items-center gap-2.5 px-3.5 py-3 border rounded-xl text-[13px] text-white/70 leading-[1.5] animate-fade-up ${error.type === 'offline' ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-red-500/10 border-red-500/20'}`}
              role="alert"
            >
              <span className="shrink-0 text-[16px]">
                {error.type === 'offline' ? '📡' : '⚠️'}
              </span>
              <span>{error.message}</span>
              {error.type !== 'offline' && (
                <button className="ml-auto px-3 py-1 text-[12px] font-medium bg-white/10 border border-white/10 rounded-lg text-white cursor-pointer transition-all hover:bg-white/15 shrink-0" onClick={retry}>
                  Retry
                </button>
              )}
            </div>
          )}

          {/* Suggestion chips */}
          {activeSuggestions.length > 0 && !isLoading && (
            <div className="flex flex-wrap gap-[7px] px-0.5">
              {activeSuggestions.map((s) => (
                <button
                  key={s}
                  className="px-3.5 py-[7px] text-[12.5px] text-teal-300 bg-teal-600/10 border border-teal-600/25 rounded-full cursor-pointer transition-all duration-200 text-left leading-[1.3] hover:bg-teal-600/30 hover:border-teal-400 hover:text-teal-200 hover:-translate-y-[1px]"
                  onClick={() => handleChipClick(s)}
                  type="button"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-3.5 py-3 border-t border-white/5 bg-white/[0.02] shrink-0">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-[14px] text-white outline-none min-h-[40px] transition-all duration-200 placeholder-white/30 focus:border-teal-400 focus:bg-white/10"
              type="text"
              placeholder="Ask about any destination..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              aria-label="Type your message"
              maxLength={2000}
            />
            <button
              className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-teal-500 to-teal-400 border-none cursor-pointer flex items-center justify-center text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_16px_rgba(23,100,117,0.5)] active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
          <p className="text-center text-[10px] text-white/20 mt-1.5 tracking-[0.02em]">Powered by AI · Responses may not be 100% accurate</p>
        </div>
      </div>

      {/* ── Launcher Button ── */}
      <button
        className={`fixed bottom-[18px] right-[18px] sm:bottom-7 sm:right-7 z-[1000] w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border-none cursor-pointer bg-gradient-to-br from-teal-500 to-teal-400 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-250 hover:scale-110 hover:shadow-[0_8px_40px_rgba(30,138,158,0.5)] active:scale-95 group ${isOpen ? 'before:hidden' : 'before:absolute before:-inset-1 before:rounded-full before:border-2 before:border-teal-400 before:animate-pulse-glow sm:before:inset-[-4px]'}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
        aria-controls="chat-panel-title"
      >
        {/* Chat icon */}
        <svg className={`w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] transition-all duration-400 absolute ${isOpen ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {/* Close icon */}
        <svg className={`w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] transition-all duration-400 absolute ${isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </>
  )
}

export default ChatWidget
