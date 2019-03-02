const express = require("express");
const router= express.Router();
const mongoose = require("mongoose");
// const userModel = require("../model/AdminLogin");
const userLogin = require("../model/UserLogin");


const db= "mongodb://sourabh.sahu:Dada8921@ds139632.mlab.com:39632/surveravengers"

mongoose.Promise = global.Promise;

mongoose.connect(db,{ useNewUrlParser: true },function(err){
 if (err){
     console.log("Error occured" + err)
 }
})
// Sourabh--- Created to get all data based on route
router.get("/",(req,res)=>{
   res.status(200).json({data:"This is parent Route"})
})
// Creted to post data with values (user,password,email,phoneno,aboutme)
router.post("/signup",(req,res)=>{
    console.log(req.body);
   var signup = new userLogin();
   signup.userName=req.body.user;
   signup.password=req.body.password;
   signup.email=req.body.email;
   signup.phoneno=req.body.phoneno;
   signup.aboutme=req.body.aboutme   
   
     signup.save(
     function (error, success) {
         if (error) {
             console.log(error);
         } else {
             res.json(success)
         }
        }
     )
    })



router.put("/updateuser",(req,res)=>{
    userLogin.findByIdAndUpdate(req.body.id, {
        userName:req.body.user,
        password:req.body.password,
        email:req.body.email,
        phoneno:req.body.phoneno,
        aboutme:req.body.aboutme
     }, {new: true})
     .then(note => {
         if(!note) {
             return res.status(404).send({
                 message: "Note not found with id " + req.params.noteId
             });
         }
         res.send({
            message: "updated successfully--- " + note 
        });
     }).catch(err => {
         if(err.kind === 'ObjectId') {
             return res.status(404).send({
                 message: "Note not found with id " + req.params.noteId
             });                
         }
         return res.status(500).send({
             message: "Error updating note with id " + req.params.noteId
         });
     });
     
    })

router.delete("/deleteuser",(req,res)=>{
    console.log(req.body.id);
    userLogin.findByIdAndRemove(req.body.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.body.id
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.body.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.body.id
        });
    });
})

router.post("/login",(req,res)=>{
    console.log(req.body.email);
    userLogin.findOne({'email':req.body.email},(err,data)=>{
        console.log(data);
        if(!data) {
            return res.status(404).send({
                message: "User Not found " + req.body.email
            });
         }
         res.send({message: "Logeed in successfully!",data:data});
    
    })
    
})    

router.get("/getalluser",(req,res)=>{
res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
userLogin.find({})
.exec((err,data)=>{
    if(err){
        res.send("error finding in data " + err);
    }
    res.json(data)
});

})

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
//    signup.userName="Krisan";
//    signup.password="XXXX";
//    signup.userType="Admin";
//    signup.surveyDetails={
//                     suerveyId:123456,
//                     surveyQuestion:[
//                         {question:"New question",options:["HTML","Javascript","Angular","Java"]}
//                     ]
//             }
//        signup.save((err,user)=>{
//          if(err){
//              console.log("error in saving user")
//          }else{
//              res.json(user);
//          }
//        });
       

//    userModel.findOneAndUpdate(
//     { _id: "5c44c9151fb8ac1750e49eb0"}, 
//     { $push: { SurveyDetails: {
//                     suerveyId:00002,
//                     surveyQuestion:[
//                         {question:"New question",options:["HTML","Javascript","Angular","Java"]}
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
//     )
//     })

//    signup.SurveyDetails={
//             suerveyId:123456,
//             surveyQuestion:[
//                 {question:"New question",options:["HTML","Javascript","Angular","Java"]}
//         ]
//     }



//    signup.update(
//     { _id: "5c44c9151fb8ac1750e49eb0"}, 
//     { $push: { SurveyDetails: signup.SurveyDetails } }
// );
//    signup.userName ="Abhina";
//    signup.password="dada8921@";
//    signup.userType = "Admin";
    // userModel.findByIdAndUpdate("5c44c9151fb8ac1750e49eb0",
    // {
    //     $set:{
    //         SurveyDetails:{
    //         suerveyId:123456,
    //         surveyQuestion:[
    //             {question:"New question",options:["HTML","Javascript","Angular","Java"]}
    //         ]
    //     }
    //  }
    // },{
    //   new :true,
    //  },
    //   function(err,userData){
    //       if(err){
    //           console.log("getting error to update details");
    //       }
    //       else{
    //           res.json(userData)
    //       }

    //   }) 

//    signup.sureveys=[
//         {
//             SurveyDetails:{
//                 suerveyId:123456,
//                 surveyQuestion:[
//                     {question:"New question",options:["HTML","Javascript","Angular","Java"]}
//                 ]
//             }
//         }
//     ]    

//    signup.save((err,user)=>{
//      if(err){
//          console.log("error in saving user")
//      }else{
//          res.json(user);
//      }
//    });
   



module.exports = router
