const passport = require("passport");
const {Strategy: GoogleStrategy} = require("passport-google-oauth20");
const keys = require("../config/keys");


passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback' //the route where user will be sent after he granted the permission
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile);
        })
);