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
      callbackURL: "https://warm-spire-86493.herokuapp.com/",
      passReqToCallback: true,
      SameSite: 'none',
      secure: true
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

