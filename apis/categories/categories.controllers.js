const Categories = require("../../db/models/Categories");

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
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }
    const newCategory = await Categories.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};
