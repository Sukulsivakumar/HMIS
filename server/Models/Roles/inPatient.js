const mongoose = require("mongoose");
const validator = require("validator");

const inPatientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: [true, "patient Id is required"],
    validate: [validator.isAlphanumeric, "patient Id must be Alphanumeric"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "First Name is required"],
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
  bloodGroup: {
    type: String,
    required: [true, "Blood Group is required"],
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
  mobileNumber: {
    type: Number,
    required: [true, "Mobile Number is required"],
    validate: [validator.isNumeric, "Enter a valid Mobile Number"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please enter a valid email Id"],
    unique: true,
  },
  image: {
    type: String,
  },
  guardianFirstName: {
    type: String,
    required: [true, "First Name is required"],
    minlengt: [3, "Name must be atleast 3 characters"],
    minlengt: [20, "Name must be atmost 20 characters"],
  },
  guardianMiddleName: {
    type: String,
    minlengt: [3, "Name must be atleast 3 characters"],
    minlengt: [20, "Name must be atmost 20 characters"],
  },
  guardianLastName: {
    type: String,
    required: [true, "Last Name is required"],
    minlengt: [3, "Name must be atleast 3 characters"],
    minlengt: [20, "Name must be atmost 20 characters"],
  },
  guardianGender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["Male", "female", "Transgender"],
    },
  },
  guardianRelation: {
    type: String,
    required: [true, "Realtionship with patient is required"],
  },
  guardianAddress: [
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
  guardianMobileNumber: {
    type: Number,
    required: [true, "Mobile Number is required"],
    validate: [validator.isNumeric, "Enter a valid Mobile Number"],
  },
  admitDate: {
    type: Date,
    required: [true, "Admit date is required"],
  },
  admitTime: {
    type: String,
    required: [true, "Admit Time is required"],
  },
  patientStatus: {
    type: String,
    required: [true, "Patient Status is required"],
  },
  assignDoctor: {
    type: String,
    required: [true, "In patient must be assigned with a doctor"],
  },
  symptoms: {
    type: String,
    required: [true, "Symptoms is required"],
  },
});

let inPatientModel = mongoose.model("In Patient", inPatientSchema);

module.exports = inPatientModel;
