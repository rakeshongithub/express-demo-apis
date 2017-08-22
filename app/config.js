/* global process */
/**
 * App Config
 * @author RKU143 <rkumar148@sapient.com>
 */
const bodyParser = require('body-parser');
const winston = require('winston');
const compression = require('compression');
const headerEnums = require('./server/enums/headersEnum');
const headerValidator = require('./server/services/common/validateHeadersServices');

// to get the values from .env
require('dotenv').config();

module.exports = {
    init,
    getWinstonLogger,
    cors,
    confs
};

/**
 * @description initialise app config
 * @params [app]
 */
function init(app, logger) {
    const resolveLogger = require('./server/services/utils/resolveLogger');
    // Body parser for JSON
    app.use(bodyParser.json());
    app.use(compression());
    cors(app);
    // Header Validation
    app.use((req, res, next) => headerValidator(logger, headerEnums.reports, req, res, next));
}

/**
 * @description Winston Logger Configration
 * @params [level, label]
 */
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

/**
 * @description handles CORS
 * @params [app]
 */
function cors(app) {
    app.all('*', function (req, res, next) {
        res.set('Access-Control-Allow-Methods', 'GET,POST');
        res.header('Access-Control-Allow-Headers', 'X-THESYS-TOKEN, X-THESYS-API, X-Requested-With, Content-Type, Authorization');
        if ('OPTIONS' === req.method) {
            return res.send(200);
        }
        next();
    });
}

/**
 * @description app config
 * @params [app]
 */
function confs() {
    return {
        udmHost: process.env.UDM_HOST,
        httpPort: process.env.PORT || 8000,
        env: process.env.ENV
    };
}