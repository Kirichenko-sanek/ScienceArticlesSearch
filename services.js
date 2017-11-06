const AuthService = require('./services/authService');
const SysAdminService = require('./services/sysAdminService');

const authService = new AuthService();
const sysAdminService = new SysAdminService();

module.exports = {
	authService,
	sysAdminService
}