
const path = require("path");
const ejs = require("ejs");
const session = require("express-session");
const express = require('express');
const passport = require("passport");
const { userInfo } = require("os");
const { response } = require("express");
const app = express();
require("./auth");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
  
}

app.use(session({
secret: "Mich", 
SameSite: 'none',
secure: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ 
  extended: true, 
  SameSite: 'none'
}));

//app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    SameSite: 'none', 
    secure: true
  }
}));


app.get("/", (req, res) => {
    res.render('index');
  });

app.get(
    "/auth/google",
    passport.authenticate("google", { 
      scope: ["email", "profile"], 
      SameSite: 'none'})
  );

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "auth/failure",
    SameSite: 'none', 
    secure: true
  })
);


// app.get("/home", isLoggedIn, (req, res) => {
//   res.render('home');
//   //res.send(`Hello! ${req.user.displayName
//   //}`
//   //);
// });


//  app.get("/food_descriptions", (req, res) => {
//     res.render('food_descriptions');
// });

// app.get("/online_oredering", (req, res) => {
//   res.render('food_descriptions')
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));