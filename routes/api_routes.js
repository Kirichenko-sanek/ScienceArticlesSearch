'use strict';
const AuthCtrl = require('../controllers/auth');

module.exports = {
	init: function(app, services) {
		let authCtrl = new AuthCtrl(services.authService);





		app.post('/api/register', authCtrl.register);
	}
}
