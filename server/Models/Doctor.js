const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { CountryCodes } = require("validator/lib/isISO31661Alpha2");

const doctorSchema = new mongoose.Schema({
  fisrtName: {
    type: String,
    required: [true, "Name is required"],
    minlengt: [3, "Name must be atleast 3 characters"],
    minlengt: [20, "Name must be atmost 20 characters"],
  },
  middleName: {
    type: String,
    minlengt: [3, "Name must be atleast 3 characters"],
    minlengt: [20, "Name must be atmost 20 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Name is required"],
    minlengt: [3, "Name must be atleast 3 characters"],
    minlengt: [20, "Name must be atmost 20 characters"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of Birth is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["Male", "female", "Transgender"],
    },
  },
  homeAddress: [
    {
      addressLine: {
        type: String,
        required: [true, "Address is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
      state: {
        type: String,
        required: [true, "State is required"],
      },
      country: {
        type: String,
        required: [true, "Country is required"],
      },
      pincode: {
        type: Number,
        required: [true, "Pincode is required"],
      },
    },
  ],
  officeAddress: [
    {
      addressLine: {
        type: String,
        required: [true, "Address is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
      state: {
        type: String,
        required: [true, "State is required"],
      },
      country: {
        type: String,
        required: [true, "Country is required"],
      },
      pincode: {
        type: Number,
        required: [true, "Pincode is required"],
      },
    },
  ],
  degree: [
    {
      type: String,
      required: true,
    },
  ],
  mobileNumber:{
    type: Number,
    required : [true, "Mobile Number is required"],
    validate: [validator.isNumeric , "Enter a valid Mobile Number"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please enter a valid email Id"],
    unique: true,
  },
  department:{
    type: String,
    required : [true, "Departememt is required"],    
  },
  specialization:{
    type: String,
    required: [true, "Specialization is required"]
  },
  vistingCharge:{
    type: String,
    required : [true, "Visiting Charge is required"]
  },
  consultingCharge:{
    type: String,
    required:[true, "Consulting Charge is required"]
  },
  image:{
    type: String,
  },
  cv:{
    type: String
  },
  educationCertificate:{
    type: String
  },
  experienceCertficate:{
    type: String
  }
});

doctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

let doctorModel = mongoose.model("doctor", doctorSchema);

module.exports = doctorModel;
