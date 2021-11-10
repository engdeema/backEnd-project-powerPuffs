const Recipe = require("../../db/models/Recipe");

exports.fetchRecipe = async (recipeId, next) => {
  try {
    const recipes = await Recipe.findById(recipeId);
    return recipes;
  } catch (error) {
    next(error);
  }
};
exports.recipeListFetch = async (req, res, next) => {
  try {
    //populate :نفس سبلنق المودل نبي نعبيه
    const recipe = await Recipe.find().populate("categories");
    return res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }

  exports.productDetailFetch = async (req, res, next) =>
    res.status(200).json(req.product);
};
