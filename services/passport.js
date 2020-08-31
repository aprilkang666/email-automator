const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys"); //create the keys object

const User = mongoose.model("users");

//serializeUser is to put a identifying cookie to the user
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//deserializeUser gets whatever is in the cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', //where the user want to be send to?// using relative path
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //already have a record with the given profile ID
        return done(null, existingUser);
      }
        //don't have the existing User, creat a new user ID
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);

    }
  )
);
