const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const RecipesSchema = mongoose.Schema(
  {
    name: String,
    slug: String,
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
  },
  { timestamps: true }
);
RecipesSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Recipes", RecipesSchema);
