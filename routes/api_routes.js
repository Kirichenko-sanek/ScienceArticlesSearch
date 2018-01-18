'use strict';
const AuthCtrl = require('../controllers/auth');
const SysAdminCtrl = require('../controllers/sysAdmin');
const CrawlerController = require('../controllers/crawler');
const DocumentController = require('../controllers/document');

module.exports = {
  init: function(app, services) {
    let authCtrl = new AuthCtrl(services.authService);
    let sysAdminCtrl = new SysAdminCtrl(services.sysAdminService);
    let crawlerController = new CrawlerController(services.crawlerService);
    let documentController = new DocumentController(services.documentService);

    app.get('/api/addLecturer', (req, res) => sysAdminCtrl.addLecturer(req, res));

    app.get('/api/runCrawler', (req, res) => crawlerController.runCrawler(req, res));

    app.get('/api/getAllLecturer', (req, res) => documentController.getAllLecturer(req, res));
    app.get('/api/getAllDocument/:id', (req, res) => documentController.getAllDocument(req, res));
    app.get('/api/getDocument/:id', (req, res) => documentController.getDocument(req, res));

    app.post('/api/register', authCtrl.register);
  }
}