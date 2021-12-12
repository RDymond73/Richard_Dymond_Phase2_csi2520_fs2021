const passport = require("passport");
const dotenv = require("dotenv");
const cookie = require("cookie");
dotenv.config({ path: "./config.env" });

const GoogleStrategy = require("passport-google-oauth2").Strategy;
const nodemon = require("nodemon");
passport.use(
  new GoogleStrategy(
{
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/html/home.html",
      passReqToCallback: true,
      SameSite: 'none',
      secure: true,
      proxy: true
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
      console.log(profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

