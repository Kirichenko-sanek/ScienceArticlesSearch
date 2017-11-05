'use strict';

module.exports = {
	init: function(app, services) {
		let authCtrl = require('../controllers/auth');





		app.post('/api/register', authCtrl.register);
	}
}
