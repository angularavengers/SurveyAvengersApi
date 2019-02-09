
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./server/routes/api");
const favicon = require('serve-favicon');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// app.use(express.static(path.join(__dirname,"dist")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, '/favicon.ico')));


app.use("/api",api);

app.use("*",(req,res)=>{
    // res.json("This is only demo app")
    // res.sendFile(path.join(__dirname,'dist/index.html'));
    res.json("This is only demo app")
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});