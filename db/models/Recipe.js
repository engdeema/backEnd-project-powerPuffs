const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema({
  name: String,
  //   // slug: String,
  image: { type: String },

  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
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
module.exports = mongoose.model("Recipes", RecipesSchema);
