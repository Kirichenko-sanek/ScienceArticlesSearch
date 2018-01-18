let Lecturer = require('../models/lecturer');
let DocumentInfo = require('../models/documentInfo');

var _ = require('lodash');

class DocumentService {
  constructor() {}

  getAllLecturer(){
  	return Lecturer.find();
  }

  getAllDocument(id) {
    return DocumentInfo.find({
      author: id
    });
  }

  getDocument(id) {
    return DocumentInfo.findOne({
      _id: id
    });
  }
}

module.exports = DocumentService