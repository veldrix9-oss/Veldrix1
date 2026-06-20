// src/utils/logger.js

import { cyanText, greenText, yellowText, redText, dim } from "./colors.js";

const LOG_LEVELS = {
  info: { prefix: "[INFO]", color: cyanText },
  success: { prefix: "[✓]", color: greenText },
  warn: { prefix: "[⚠]", color: yellowText },
  error: { prefix: "[✗]", color: redText },
  debug: { prefix: "[DEBUG]", color: dim },
};

function log(level, message, ...args) {
  const config = LOG_LEVELS[level];
  if (!config) return;

  const timestamp = new Date().toISOString();
  const prefix = config.color(`${config.prefix} ${timestamp}`);
  
  console.log(prefix, message, ...args);
}

export default {
  info: (msg, ...args) => log("info", msg, ...args),
  success: (msg, ...args) => log("success", msg, ...args),
  warn: (msg, ...args) => log("warn", msg, ...args),
  error: (msg, ...args) => log("error", msg, ...args),
  debug: (msg, ...args) => log("debug", msg, ...args),
};
