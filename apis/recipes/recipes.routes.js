const express = require("express");
const { recipeListFetch, fetchRecipes } = require("./recipes.controllers");

// Create a mini express application
const router = express.Router();

router.get("/", recipeListFetch);
// router.param("categoryId", async (req, res, next, categoryId) => {
//   const category = await fetchRecipes(categoryId, next);
//   if (category) {
//     req.category = category;
//     next();
//   } else {
//     next({ status: 404, message: "Shop Not Found!" });
//   }
// });

module.exports = router;
