// importing express
const express = require("express");
// app instance
const app = express();
//bind the app with port 8000
const PORT = 8000;
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
