const express = require("express");
const { signup, signin, logout } = require("./users.controllers");
const passport = require("passport");

// Create a mini express application
const router = express.Router();

router.post("/signup", signup);
router.post(
  "/signin/",
  passport.authenticate("local", { session: false }),
  signin
);
// router.delete("/logout", logout);

module.exports = router;
