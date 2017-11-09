let Lecturer = require('../models/lecturer');

var _ = require('lodash');

class DocumentService {
  constructor() {}

  getAllLecturer(){
  	return Lecturer.find();
  }
}

module.exports = DocumentService