/**
 * Chat API routes — POST /api/chat
 */

import { Router } from "express";
import { rateLimiter } from "../middleware/rateLimiter.js";
import { handleChatMessage } from "../services/chatService.js";

const router = Router();

// Apply rate limiting
router.use(rateLimiter);

/**
 * POST /api/chat
 * Body: { sessionId: string, message: string, context?: { page, userRole } }
 */
router.post("/", async (req, res) => {
  try {
    const { sessionId, message, context } = req.body;

    // ─── Validation ──────────────────────────────────
    if (!sessionId || typeof sessionId !== "string") {
      return res.status(400).json({
        error: "Missing or invalid sessionId.",
      });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Message cannot be empty.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        error: "Message is too long. Please keep it under 2000 characters.",
      });
    }

    // ─── Process ─────────────────────────────────────
    const result = await handleChatMessage({
      sessionId: sessionId.trim(),
      message: message.trim(),
      context: context || {},
    });

    // ─── AI disclosure header ────────────────────────
    res.setHeader("X-AI-Generated", "true");

    return res.json(result);
  } catch (error) {
    console.error("[ChatRoute] Unexpected error:", error);
    return res.status(500).json({
      reply: "Something unexpected happened. Please try again shortly.",
      citations: [],
      suggestedActions: ["Try again"],
    });
  }
});

export default router;
