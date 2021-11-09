const mongoose = require("mongoose");

// const mongooseSlugPlugin = require("mongoose-slug-plugin");

const CategoriesSchema = new mongoose.Schema({
  name: String,
  // slug: String,
  image: String,
  recipes: [
    {
      // to link them
      type: mongoose.Schema.Types.ObjectId,
      // اسم المودل
      ref: "Recipe",
    },
  ],

  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
});
// ShopSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Categories", CategoriesSchema);
