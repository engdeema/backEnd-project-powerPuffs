const Recipes = require("../../db/models/Recipes");

// REVIEW: Correct naming fetchRecipes
// REVIEW: Correct naming recipeId
exports.fetchrecipies = async (recipieId, next) => {
  try {
    // REVIEW: Correct naming recipes
    const recipies = await Recipes.findById(recipieId);
    return recipies;
  } catch (error) {
    next(error);
  }
};
exports.recipiesListFetch = async (req, res, next) => {
  try {
    //  not nafs spelling el model, nafs spelling el field in the Recipe model
    //populate :نفس سبلنق المودل نبي نعبيه
    const recipies = await Recipes.find().populate("categories");
    return res.json(recipies);
  } catch (error) {
    next(error);
  }
};
