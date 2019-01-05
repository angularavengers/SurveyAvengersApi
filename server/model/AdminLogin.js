const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Adminlogin = new Schema({
    userName:String,
    password:String,
    userType:String
})

module.exports = mongoose.model("loginDetails",Adminlogin,"userData");