const express = require("express");
const passport = require("passport");

const {
  fetchCategories,
  createCategories,
} = require("./categories.controllers");

// Create a mini express application
const router = express.Router();
const upload = require("../../middleware/multer");

router.get("/", fetchCategories);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  createCategories
);
module.exports = router;
