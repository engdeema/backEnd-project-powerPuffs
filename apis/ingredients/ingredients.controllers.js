// const Ingredients = require("../../db/models/Ingredient");

// exports.fetchingredients = async (req, res, next) => {
//   try {
//     const ingredients = await Ingredients.find();
//     return res.status(200).json(ingredients);
//   } catch (error) {
//     next(error);
//   }
// };
// exports.ingredientsListFetch = async (req, res, next) => {
//   try {
//     //populate :نفس سبلنق المودل نبي نعبيه
//     const ingredients = await Categories.find().populate("categories");
//     return res.json(ingredients);
//   } catch (error) {
//     next(error);
//   }
// };
