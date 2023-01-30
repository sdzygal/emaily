const passport = require("passport");

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']  //access we`re asking for
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));
};