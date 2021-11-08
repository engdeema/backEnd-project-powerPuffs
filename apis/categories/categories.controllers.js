const Categories = require("../../db/models/Categories");

exports.fetchcategory = async (categoryId, next) => {
  try {
    const category = await Categories.findById(categoryId);
    return category;
  } catch (error) {
    next(error);
  }
};
