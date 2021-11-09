const { model, Schema } = require("mongoose");

// REVIEW: Model file name should be singular: User.js

const UserSchema = Schema({
  username: { type: String, unique: true },
  password: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
});

module.exports = model("User", UserSchema);
