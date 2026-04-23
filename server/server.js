import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

// ─── Middleware ──────────────────────────────────────────
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));

// ─── Database ───────────────────────────────────────────
connectdb();

// ─── Routes ─────────────────────────────────────────────
app.use("/api/chat", chatRoutes);

// ─── Health check ───────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Global error handler ───────────────────────────────
app.use((err, _req, res, _next) => {
  console.error("[Server] Unhandled error:", err);
  res.status(500).json({
    error: "Internal server error. Please try again later.",
  });
});

// ─── Start ──────────────────────────────────────────────
app.listen(port, () => {
  console.log(`✦ CelestialVoyager server running on port ${port}`);
});