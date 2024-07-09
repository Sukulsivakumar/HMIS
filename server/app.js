const express = require("express");
const cors = require("cors");
const app = express();
const outPatientRoute = require("./Routes/Roles/outPatient");

app.use(cors());
app.use(express.json());

app.use("/api/outpatient", outPatientRoute);
module.exports = app;
