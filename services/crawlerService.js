let needle = require('needle');
let textEncoding = require('text-encoding'); 
let TextDecoder = textEncoding.TextDecoder;

let Lecturer = require('../models/lecturer');

class CrawlerService {
  constructor() {

  }

  runIeeeCrawler() {
    return Lecturer.findOne({
        name: 'kharchenko'
      })
      .then(lecturer => {

        let url = 'http://ieeexplore.ieee.org:80/search/searchresult.jsp?reload=true&amp;pageNumber=1&amp;rowsPerPage=25&amp;searchWithin=&#37;22Authors&#37;22:.QT.' + lecturer.ieeeSearch + '.QT.';

        return needle('get', url);
      })
      .then(result => {
        console.log(result);
      	var a  = 0;
      })







    //var a = 0;
  }

}

module.exports = CrawlerService