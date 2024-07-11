const mongoose = require("mongoose");

const userNameSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "userName is required"],
    unique: true,
    index: true,
  },
});

let userNameModel = mongoose.model("userName", userNameSchema);
module.exports = userNameModel;
