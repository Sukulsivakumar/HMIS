const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "userName is required"],
  },
});

let usersModel = mongoose.model("user", userSchema);
module.exports = usersModel;
