const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js"); //allows this page to access functions from another js page in the folder
//require


const app = express();

let items=[ "buy food","cook food","eat food"];
const workItems=[];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //allows the server to retreive static files in the public folder

app.get("/", function (req, res) {
  const day=date.getDate();
  res.render("list", { ListTitle: day, newListItem:items });
  // renders the list.ejs file as a webpage and passes the variable 'day' into the ListTitle variable listed between the <%= EJS %> marker.
});

// handle post request from list.ejs
app.post("/", function(req, res){
  const item = req.body.newItem;
  
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

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
