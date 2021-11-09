const Categories = require("../../db/models/Categories");

// REVIEW: I believe this is supposed to be the fetchCAtegory function and categoriesListFetch is what fetches all categories
exports.fetchCategories = async (req, res, next) => {
  try {
    const category = await Categories.find();
    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

// exports.categoriesListFetch = async (req, res, next) => {
//   try {
//     //هذا اللي عليه البوبيوليت انقريدينت ،، داخل المودل كاتيجوري
//     const categories = await Category.find().populate("recipes");
//     return res.json(categories);
//     console.log(categories);
//   } catch (error) {
//     next(error);
//   }
// };

exports.createCategories = async (req, res, next) => {
  try {
    const newCategory = await Categories.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};
