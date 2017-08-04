/**
 * App Config
 * @author RKU143 <rkumar148@sapient.com>
 */
const bodyParser = require('body-parser');
const winston = require('winston');
const compression = require('compression');
const headerEnums = require('./server/enums/headersEnum');
const headerValidator = require('./server/services/common/validateHeadersServices');

module.exports = {
    init,
    getWinstonLogger,
    cors
};

/**
 * @description initialise app config
 * @param app
 */
function init(app) {
    const logger = require('./server/services/common/loggerService').get('CONFIG');
    const resolveLogger = require('./server/services/utils/resolveLogger');
    // Body parser for JSON
    app.use(bodyParser.json());
    app.use(compression());
    cors(app);
    // Header Validation
    app.use((req, res, next) => headerValidator(headerEnums.reports, req, res, next));

    app.use('*', (req, res, next) => {
        logger.info('Application -', resolveLogger({
            httpMethod: req.method,
            host: req.headers.host,
            baseUrl: req.baseUrl,
            statusCode: res.statusCode
        }));
        next();
    });
}

/**
 * @description Winston Logger Configration
 * @param level
 * @param label
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
 *
 * @description handles CORS
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