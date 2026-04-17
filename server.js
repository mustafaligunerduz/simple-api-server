const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// API KEY kontrol middleware
function checkApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({ error: "API key eksik" });
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: "Geçersiz API key" });
  }

  next();
}

// Public endpoint
app.get("/", (req, res) => {
  res.json({ message: "Server çalışıyor" });
});

// Protected endpoint
app.get("/data", checkApiKey, (req, res) => {
  res.json({
    success: true,
    data: "Bu veri API key ile korunuyor"
  });
});

// POST örnek
app.post("/echo", checkApiKey, (req, res) => {
  res.json({
    youSent: req.body
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server aktif: http://localhost:${PORT}`);
});
