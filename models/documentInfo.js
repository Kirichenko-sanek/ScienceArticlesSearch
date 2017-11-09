'use strict'

let mongoose = require('mongoose');

let documentInfoSchema = new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'Lecturer',
    index: true
  },
  year: String,
  conference: String
});

module.exports = mongoose.model('DocumentInfo', documentInfoSchema);