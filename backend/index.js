require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");


const app = express();

//import Routes
const userRoutes = require("./routes/userRoutes");
const facilityRoutes = require("./routes/facilitiesRoute");
const mapRoutes = require("./routes/mapRoute");

mongoose.connect(process.env.MONGODB_URI).then((res)=>{
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});


// Security Middleware
app.use(helmet()); // Adds security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests
app.use(morgan("dev")); // Logging

// Rate Limiting - Prevents DDoS attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Basic Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the secure server!" });
});

app.use("/api/users",userRoutes);
app.use("/api/facilities",facilityRoutes);
app.use("/api/map",mapRoutes);
