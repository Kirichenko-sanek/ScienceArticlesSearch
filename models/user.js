'use strict'

let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  password: String,
  passwordToken: String
});


module.exports = mongoose.model('User', userSchema);