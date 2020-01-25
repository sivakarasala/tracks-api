require("./models/User");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

// Load env vars
dotenv.config({ path: __dirname + "/config/config.env" });

// Connect to database
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

const port = process.env.PORT || 5000;
app.get("/", requireAuth, (req, res) => {
  res.send("Aum Namah Shivaya");
});

const server = app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
