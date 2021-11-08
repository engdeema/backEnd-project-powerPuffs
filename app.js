// importing express
const express = require("express");
// app instance
const app = express();
// to remove the block from browser
const cors = require("cors");
const categoriesRoutes = require("./apis/categories/categories.routes");
const ingredientsRoutes = require("./apis/ingredients/ingredients.routes");
const recipesRoutes = require("./apis/recipes/recipes.routes");
const connectDb = require("./database");
// calling should be before "listen" function
connectDb();

//bind the app with port 8000
const PORT = 8000;
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
// to have the data passed from body when req.
app.use(express.json());
app.use(cors());

// routes
app.use("/?", categoriesRoutes);
app.use("/?", ingredientsRoutes);
app.use("/?", recipesRoutes);
