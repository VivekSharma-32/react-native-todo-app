const express = require("express");

// rest object
const router = express.Router();

// Routes
// REGISTER ROUTE || POST
router.post("/register");

// LOGIN ROUTE || POST
router.post("/login");

module.exports = router;
