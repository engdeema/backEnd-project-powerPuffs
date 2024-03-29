const Recipe = require("../../db/models/Recipe");

exports.fetchRecipe = async (recipeId, next) => {
  try {
    const recipes = await Recipe.findById(recipeId);
    return recipes;
  } catch (error) {
    next(error);
  }
};

// exports.fetchCategories = async (req, res, next) => {
//   try {
//     const category = await Category.find();
//     // .populate("recipes");
//     return res.status(200).json(category);
//   } catch (error) {
//     next(error);
//   }
// };

exports.recipeListFetch = async (req, res, next) => {
  try {
    //populate :نفس سبلنق المودل نبي نعبيه
    const recipe = await Recipe.find().populate("categories");
    return res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};
