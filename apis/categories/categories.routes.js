const express = require("express");
const {
  fetchCategories,
  createCategories,
  recipeCreate,
} = require("./categories.controllers");

// Create a mini express application
const router = express.Router();

router.get("/", fetchCategories);
router.post("/", createCategories);
// router.param("categoryId", async (req, res, next, categoryId) => {
//   const category = await fetchRecipes(categoryId, next);
//   if (category) {
//     req.category = category;
//     next();
//   } else {
//     next({ status: 404, message: "Shop Not Found!" });
//   }
// });

router.post("/:categoryId/recipes", recipeCreate);
module.exports = router;
