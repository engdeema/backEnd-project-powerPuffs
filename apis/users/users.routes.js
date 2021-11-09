const express = require("express");
const { signup, signin, logout } = require("./users.controllers");
const passport = require("passport");
// REVIEW: Remove unused requires

// Create a mini express application
const router = express.Router();

router.post("/signup", signup);
router.post(
  "/signin/",
  passport.authenticate("local", { session: false }),
  signin
);
// REVIEW: We don't create a route for the logout, we only delete the token  in the frontend
// router.delete("/logout", logout);

module.exports = router;
