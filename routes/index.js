module.exports = {
	init: function (app, services) {
    require('./api_routes').init(app, services);
  }
}