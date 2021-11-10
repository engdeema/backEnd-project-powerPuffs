const express = require("express");
const { recipeListFetch, fetchRecipe } = require("./recipes.controllers");
const upload = require("../../middleware/multer");

// Create a mini express application
const router = express.Router();

router.get("/", recipeListFetch);
// router.param("recipeId", async (req, res, next, recipeId) => {
//   const recipe = await fetchRecipe(recipeId, next);
//   if (recipe) {
//     req.recipe = recipe;
//     next();
//   } else {
//     next({ status: 404, message: "Recipe Not Found!" });
//   }
// });

module.exports = router;
