const mongoose = require("mongoose");
const RecipesSchema = new mongoose.Schema({});
module.exports = mongoose.model("Recipes", RecipesSchema);
