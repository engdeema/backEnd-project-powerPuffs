// importing express
const express = require("express");
// app instance
const app = express();
// to remove the block from browser
const cors = require("cors");
const categoriesRoutes = require("./apis/categories/categories.routes");
// const ingredientsRoutes = require("./apis/ingredients/ingredients.routes");
const recipesRoutes = require("./apis/recipes/recipes.routes");
const userRoutes = require("./apis/users/users.routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");

const connectDB = require("./db/database");

// calling should be before "listen" function
connectDB();
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use(logger);

app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// routes
app.use("/api/categories", categoriesRoutes);
// app.use("/?", ingredientsRoutes);
app.use("/api/recipes", recipesRoutes);
app.use("/api", userRoutes);

//bind the app with port 8000
const PORT = 8080;
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
// to have the data passed from body when req.
