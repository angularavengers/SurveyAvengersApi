const express = require("express");
const router= express.Router();
const mongoose = require("mongoose");
const userModel = require("../model/AdminLogin");

const db= "mongodb://sourabh.sahu:Dada8921@ds139632.mlab.com:39632/surveravengers"

mongoose.Promise = global.Promise;

mongoose.connect(db,{ useNewUrlParser: true },function(err){
 if (err){
     console.log("Error occured" + err)
 }
})

router.get("/userLogin",(req,res)=>{
    userModel.find({})
    .exec((err,data)=>{
      if(err){
          res.send("Error aalla bhau " + err);
      }
      console.log(data);
      res.json(data)
    });
})

module.exports = router
