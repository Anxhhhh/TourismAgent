/**
 * Lightweight chat analytics — dispatches custom DOM events
 * that can be picked up by any analytics provider (GA, Segment, etc.)
 */

function dispatch(eventName, detail = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(eventName, {
      detail: { ...detail, timestamp: Date.now() },
    })
  );
}

export const chatAnalytics = {
  trackChatOpen: () => dispatch("chat:open"),
  trackChatClose: () => dispatch("chat:close"),
  trackMessageSent: (message) =>
    dispatch("chat:message_sent", { messageLength: message?.length }),
  trackResponseReceived: (latencyMs) =>
    dispatch("chat:response_received", { latencyMs }),
  trackFallbackTriggered: (reason) =>
    dispatch("chat:fallback", { reason }),
  trackError: (error) =>
    dispatch("chat:error", { error: error?.message || error }),
};

export default chatAnalytics;
