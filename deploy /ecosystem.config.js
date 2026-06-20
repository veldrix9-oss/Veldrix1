module.exports = {
    apps: [
        {
            name: "veldrix-bot",
            script: "./src/index.js",
            exec_mode: "fork",
            instances: 1,
            watch: false,
            autorestart: true,
            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};
