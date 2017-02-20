var express = require('express');
var app = express();
var config = require('./config');
var route = require('./route');
var mongoConnection = require('./mongo.connection');

config.init(app);
route.init(app);

// Connect with mongodb
mongoConnection.init();

var server = app.listen(process.env.port || 3000, function(){
    console.log('listing port on', server.address().port);
})

process.on('uncaughtException', function (err) {
	logger.error('=============> UNCAUGHT EXCEPTION OCCUR! <=============');
	logger.error('ERROR STACK - ', err && err.stack);
});
