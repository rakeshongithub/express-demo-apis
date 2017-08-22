'use strict';
/**
 * @description Logger Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const config = require('./../../../config');
let logger, logLevel, environment;

/**
 * @description Export logger services
 * @modules [get, error, info, log, warn, debug, remove, init]
 */
module.exports = {
    get: function (prefix) {
        var myLogger = config.getWinstonLogger(logLevel, prefix, environment);
        return {
            error: function () {
                myLogger.error.apply(this, arguments);
            },
            info: function () {
                myLogger.info.apply(this, arguments);
            }
        };
    }
};
