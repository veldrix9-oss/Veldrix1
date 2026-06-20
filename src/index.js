// src/index.js
import { startServer } from "./server.js";
import logger from "./utils/logger.js";

logger.info("Booting VELDRIX Scanner...");
startServer();
