var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
var config = require('./config');

var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

mongoose.connect(config.getDBConnectionString());

//setupController(app);
apiController(app);

app.listen(port);