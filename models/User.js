const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
   googleId: String
});

mongoose.model('users', userSchema); //mongoose model class - loads a schema into mongoose