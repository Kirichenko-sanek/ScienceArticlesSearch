'use strict'

let mongoose = require('mongoose');

let lecturerSchema = new mongoose.Schema({
	name: String,
	surname: String,
	ieeeSearch: String,
	scopusSearch: String
});

module.exports = mongoose.model('Lecturer', lecturerSchema);