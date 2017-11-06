const AuthService = require('./services/authService');
const SysAdminService = require('./services/sysAdminService');
const CrawlerService = require('./services/crawlerService');

const authService = new AuthService();
const sysAdminService = new SysAdminService();
const crawlerService = new CrawlerService();

module.exports = {
	authService,
	sysAdminService,
	crawlerService
}