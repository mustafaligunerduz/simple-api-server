const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const routes = require("./routes");
const errorHandler = require("./errorHandler");

const app = express();

// 🔐 Security
app.use(helmet());

// ⛔ Rate limit
app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 60
}));

// 📦 JSON support
app.use(express.json());

// 📡 Routes
app.use("/api", routes);

// ❌ Error handler (EN SON)
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
