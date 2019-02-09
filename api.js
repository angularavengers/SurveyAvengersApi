// const express = require("express");
// const router= express.Router();
// const mongoose = require("mongoose");
// const userModel = require("../model/AdminLogin");

// const db= "mongodb://sourabh.sahu:Dada8921@ds139632.mlab.com:39632/surveravengers"

// mongoose.Promise = global.Promise;

// mongoose.connect(db,{ useNewUrlParser: true },function(err){
//  if (err){
//      console.log("Error occured" + err)
//  }
// })

// router.get("/",(req,res)=>{
//    res.status(200).json({data:"Parent router"})
// })

// router.get("/userLogin",(req,res)=>{
//     userModel.findById("5c44c72aebe6d92b809bec17")
//     .exec((err,data)=>{
//       if(err){
//           res.send("Error aalla bhau " + err);
//       }
//       console.log(data);
//       res.json(data.sureveys)
//     });
// })

// router.get("/signup",(req,res)=>{
//    var signup = new userModel();
//      userModel.findOneAndUpdate(
//     { _id: "5c4c6d0b9f7534365ca53f53"}, 
//     { $push: { surveyDetails: {
//                     suerveyId:00002,
//                     surveyQuestion:[
//                         {question:"Question changed",options:["HTML1","Javascript2","Angular2","Java"]}
//                 ]
//             }
//         } },     
//      function (error, success) {
//          if (error) {
//              console.log(error);
//          } else {
//              res.json(success)
//          }
//         }
//      )

//     //   signup.userName="Krisan";
//     //     signup.password="XXXX";
//     //     signup.userType="Admin";
//     //     signup.surveyDetails={
//     //                         suerveyId:123456,
//     //                         surveyQuestion:[
//     //                             {question:"New question",options:["HTML","Javascript","Angular","Java"]}
//     //                         ]
//     //                 }
//     //         signup.save((err,user)=>{
//     //             if(err){
//     //                 console.log("error in saving user")
//     //             }else{
//     //                 res.json(user);
//     //             }
//     //         });


//     //   userModel.findOneAndUpdate(
//     // { _id: "5c44d1da971bf8422c3cd854"}, 
//     // { $push: { surveyDetails: {
//     //                 suerveyId:00002,
//     //                 surveyQuestion:[
//     //                     {question:"New question from db",options:["HTML1","Javascript2","Angular2","Java"]}
//     //             ]
//     //         }
//     //     } },     
//     //  function (error, success) {
//     //      if (error) {
//     //          console.log(error);
//     //      } else {
//     //          res.json(success)
//     //      }
//     //     }
// })
// //    signup.userName="Krisan";
// //    signup.password="XXXX";
// //    signup.userType="Admin";
// //    signup.surveyDetails={
// //                     suerveyId:123456,
// //                     surveyQuestion:[
// //                         {question:"New question",options:["HTML","Javascript","Angular","Java"]}
// //                     ]
// //             }
// //        signup.save((err,user)=>{
// //          if(err){
// //              console.log("error in saving user")
// //          }else{
// //              res.json(user);
// //          }
// //        });
       

// //    userModel.findOneAndUpdate(
// //     { _id: "5c44c9151fb8ac1750e49eb0"}, 
// //     { $push: { SurveyDetails: {
// //                     suerveyId:00002,
// //                     surveyQuestion:[
// //                         {question:"New question",options:["HTML","Javascript","Angular","Java"]}
// //                 ]
// //             }
// //         } },     
// //      function (error, success) {
// //          if (error) {
// //              console.log(error);
// //          } else {
// //              res.json(success)
// //          }
// //         }
// //     )
// //     })

// //    signup.SurveyDetails={
// //             suerveyId:123456,
// //             surveyQuestion:[
// //                 {question:"New question",options:["HTML","Javascript","Angular","Java"]}
// //         ]
// //     }



// //    signup.update(
// //     { _id: "5c44c9151fb8ac1750e49eb0"}, 
// //     { $push: { SurveyDetails: signup.SurveyDetails } }
// // );
// //    signup.userName ="Abhina";
// //    signup.password="dada8921@";
// //    signup.userType = "Admin";
//     // userModel.findByIdAndUpdate("5c44c9151fb8ac1750e49eb0",
//     // {
//     //     $set:{
//     //         SurveyDetails:{
//     //         suerveyId:123456,
//     //         surveyQuestion:[
//     //             {question:"New question",options:["HTML","Javascript","Angular","Java"]}
//     //         ]
//     //     }
//     //  }
//     // },{
//     //   new :true,
//     //  },
//     //   function(err,userData){
//     //       if(err){
//     //           console.log("getting error to update details");
//     //       }
//     //       else{
//     //           res.json(userData)
//     //       }

//     //   }) 

// //    signup.sureveys=[
// //         {
// //             SurveyDetails:{
// //                 suerveyId:123456,
// //                 surveyQuestion:[
// //                     {question:"New question",options:["HTML","Javascript","Angular","Java"]}
// //                 ]
// //             }
// //         }
// //     ]    

// //    signup.save((err,user)=>{
// //      if(err){
// //          console.log("error in saving user")
// //      }else{
// //          res.json(user);
// //      }
// //    });
   




// module.exports = router
