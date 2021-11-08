const mongoose = require("mongoose");
const IngredientsSchema = new mongoose.Schema({});
module.exports = mongoose.model("Ingredients", IngredientsSchema);
