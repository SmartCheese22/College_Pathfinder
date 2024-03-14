const mongoose = require('mongoose');

const collegeGSchema = new mongoose.Schema({
    userType: {
        type: String,
        default: "collegeGoing"
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    email: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    graduationYear: {
        type: String,
        required: true,
    },
    opinion: {
        type: [String],
    },
}, { timestamps: true });

const collegeGoingModel = mongoose.model("collegeGoing", collegeGSchema)

module.exports = collegeGoingModel;