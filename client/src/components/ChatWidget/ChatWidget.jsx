import React, { useState, useEffect, useRef, useCallback } from 'react'
import useChatApi from '../../hooks/useChatApi'
import chatAnalytics from '../../utils/chatAnalytics'
import './ChatWidget.css'

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

  // ─── Auto-scroll to bottom on new messages ──────────
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // ─── Focus input when panel opens ───────────────────
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  // ─── Keyboard: Escape to close ──────────────────────
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

  // ─── Toggle chat ────────────────────────────────────
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

  // ─── Send message ──────────────────────────────────
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

  // ─── Determine which suggestions to show ────────────
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
        className={`chat-panel ${isOpen ? 'chat-panel--open' : ''}`}
        role="dialog"
        aria-labelledby="chat-panel-title"
        aria-hidden={!isOpen}
        ref={panelRef}
      >
        {/* Header */}
        <div className="chat-panel__header">
          <div className="chat-panel__avatar" aria-hidden="true">
            ✦
          </div>
          <div className="chat-panel__header-info">
            <h2 className="chat-panel__title" id="chat-panel-title">
              Celestial AI
            </h2>
            <div className="chat-panel__status">
              <span className="chat-panel__status-dot" />
              Online · Ready to help
            </div>
          </div>
          <div className="chat-panel__header-actions">
            <button
              className="chat-panel__header-btn"
              onClick={clearChat}
              aria-label="Clear chat history"
              title="Clear chat"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              </svg>
            </button>
            <button
              className="chat-panel__header-btn"
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
        <div className="chat-panel__messages" role="log" aria-live="polite">
          {messages.length === 0 && !isLoading ? (
            <div className="chat-panel__welcome">
              <div className="chat-panel__welcome-avatar">✦</div>
              <h3 className="chat-panel__welcome-title">
                Hey there, traveller! 👋
              </h3>
              <p className="chat-panel__welcome-subtitle">
                I&apos;m your AI travel companion. Ask me anything about
                destinations, itineraries, or travel tips.
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-msg chat-msg--${msg.role === 'assistant' ? 'bot' : 'user'}`}
              >
                <p className="chat-msg__text">{msg.content}</p>
                <span className="chat-msg__time">
                  {formatTime(msg.timestamp)}
                </span>
              </div>
            ))
          )}

          {/* Typing indicator */}
          {isLoading && (
            <div className="chat-typing" aria-label="AI is typing">
              <span className="chat-typing__dot" />
              <span className="chat-typing__dot" />
              <span className="chat-typing__dot" />
            </div>
          )}

          {/* Error banner */}
          {error && (
            <div
              className={`chat-error ${error.type === 'offline' ? 'chat-error--offline' : ''}`}
              role="alert"
            >
              <span className="chat-error__icon">
                {error.type === 'offline' ? '📡' : '⚠️'}
              </span>
              <span>{error.message}</span>
              {error.type !== 'offline' && (
                <button className="chat-error__retry" onClick={retry}>
                  Retry
                </button>
              )}
            </div>
          )}

          {/* Suggestion chips */}
          {activeSuggestions.length > 0 && !isLoading && (
            <div className="chat-suggestions">
              {activeSuggestions.map((s) => (
                <button
                  key={s}
                  className="chat-chip"
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
        <div className="chat-panel__input-area">
          <form className="chat-panel__input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="chat-panel__input"
              type="text"
              placeholder="Ask about any destination..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              aria-label="Type your message"
              maxLength={2000}
            />
            <button
              className="chat-panel__send"
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
          <p className="chat-panel__disclosure">Powered by AI · Responses may not be 100% accurate</p>
        </div>
      </div>

      {/* ── Launcher Button ── */}
      <button
        className={`chat-launcher ${isOpen ? 'chat-launcher--open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
        aria-controls="chat-panel-title"
      >
        {/* Chat icon */}
        <svg className="chat-launcher__icon chat-launcher__icon--chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {/* Close icon */}
        <svg className="chat-launcher__icon chat-launcher__icon--close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </>
  )
}

export default ChatWidget
