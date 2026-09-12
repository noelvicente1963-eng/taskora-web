const app = require("./app");
const env = require("./core/config/env");

const server = app.listen(env.port, () => {
    console.log("");
    console.log("================================");
    console.log("       TASKORA API SERVER       ");
    console.log("================================");
    console.log(`Environment: ${env.nodeEnv}`);
    console.log(`Server:      http://localhost:${env.port}`);
    console.log(`API v1:      http://localhost:${env.port}/api/v1`);
    console.log("================================");
    console.log("");
});

function shutdown(signal) {
    console.log(`\n${signal} received.`);
    console.log("Shutting down server...");

    server.close(() => {
        console.log("Server closed.");
        process.exit(0);
    });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

