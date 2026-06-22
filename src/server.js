cat > src/server.js << 'EOF'
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import qrRoutes from "./routes/qr.js";
import sessionRoutes from "./routes/session.js";
import logger from "./utils/logger.js";
import showBanner from "./utils/banners.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Correct public path
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.use("/qr", qrRoutes);
app.use("/session", sessionRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  try { showBanner(); } catch (e) {}
  logger.info(`Scanner server running on port ${PORT}`);
});

export default app;
EOF
