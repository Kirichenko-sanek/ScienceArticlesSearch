const AuthService = require('./services/authService');
const SysAdminService = require('./services/sysAdminService');
const CrawlerService = require('./services/crawlerService');
const DocumentService = require('./services/documentService');

const authService = new AuthService();
const sysAdminService = new SysAdminService();
const crawlerService = new CrawlerService();
const documentService = new DocumentService();

module.exports = {
	authService,
	sysAdminService,
	crawlerService,
	documentService
}