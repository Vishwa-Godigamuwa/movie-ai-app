const express = require("express");

const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("🚀 Movie AI Backend Running");
});

// start server
app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});