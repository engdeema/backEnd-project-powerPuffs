const Categories = require("../../db/models/Categories");

exports.fetchcategory = async (req, res, next) => {
  try {
    const category = await Categories.find();
    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};
