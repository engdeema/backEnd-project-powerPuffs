const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const IngredientsSchema = new mongoose.Schema({
  name: String,
  // slug: String,
  image: { type: String },
  // categories: [
  //   {
  //     // to link them
  //     type: Schema.Types.ObjectId,
  //     // اسم المودل
  //     ref: "Categories",
  //   },
  // ],
});
module.exports = mongoose.model("Ingredients", IngredientsSchema);
