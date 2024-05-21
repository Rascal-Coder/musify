"use strict";

/**
 * Node modules
 */
const router = require("express").Router();

/**
 * Custom modules
 */
const { login } = require("../controllers/login.controller");

router.get("/", login);

module.exports = router;
