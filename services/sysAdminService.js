let Lecturer = require('../models/lecturer');



var _ = require('lodash')
var Promise = require('bluebird');


var content = require('../resources/lecturer.json');

class SysAdminService {
  constructor() {

  }

  addLecturer() {
    let arrayOfPromises = _.map(content.lecturer, function(l) {
      return Lecturer.findOne({
          name: l.name
        })
        .then(result => {
          if (!result) {
            let lecturer = new Lecturer({
              name: l.name,
              surname: l.surname,
              ieeeSearch: l.ieeeSearch,
              scopusSearch: l.scopusSearch
            });
            return lecturer.save();
          } else {
            return result;
          }
        });
    });

    return Promise.all(arrayOfPromises)
      .then(result => {
        return result;
      });
  }
}

module.exports = SysAdminService