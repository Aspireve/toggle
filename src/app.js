const express = require("express");
const deviceRoutes = require("./route/device-route");
const app = express();
const cors = require("cors");
const prisma = require("./prisma/client");

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("", deviceRoutes);

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to the database");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to the database:", err.message);
    process.exit(1);
  }
}

startServer();
