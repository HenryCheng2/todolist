const express = require("express");
const bodyParser = require("body-parser");
//require
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentday = today.getDay();
  var day="";
  console.log("today is"+ currentday);
  switch (currentday) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
    case 6:
      day = "Saturday";
      break;

    default:
    console.log("error: current day is equal to: "+currentday);

  }
  // if (currentday === 6 || currentday === 0) {
  //   day = "weekend";
  // } else {
  //   day = "weekday";
  // }
  
  res.render("list", { kindOfDay: day });
  // renders the list.ejs file as a webpage and passes the variable 'day' into the kindOfDay variable listed between the <%= EJS %> marker.
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
