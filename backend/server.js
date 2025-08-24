// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

// Middleware for parsing JSON and handling CORS
app.use(cors());
app.use(express.json());

// Load API routes
const travelPlansRouter = require("./routes/travelPlans");
app.use("/api/travel-plans", travelPlansRouter); // 라우터 사용 (app 초기화 후)

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

// Root route to check if the server is running
app.get("/", (req, res) => {
  res.send("Travel Planner Backend is running!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
