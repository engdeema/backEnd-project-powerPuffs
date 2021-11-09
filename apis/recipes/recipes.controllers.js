const Recipes = require("../../db/models/Recipes");

exports.fetchrecipies = async (recipieId, next) => {
  try {
    const recipies = await Recipes.findById(recipieId);
    return recipies;
  } catch (error) {
    next(error);
  }
};
exports.recipiesListFetch = async (req, res, next) => {
  try {
    //populate :نفس سبلنق المودل نبي نعبيه
    const recipies = await Recipes.find().populate("categories");
    return res.json(recipies);
  } catch (error) {
    next(error);
  }
};
