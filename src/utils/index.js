cat > src/index.js << 'EOF'
import { startServer } from "./server.js";
import logger from "./utils/logger.js";

logger.info("Booting VELDRIX Scanner...");
startServer();
EOF
