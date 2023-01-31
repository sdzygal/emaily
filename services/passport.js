const passport = require("passport");
const {Strategy: GoogleStrategy} = require("passport-google-oauth20");
const mongoose = require('mongoose');
const keys = require("../config/keys");


const User = mongoose.model('users'); // fetch out of mongoose our model class

//encoding user
passport.serializeUser((user, done) => {
    done(null, user.id); //id that is assigned by Mongo staffed to the cookie
});

//turn back into user the piece of information we have staffed to the cookie
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback' //the route where user will be sent after he granted the permission
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id })   //find if we already have the same user
                .then((existingUser) => {
                    if (existingUser) {
                        //we already have a record with the given id
                        done(null, existingUser);
                    } else {
                        //make a new record
                        new User({ googleId: profile.id })
                            .save()
                            .then(user => done(null, user));
                    }
                });
        })
);