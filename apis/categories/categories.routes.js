const express = require("express");
const passport = require("passport");
const upload = require("../../middleware/multer");

const {
  fetchCategories,
  createCategories,
  recipeCreate,
} = require("./categories.controllers");

// Create a mini express application
const router = express.Router();

router.get("/", fetchCategories);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  createCategories
);

router.post(
  "/:categoryId/recepies",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  recipeCreate
);

router.param("categoryId", async (req, res, next, categoryId) => {
  const category = await fetchCategories(categoryId, next);
  if (category) {
    req.category = category;
    next();
  } else {
    next({ status: 404, message: "Category Not Found!" });
  }
});

module.exports = router;
