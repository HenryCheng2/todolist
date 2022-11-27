const express = require("express");
const bodyParser = require("body-parser");
//require
const app = express();

let items=[ "buy food","cook food","eat food"];
let workItems=[];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //allows the server to retreive static files in the public folder

app.get("/", function (req, res) {
  var today = new Date();

  var options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
  };
  
  var day =today.toLocaleDateString("en-US", options); //convets varible today to a string for current date. 

  res.render("list", { ListTitle: day, newListItem:items });
  // renders the list.ejs file as a webpage and passes the variable 'day' into the ListTitle variable listed between the <%= EJS %> marker.
});

// handle post request from list.ejs
app.post("/", function(req, res){
  var item = req.body.newItem;
  
  if(item == ""){
    console.log("blank input");
    res.redirect("/");
    return 0;
  }

  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }


});

// takes the template from the "/" page and uses it to make the work page
app.get("/work",function(req, res){
  res.render("list",{ListTitle: "Work List", newListItem:workItems});
});



app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
