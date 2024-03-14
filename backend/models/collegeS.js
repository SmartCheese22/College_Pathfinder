const mongoose = require('mongoose');

const collegeSearchSchema = new mongoose.Schema({
    userType: {
        type: String,
        default: "collegeSearch"
    },
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
})

const collegeSearchModel = mongoose.model("collegeSearch", collegeSearchSchema)

module.exports = collegeSearchModel;