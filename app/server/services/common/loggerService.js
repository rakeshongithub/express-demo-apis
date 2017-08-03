'use strict';
/**
 * Logger Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const config = require('./../../../config');
let logger, logLevel, environment;

module.exports = {
    get: function (prefix) {
        var myLogger = config.getWinstonLogger(logLevel, prefix, environment);
        return {
            error: function () {
                myLogger.error.apply(this, arguments);
            },
            info: function () {
                myLogger.info.apply(this, arguments);
            },
            log: function () {
                myLogger.info.apply(this, arguments);
            },
            warn: function () {
                myLogger.warn.apply(this, arguments);
            },
            debug: function () {
                myLogger.debug.apply(this, arguments);
            },
            remove: function () {
                myLogger.remove(arguments[0]);
            }
        };
    },
    error: function () {
        logger.error.apply(this, arguments);
    },
    info: function () {
        logger.info.apply(this, arguments);
    },
    log: function () {
        logger.info.apply(this, arguments);
    },
    warn: function () {
        logger.warn.apply(this, arguments);
    },
    debug: function () {
        logger.debug.apply(this, arguments);
    },
    remove: function () {
        logger.remove.apply(this, arguments);
    },
    init: function (level, env) {
        logLevel = level && level.replace(/'/g, '');
        environment = env && env.replace(/'/g, '');
        logger = config.getWinstonLogger(logLevel, null, env);
    }
};
