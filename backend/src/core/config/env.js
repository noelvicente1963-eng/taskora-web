const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const nodeEnv = process.env.NODE_ENV || "development";
const envFile = `.env.${nodeEnv}`;
const envPath = path.resolve(process.cwd(), envFile);

if (!fs.existsSync(envPath)) {
    console.warn(
        `[CONFIG WARNING] ${envFile} was not found. Using default configuration.`
    );
} else {
    dotenv.config({ path: envPath });
}

const env = {
    nodeEnv,
    port: Number(process.env.PORT) || 3000
};

module.exports = env;

