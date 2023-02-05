const mongoose = require('mongoose');
const {model} = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = ({
   email: String,
   responded: { type: Boolean, default: false}
});

module.exports = recipientSchema;