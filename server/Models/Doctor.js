const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const doctorSchema = new mongoose.Schema({
    doctorId: {
        type: String,
        required: [true, "userId is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlengt: [8, "password must be atleast 8 characters"],
        select: false
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        minlengt: [3, "Name must be atleast 3 characters"],
        minlengt: [20, "Name must be atmost 20 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please enter a valid email Id"],
        unique: true
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
        enum: {
            values: [
                "Male",
                "female",
                "Transgender"
            ]
        }
    },
    dateOfBirth:{
        type: Date,
        required: [true,"Date of Birth is required"]
    },
    homeAddress: [{
        addressline: {
            type: String,
            required: [true,"Address is required"]
        },
        pincode:{
            type:Number,
            required: [true, "Pincode is required"]
        }
    }],
    department: {
        type: String,
        required: [true, "Department is required"],
    },
    degree: [
        {
            type: String,
            required: true
        }
    ],

});

doctorSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

let doctorModel = mongoose.model('doctor', doctorSchema);

module.exports = doctorModel;