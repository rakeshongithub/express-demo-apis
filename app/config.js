/**
 * External Server URIs
 * @author RKU143 <rkumar148@sapient.com>
 */
const bodyParser = require('body-parser');
const winston = require('winston');
const headerEnums = require('./server/enums/headersEnum');
const headerValidator = require('./server/services/common/validateHeadersServices');

module.exports = {
    init,
    getWinstonLogger
};

function init(app) {
    const logger = require('./server/services/common/loggerService').get('CONFIG');
    const resolveLogger = require('./server/services/utils/resolveLogger');
    // Body parser for JSON
    app.use(bodyParser.json());

    // Header Validation
    app.use((req, res, next) => headerValidator(headerEnums.reports, req, res, next));

    app.use((req, res, next) => {
        logger.info(resolveLogger({
            httpMethod: req.method,
            url: req.url,
            statusCode: res.statusCode
        }));
        next();
    });
}

function getWinstonLogger(level, label) {
    var loggerTransports = [
        new (winston.transports.Console)({
            timestamp: true,
            label: label,
            colorize: true,
            prettyPrint: true
        })
    ];
    return new (winston.Logger)({
        level: level || 'info',
        transports: loggerTransports
    });
}