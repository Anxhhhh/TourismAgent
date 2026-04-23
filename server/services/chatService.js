/**
 * Chat service — manages conversation sessions and Gemini API calls.
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "../prompts/systemPrompt.js";

// ─── In-memory session store ────────────────────────────
const conversationStore = new Map();
const SESSION_TTL = 30 * 60 * 1000; // 30 minutes

// Clean up expired sessions periodically
setInterval(() => {
  const now = Date.now();
  for (const [id, session] of conversationStore) {
    if (now - session.lastActive > SESSION_TTL) {
      conversationStore.delete(id);
    }
  }
}, 5 * 60 * 1000);

// ─── Gemini client ──────────────────────────────────────
let genAI;
let model;

function getModel() {
  if (!model) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set in environment variables.");
    }
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  }
  return model;
}

// ─── Build conversation history for Gemini ──────────────
function buildContents(history, userMessage, context) {
  const contents = [];

  // Add conversation history
  for (const msg of history) {
    contents.push({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    });
  }

  // Add current user message with context
  let enrichedMessage = userMessage;
  if (context?.page) {
    enrichedMessage = `[User is currently on the "${context.page}" page]\n\n${userMessage}`;
  }

  contents.push({
    role: "user",
    parts: [{ text: enrichedMessage }],
  });

  return contents;
}

// ─── Extract suggested actions from response ────────────
function extractSuggestedActions(reply) {
  const defaults = [
    "Plan a trip",
    "Explore destinations",
    "Get travel tips",
  ];

  // Try to be contextual based on reply content
  const suggestions = [];
  if (/beach|island|ocean|coast/i.test(reply)) {
    suggestions.push("Best beach destinations");
  }
  if (/budget|cost|price|cheap/i.test(reply)) {
    suggestions.push("Budget-friendly tips");
  }
  if (/itinerary|plan|schedule/i.test(reply)) {
    suggestions.push("Refine my itinerary");
  }
  if (/food|restaurant|cuisine/i.test(reply)) {
    suggestions.push("Local food recommendations");
  }
  if (/hotel|stay|accommodation/i.test(reply)) {
    suggestions.push("Compare accommodations");
  }

  // Fill to 3 suggestions
  while (suggestions.length < 3) {
    const remaining = defaults.filter((d) => !suggestions.includes(d));
    if (remaining.length === 0) break;
    suggestions.push(remaining[0]);
  }

  return suggestions.slice(0, 3);
}

// ─── Fallback response ─────────────────────────────────
const FALLBACK_RESPONSE = {
  reply: "I'm having a little trouble reaching my knowledge base right now. Please try again in a moment, or feel free to explore our destinations page for inspiration! 🌍",
  citations: [],
  suggestedActions: ["Explore destinations", "Try again", "Contact support"],
};

// ─── Main chat handler ──────────────────────────────────
export async function handleChatMessage({ sessionId, message, context }) {
  // Get or create session
  if (!conversationStore.has(sessionId)) {
    conversationStore.set(sessionId, {
      history: [],
      lastActive: Date.now(),
    });
  }

  const session = conversationStore.get(sessionId);
  session.lastActive = Date.now();

  // Keep history manageable (last 20 messages)
  if (session.history.length > 20) {
    session.history = session.history.slice(-20);
  }

  try {
    const aiModel = getModel();

    const contents = buildContents(session.history, message, context);

    // Call Gemini with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const result = await aiModel.generateContent({
      contents,
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        topK: 40,
        maxOutputTokens: 1024,
      },
    });

    clearTimeout(timeout);

    const reply = result.response.text();

    // Update session history
    session.history.push({ role: "user", content: message });
    session.history.push({ role: "assistant", content: reply });

    return {
      reply,
      citations: [],
      suggestedActions: extractSuggestedActions(reply),
    };
  } catch (error) {
    console.error("[ChatService] Error:", error.message);

    // If it's an API key issue, give a specific message
    if (error.message.includes("API_KEY") || error.message.includes("403")) {
      return {
        reply: "I'm currently unable to connect to my AI backend. Please ensure the API key is configured correctly.",
        citations: [],
        suggestedActions: ["Try again", "Contact support"],
      };
    }

    return FALLBACK_RESPONSE;
  }
}

export default { handleChatMessage };
