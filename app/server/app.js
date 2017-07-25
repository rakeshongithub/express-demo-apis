/* global process */

var express = require('express');
var app = express();
var logger = require('winston');
var config = require('./../../config');
var route = require('./route');
var mongoConnection = require('./mongo.connection');

// to get the values from .env
require('dotenv').config();

config.init(app);
route.init(app);

// Connect with mongodb
mongoConnection.init();

var server = app.listen(process.env.PORT || 8000, function() {
    logger.info('=> Listing port on', server.address().port);
});

process.on('uncaughtException', (err) => {
    logger.error('=============> UNCAUGHT EXCEPTION OCCUR! <=============');
    logger.error('ERROR STACK - ', err && err.stack);
});

process.on('uncaughtRjection', (err) => {
    logger.error('=============> UNCAUGHT REJECTION CAUGHT! <=============');
    logger.error('ERROR STACK - ', err && err.stack);
});
