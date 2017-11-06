'use strict';
const AuthCtrl = require('../controllers/auth');
const SysAdminCtrl = require('../controllers/sysAdmin');


module.exports = {
  init: function(app, services) {
    let authCtrl = new AuthCtrl(services.authService);
    let sysAdminCtrl = new SysAdminCtrl(services.sysAdminService);



    app.get('/api/addLecturer', (req, res) => sysAdminCtrl.addLecturer(req, res));



    app.post('/api/register', authCtrl.register);
  }
}