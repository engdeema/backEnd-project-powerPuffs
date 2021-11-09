const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
// REVIEW: Remove unused requires

// REVIEW: Model file name should be singular: Recipe.js
// Apply to all models please
const RecipesSchema = new mongoose.Schema({
  name: String,
  //   // slug: String,
  image: { type: String },

  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
  // ingredients: [
  //   {
  //     // to link them
  //     type: Schema.Types.ObjectId,
  //     // اسم المودل
  //     ref: "Ingredients",
  //   },
  // ],
});

// REVIEW: Model name should be singular
// Fix in all models
module.exports = mongoose.model("Recipes", RecipesSchema);
