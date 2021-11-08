const express = require("express");
const { fetchcategory } = require("./categories.controllers");

// Create a mini express application
const router = express.Router();

router.get("/", fetchcategory);
module.exports = router;
