
const path = require("path");
const ejs = require("ejs");
const session = require("express-session");
const express = require('express');
const passport = require("passport");
const app = express();
require("./auth");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: "Mich" })); 
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.send('index');
  });

 
app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "auth/failure",
  })
);

app.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello.... ${req.user.displayName}`);
});

app.get("/auth/failure", (req, res) => {
  res.send("You were not authenticated");
});

app.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("You have been successfully logged out");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
