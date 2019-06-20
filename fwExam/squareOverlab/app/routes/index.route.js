module.exports = function(app) {
	var index = require('../controllers/index.controller');
	app.post('/', index.squareOverlab);
	// app.get('/say/hello/', index.hello);
}
