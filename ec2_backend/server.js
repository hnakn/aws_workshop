const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Allow frontend requests
app.use(cors());

// Basic test route
app.get("/", (req, res) => {
  res.json({
    message: "Hello from EC2 backend!",
    status: "Server is running successfully 🚀"
  });
});

// Example API route
app.get("/api/data", (req, res) => {
  res.json({
    name: "AWS Champs Workshop",
    version: "1.0",
    cloud: "EC2"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
