const outPatientModel = require("../../Models/Roles/outPatient");
const credentialModel = require("../../Models/Auth/Credentials");

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

const generateUserName = async (firstName, lastName) => {
  let baseUsername = (firstName + lastName).toLowerCase();
  if (baseUsername.length < 5) {
    baseUsername = baseUsername.padEnd(5, "0");
  } else {
    baseUsername = baseUsername.substring(0, 5);
  }

  let newUsername = baseUsername;
  let counter = 1;

  while (await credentialModel.exists({ userId: newUsername })) {
    newUsername = `${baseUsername}${counter}`;
    counter++;
  }

  return newUsername;
};

exports.newOutPatient = async (req, res, next) => {
  try {
    const {
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

    const patientId = await generatePatientID();
    const userName = await generateUserName(firstName, lastName);

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

    res.status(201).json({
      success: true,
      message: "Out Patient added",
      patientId,
      userName,
    });
  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: "Process faild something went wrong",
    });
  }
};
