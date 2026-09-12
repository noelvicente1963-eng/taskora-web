const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/v1", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Taskora API v1 is running"
    });
});

module.exports = app;

