const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require("./config/keys");
require('./models/User'); //first goes always model
require('./services/passport'); //execute the passport file



mongoose.set('strictQuery', false);

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
     maxAge: 30 * 24 * 60 * 60 * 1000, //I want this cookie to last 30 days and then expire
      keys: [keys.cookieKey] //encryption of cookies
  })
);
//make passport use the cookie
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT);

