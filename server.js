const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./server/routes/api");

const port = process.env.port || 3000;

const app = express(); 

// app.use(express.static(path.join(__dirname,"dist")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

app.use("/api",api);

app.use("*",(req,res)=>{
    res.json("This is only demo app")
    // res.sendFile(path.join(__dirname,'dist/index.html'));
})

app.listen(port,function(){
    //alert(__dirname);
    console.log("listeing at port 3000");
})