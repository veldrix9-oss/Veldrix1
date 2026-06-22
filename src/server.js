cat > src/server.js << 'EOF'
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import qrRoutes from "./routes/qr.js";
import sessionRoutes from "./routes/session.js";
import logger from "./utils/logger.js";
import showBanner from "./utils/banners.js";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CORRECT PATH: public folder is at root (one level up from src)
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// Routes
app.use("/qr", qrRoutes);
app.use("/session", sessionRoutes);

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  try {
    showBanner();
  } catch (e) {}
  logger.info(`Scanner server running on port ${PORT}`);
});

export default app;
EOF
