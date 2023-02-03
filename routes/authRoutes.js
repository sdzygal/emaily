const passport = require("passport");

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']  //access we`re asking for
        })
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/surveys");
        }
    );
    //changed because of using railway instead of Heroku
    // it was app.get("/auth/google/callback", passport.authenticate("google"));



    app.get('/api/logout', (req, res) => {
       req.logout(); //is a function that is automatically attached to the req object by passport. It takes the cookie that contains user id, and it kills the cookie.
        res.redirect('/'); //prove that user no longer signed in.
    });


    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
};