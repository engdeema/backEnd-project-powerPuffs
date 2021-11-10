const Category = require("../../db/models/Category");
const Recipe = require("../../db/models/Recipe");

exports.fetchCategories = async (req, res, next) => {
  try {
    const category = await Category.find().populate("recipes");
    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

exports.fetchCategory = async (categoryId, next) => {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    next(error);
  }
};

exports.createCategories = async (req, res, next) => {
  try {
    //i called the recipe from the model and give it an Id

    req.body.recipe = req.params.recipeId;
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.recipeCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }
    req.body.category = req.params.categoryId;
    const newRecipe = await Recipe.create(req.body);
    await Category.findByIdAndUpdate(req.category, {
      $push: { recipes: newRecipe._id },
    });
    return res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
