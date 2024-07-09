const mongoose = require('mongoose')
const validator = require("validator")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const doctorModel = require('../Roles/Doctor')

const credentialSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "userId is required"],
        unique: [true, "userId already exist"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be atleast 8 characters"],
        maxlength: [15, "password must be atmost 15 charcters"],
        validate: {
            validator: function(value) {
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    maxlength: 15,
                    minLowercase: 1,
                    minNumbers: 1,
                    minUppercase: 1,
                    minSymbols: 1
                })
            },
            message:"Password is not Strong"
        },
        select: false
    },
    role:{
        type: String,
        required: [true, "Role is required"],
    }
})

credentialSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

let credentialModel = mongoose.model("Credentials", credentialSchema);

module.exports = credentialModel;