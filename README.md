# Anti-Gravity Chatbot Integration Guide

This README explains how to integrate an AI chatbot into your existing website so it visually feels like a native part of your brand/theme ("anti-gravity" style = seamless, floating, frictionless UX).

---

## 1) Define the Theme Contract (Design System First)

Before adding any chatbot UI, extract your website's visual rules into a **Theme Contract**:

- Brand colors (primary, secondary, accent, neutral)
- Typography (font families, heading/body weights, sizes)
- Border radius and shadow style
- Spacing rhythm (4px, 8px, 12px, 16px scale, etc.)
- Icon style (outlined/filled/rounded)
- Motion style (fast/snappy vs smooth/soft)

Create a dedicated token map:

```text
--brand-primary
--brand-secondary
--surface-bg
--surface-card
--text-main
--text-muted
--radius-sm / --radius-md / --radius-lg
--shadow-soft
--transition-default
```

> Goal: chatbot should consume the exact same tokens your site already uses.

---

## 2) Choose Integration Model

Use one of these approaches depending on your architecture:

1. **Embedded Component (Recommended)**
   - Chat lives inside your app layout.
   - Best for full theme consistency and shared auth/session.

2. **Floating Widget**
   - Chat appears as a launcher button + expandable panel.
   - Fast to adopt, still highly themeable.

3. **Dedicated Chat Page**
   - `/chat` route with full-screen conversation.
   - Ideal for support-heavy or assistant-first experiences.

---

## 3) Match the Chatbot UI to Your Website Theme

To make the chatbot look native, style these elements using your theme tokens:

- Launcher button color, icon, hover state
- Header bar (logo, title, close/minimize controls)
- Message bubbles (user/assistant variants)
- Input field, send button, placeholder color
- Typing indicator animation
- Scrollbar style, panel border radius, drop shadows

### Required visual consistency checklist

- Same font family as website
- Same color palette as website
- Same border radius language
- Same interaction transitions
- Same dark/light mode behavior
- Same responsive breakpoints

---

## 4) Connect to AI Backend

Core flow:

1. User sends a message from frontend.
2. Frontend calls your backend endpoint (never expose secrets in frontend).
3. Backend forwards request to your AI provider.
4. Backend returns answer + metadata.
5. Frontend renders response with themed UI components.

Recommended backend endpoint contract:

```json
POST /api/chat
{
  "sessionId": "string",
  "message": "string",
  "context": {
    "page": "current-page-or-feature",
    "userRole": "optional"
  }
}
```

Return structure:

```json
{
  "reply": "assistant text",
  "citations": [],
  "suggestedActions": []
}
```

---

## 5) Theme-Aware Prompting (Behavior Tuning)

To make the assistant feel like part of your brand voice:

- Write a **system prompt** with tone rules matching your website (formal/friendly/luxury/minimal, etc.)
- Include domain boundaries (what it can/can't answer)
- Add business facts (products/services/FAQ/policies)
- Define response format rules (short answers, bullet points, CTA style)

Example instruction block:

```text
You are the official assistant for <BrandName>.
Tone: concise, warm, premium.
Always use the same terminology used on the website.
If uncertain, ask one clarifying question before answering.
Never invent pricing/policy details.
```

---

## 6) Data + Knowledge Integration

To improve relevance and reduce hallucinations:

- Connect chatbot to your trusted knowledge base (docs, FAQs, policy pages)
- Use retrieval (RAG) so responses are grounded in current content
- Add source references for high-trust answers
- Version your knowledge snapshots for rollback safety

Suggested content sources:

- Public help pages
- Product/service catalog
- Terms/policies
- Internal support playbooks (if allowed)

---

## 7) Personalization (Optional but Powerful)

To make chat feel deeply integrated:

- Pass page context (current route, selected product, current language)
- Pass safe user context (plan tier, region, preferences)
- Use role-based behavior (guest vs logged-in user)

Never include sensitive personal data unless compliant and necessary.

---

## 8) Anti-Gravity UX Patterns (Seamless Feel)

Use these patterns to make chat feel effortless:

- Auto-suggest prompts based on current page
- Smart greeting only once per session
- Preserve chat history across page navigation
- Minimize interruption (non-blocking launcher)
- Smooth open/close transitions (120–220ms)
- Contextual quick actions ("Book now", "Compare", "Contact support")

---

## 9) Security, Compliance, and Reliability

Minimum requirements:

- Store API keys only in backend environment variables
- Add rate limiting + abuse protection
- Log requests with PII-safe redaction
- Add timeout + retry logic
- Add fallback response when AI provider is unavailable
- Provide user disclosure that responses are AI-generated

---

## 10) Performance Targets

Track these KPIs:

- Time to first token
- Full response latency
- User engagement rate
- Conversation completion rate
- Escalation-to-human rate
- Hallucination/error report rate

Optimization ideas:

- Stream responses token-by-token
- Cache frequent FAQs
- Use compact context windows
- Lazy-load widget assets

---

## 11) Launch Procedure

1. Build theme tokens + shared component styles.
2. Implement frontend chatbot shell (launcher/panel/messages/input).
3. Create secure backend `/api/chat` proxy.
4. Add brand/system prompt and domain guardrails.
5. Connect retrieval/knowledge source.
6. Run QA for visual consistency and mobile behavior.
7. Run safety and hallucination tests.
8. Deploy behind feature flag.
9. Monitor metrics and user feedback.
10. Iterate weekly on prompts + UI details.

---

## 12) QA Checklist Before Production

- [ ] Chat UI perfectly matches website theme
- [ ] Mobile view is fully usable
- [ ] Dark mode rendering is correct
- [ ] API keys are never exposed client-side
- [ ] Error states are user-friendly
- [ ] AI refuses unsupported/unsafe requests
- [ ] Logging and monitoring are enabled
- [ ] Accessibility checks pass (keyboard, contrast, ARIA labels)

---

## 13) Success Definition

Your chatbot integration is successful when users cannot tell whether the chat module was added later—they should experience it as a natural part of your website's design and voice.

