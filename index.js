const express = require('express');
const mongoose = require('mongoose');
const keys = require("./config/keys");
require('./models/User'); //first goes always model
require('./services/passport'); //execute the passport file



mongoose.set('strictQuery', false);

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT);

