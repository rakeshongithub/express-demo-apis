/**
 * @description Server App Start
 * @author RKU143 <rkumar148@sapient.com>
 */

var express = require('express');
var app = express();
var _ = require('lodash');
var logger = require('./server/services/common/loggerService').get('APP');
var globalErrorHandler = require('./server/services/common/globalErrorHandler');
var config = require('./config');
var confs = require('./config').confs();
var route = require('./routes');

// to get the values from .env
require('dotenv').config();

config.init(app, logger);
route.init(app);

_.forEach(confs, function (value, key) {
    logger.info(`APP startup flag set for ${key}: ${value}`);
});

// app start
var server = app.listen(confs.httpPort, () => {
    logger.info(`App start at PORT: http://localhost:${confs.httpPort}/`);
});

module.exports = server;

// Global Error Handler
globalErrorHandler.handleError();
