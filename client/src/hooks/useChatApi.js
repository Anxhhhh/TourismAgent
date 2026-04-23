/**
 * useChatApi — React hook for chat API communication.
 * Handles message state, session management, API calls, and error handling.
 */

import { useState, useCallback, useRef } from "react";
import chatAnalytics from "../utils/chatAnalytics";

const API_URL = "/api/chat";

function getSessionId() {
  let id = sessionStorage.getItem("cv-chat-session");
  if (!id) {
    id = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem("cv-chat-session", id);
  }
  return id;
}

export function useChatApi() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sessionId = useRef(getSessionId());

  const sendMessage = useCallback(
    async (text, context = {}) => {
      if (!text.trim() || isLoading) return;

      const userMessage = {
        id: `msg_${Date.now()}`,
        role: "user",
        content: text.trim(),
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);
      chatAnalytics.trackMessageSent(text);

      const startTime = Date.now();

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: sessionId.current,
            message: text.trim(),
            context,
          }),
        });

        if (res.status === 429) {
          const data = await res.json();
          setError({ type: "rate_limit", message: data.error });
          chatAnalytics.trackError("rate_limit");
          setIsLoading(false);
          return;
        }

        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();
        const latency = Date.now() - startTime;
        chatAnalytics.trackResponseReceived(latency);

        const botMessage = {
          id: `msg_${Date.now()}`,
          role: "assistant",
          content: data.reply,
          suggestedActions: data.suggestedActions || [],
          citations: data.citations || [],
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, botMessage]);
      } catch (err) {
        console.error("[useChatApi] Error:", err);
        chatAnalytics.trackFallbackTriggered(err.message);

        // Check if offline
        if (!navigator.onLine) {
          setError({
            type: "offline",
            message:
              "You appear to be offline. We'll reconnect automatically when your connection is restored.",
          });
        } else {
          setError({
            type: "error",
            message:
              "Something went wrong. Please try again.",
          });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading]
  );

  const retry = useCallback(() => {
    if (messages.length === 0) return;
    const lastUserMsg = [...messages]
      .reverse()
      .find((m) => m.role === "user");
    if (lastUserMsg) {
      // Remove the last user message before resending
      setMessages((prev) =>
        prev.filter((m) => m.id !== lastUserMsg.id)
      );
      setError(null);
      sendMessage(lastUserMsg.content);
    }
  }, [messages, sendMessage]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
    // Generate fresh session
    const newId = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem("cv-chat-session", newId);
    sessionId.current = newId;
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    retry,
    clearChat,
  };
}

export default useChatApi;
