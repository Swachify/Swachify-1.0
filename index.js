const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = 3000;


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    console.log("hello");
    res.render("index");
  });
//login authentication
app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });


  app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
  });