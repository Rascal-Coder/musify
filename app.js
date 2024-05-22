"use strict";

/**
 * Node modules
 */
const cors = require("cors");
const cookieParser = require("cookie-parser");
const https = require("https");
const fs = require("fs");
const path = require("path");
/**
 * Custom modules
 */
const login = require("./src/routes/login.route");

// Initialize express app
const express = require("express");
const app = express();
/**
 * Ejs setting
 */
app.set("view engine", "ejs");

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Middleware setting
 */
app.use(cors()).use(cookieParser());

/**
 * Login page
 */
app.use("/login", login);
const certPath = path.join(__dirname, "./ssl/musify.ras-cal.cc.pem");
const keyPath = path.join(__dirname, "./ssl/musify.ras-cal.cc.key");

const options = {
  cert: fs.readFileSync(certPath),
  key: fs.readFileSync(keyPath),
};

const server = https.createServer(options, app);

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server listening at https://localhost:${PORT}`);
});
