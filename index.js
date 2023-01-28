const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();



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


app.get(
    '/auth/google',
    passport.authenticate('google', {
    scope: ['profile', 'email']  //access we`re asking for
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));



const PORT = process.env.PORT || 8080;
app.listen(PORT);

