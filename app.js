"use strict";

/**
 * Node modules
 */
const cors = require("cors");
const cookieParser = require("cookie-parser");

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

app.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`);
});
