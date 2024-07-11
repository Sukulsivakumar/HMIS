const mongoose = require("mongoose");

const outPatientAppointmentTimeSchema = new mongoose.Schema({
  appointments: {
    type: [Date],
    required: true,
  },
});

let outPatientAppointmentTimeModel = mongoose.model(
  "OP Appointment Time",
  outPatientAppointmentTimeSchema
);

module.exports = outPatientAppointmentTimeModel;
