const express = require("express");
const axios = require("axios");
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const app = express();

const route = require("./routes/route")
const connectDB =require("./config/db")

//  Connect DB
connectDB();

// Middleware
app.use(express.json())
app.use(cors())

// Route
app.use("/api", route)

// PORT
const port = process.env.PORT || 5000; // Choose an appropriate port number

// Listen Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
