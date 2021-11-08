const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
// const mongooseSlugPlugin = require("mongoose-slug-plugin");

const CategoriesSchema = new mongoose.Schema({
  name: String,
  // slug: String,
  image: { type: String },
  // recipes: [
  //   {
  //     // to link them
  //     type: Schema.Types.ObjectId,
  //     // اسم المودل
  //     ref: "Recipes",
  //   },
  // ],

  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
});
// ShopSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Categories", CategoriesSchema);
