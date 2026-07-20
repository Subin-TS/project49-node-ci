const express = require("express");

const app = express();

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        message: "Project 49 API Running"
    });
});

// Health endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

// Info endpoint to trigger branch protection check
app.get("/info", (req, res) => {
    res.json({
        environment: "production",
        version: "1.0.0"
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}
