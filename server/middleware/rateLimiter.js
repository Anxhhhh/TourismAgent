/**
 * Simple in-memory rate limiter keyed by sessionId.
 * Limits each session to `maxRequests` per `windowMs`.
 */

const sessions = new Map();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 20;

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of sessions) {
    if (now - entry.windowStart > WINDOW_MS * 2) {
      sessions.delete(key);
    }
  }
}, 5 * 60 * 1000);

export function rateLimiter(req, res, next) {
  const sessionId = req.body?.sessionId || req.ip;
  const now = Date.now();

  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, { count: 1, windowStart: now });
    return next();
  }

  const entry = sessions.get(sessionId);

  // Reset window if expired
  if (now - entry.windowStart > WINDOW_MS) {
    entry.count = 1;
    entry.windowStart = now;
    return next();
  }

  // Check limit
  if (entry.count >= MAX_REQUESTS) {
    return res.status(429).json({
      error: "You're sending messages too quickly. Please wait a moment and try again.",
      retryAfter: Math.ceil((WINDOW_MS - (now - entry.windowStart)) / 1000),
    });
  }

  entry.count++;
  next();
}

export default rateLimiter;
