const express = require("express");
const { newOutPatient } = require("../../controllers/Roles/outPatient");
const Router = express.Router();

Router.route("/addop").post(newOutPatient);

module.exports = Router;
