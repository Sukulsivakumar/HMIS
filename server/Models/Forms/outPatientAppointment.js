const mongoose = require("mongoose");
const validator = require("validator");

const outPatientAppointmentSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: [true, "patient Id is required"],
    validate: [validator.isAlphanumeric, "patient Id must be Alphanumeric"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  appointmentTime: {
    type: Date,
    required: [true, "Appointment time is required"],
  },
  temparature: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  symptoms: {
    type: String,
    required: [true, "Symptoms is required"],
  },
  doctor: {
    type: String,
    required: [true, "Doctor Should be selected"],
  },
});

let outPatientAppointmentModel = mongoose.model(
  "OP Appointment",
  outPatientAppointmentSchema
);

module.exports = outPatientAppointmentModel;
