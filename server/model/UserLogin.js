const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userlogin = new Schema({
    userName:String,
    password:String,
    email:String,
    phoneno:String,
    aboutme:String


})

module.exports = mongoose.model("userlogin",userlogin,"userloginDetails");