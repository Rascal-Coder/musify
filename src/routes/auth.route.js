"use strict";
const router = require('express').Router();
const { auth,callback } = require('../controllers/auth.controller');
router.get('/', auth);
router.get("/callback", callback)
module.exports = router;