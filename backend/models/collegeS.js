const mongoose = require('mongoose');

const collegeSearchSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

const collegeSearchModel = mongoose.model("collegeSearch", collegeSearchSchema)

module.exports = collegeSearchModel;