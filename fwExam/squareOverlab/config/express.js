var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function() {
    app = express();

    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));

  	require('../app/routes/index.route')(app);

    return app;
}
