const express = require("express");
const bodyParser = require("body-parser");
//require 
const app = express();

app.get("/", function(req, res){
    var today = new Date();
    var currentday = today.getDay();
    console.log(today.getDay());
    currentday=2;
    if(currentday=== 6||currentday=== 0){
     return res.send("weekend");
    }else{
     return res.sendFile(__dirname+"/index.html");
    }
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
