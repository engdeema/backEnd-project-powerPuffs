const express = require("express");
const {
  fetchCategories,
  createCategories,
} = require("./categories.controllers");

// Create a mini express application
const router = express.Router();

router.get("/", fetchCategories);
router.post("/", createCategories);
module.exports = router;
