/* global process */

/**
 * @description Server App Start
 * @author RKU143 <rkumar148@sapient.com>
 */

var express = require('express');
var app = express();
var logger = require('./server/services/common/loggerService').get('APP');
var config = require('./config');
var route = require('./routes');

// to get the values from .env
require('dotenv').config();

config.init(app);
route.init(app);

var server = app.listen(process.env.PORT || 8000, function() {
    logger.info('=> Listing port on', server.address().port);
});

/**
 * @description Error handling for uncaught exception
 * @modules [err]
 */
process.on('uncaughtException', (err) => {
    logger.error('=============> UNCAUGHT EXCEPTION OCCUR! <=============');
    logger.error('ERROR STACK - ', err && err.stack);
});

/**
 * @description Error handling for uncaught rejection
 * @modules [err]
 */
process.on('uncaughtRejection', (err) => {
    logger.error('=============> UNCAUGHT REJECTION CAUGHT! <=============');
    logger.error('ERROR STACK - ', err && err.stack);
});
