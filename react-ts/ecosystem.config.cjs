module.exports = {
    apps : [{
        name   : "frontend",
        script : "serve",
        autorestart: true,
        env: {
            ENV_PATH: '../.env',
            PM2_SERVE_PATH: "./dist",
            PM2_SERVE_PORT: 5173,
            PM2_SERVE_SPA: "true",
            NODE_ENV: 'production',
        }
    }]
}