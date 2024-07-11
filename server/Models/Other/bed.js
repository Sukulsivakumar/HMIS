const mongoose = require("mongoose");

const bedSchema = new mongoose.Schema({
  bedCategory: {
    type: String,
    required: [true, "Bed categoru is required"],
  },
  bedNumber: {
    type: String,
    required: [true, "Bed Number is required"],
  },
  charges: {
    type: String,
    required: [true, "Charge is required"],
  },
  tax: {
    type: String,
    required: [true, "Tax is required"],
  },
  bedLocation: {
    type: String,
    required: [true, "Bed Location is required"],
  },
  description: {
    type: String,
  },
  status:{
    type: String,
    required: [true, "Bed status is required"],
    enum:{
        type: String,
        values:[
            "Occupied",
            "Available"
        ]
    }
  }
});

let bedModel = mongoose.model("Bed", bedSchema);

module.exports = bedModel;
