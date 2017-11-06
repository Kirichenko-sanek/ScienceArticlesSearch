'use strict';
const AuthCtrl = require('../controllers/auth');
const SysAdminCtrl = require('../controllers/sysAdmin');
const CrawlerController = require('../controllers/crawler');


module.exports = {
  init: function(app, services) {
    let authCtrl = new AuthCtrl(services.authService);
    let sysAdminCtrl = new SysAdminCtrl(services.sysAdminService);
    let crawlerController = new CrawlerController(services.crawlerService);


    app.get('/api/addLecturer', (req, res) => sysAdminCtrl.addLecturer(req, res));

    app.get('/api/runCrawler', (req, res) => crawlerController.runCrawler(req, res));


    app.post('/api/register', authCtrl.register);
  }
}