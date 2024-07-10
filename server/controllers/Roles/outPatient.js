const outPatientModel = require("../../Models/Roles/outPatient");
const credentialModel = require("../../Models/Auth/Credentials");
const userNameModel = require("../../Models/Other/userName");

const generatePatientID = async () => {
  let newId;
  do {
    const randomNum = Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0");
    newId = `P${randomNum}`;
  } while (await outPatientModel.exists({ patientId: newId }));
  return newId;
};

exports.newOutPatient = async (req, res, next) => {
  try {
    const {
      userName,
      password,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      bloodGroup,
      gender,
      addressLine,
      city,
      state,
      country,
      pincode,
      mobileNumber,
      email,
      assignDoctor,
      symptoms,
      diagnosisReport,
      image,
    } = req.body;

    const available = await userNameModel.findOne({ userName: userName });
    if (!available) {

      const patientId = await generatePatientID();
      const newOutPatient = new outPatientModel({
        patientId,
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        bloodGroup,
        gender,
        addressLine,
        city,
        state,
        country,
        pincode,
        mobileNumber,
        email,
        assignDoctor,
        symptoms,
        diagnosisReport,
        image,
      });

      await newOutPatient.save();

      const newCredentials = new credentialModel({
        userName,
        password,
        role :'patient'
      })

      await newCredentials.save()
      await userNameModel.create({userName})
      res.status(201).json({
        success: true,
        message: "Out Patient added",
        patientId
      });

    }
    else{
      res.json({
        success: false,
        message: "This username is already taken"
      })
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Process failed something went wrong",
    });
  }
};
