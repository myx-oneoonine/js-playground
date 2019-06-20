var express = require('./config/express');
var app = express();

app.listen(7777);

module.export = app;

console.log('Server running at localhost:7777');
