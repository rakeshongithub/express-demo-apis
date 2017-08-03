'use strict';
const errorCodes = require('./../../enums/errorCodes');
const validate = header => (!!header);

const headerValidator = (requiredHeaders, req, res, next) => {
    const logger = require('./loggerService').get('validateHeadersServices');

    logger.info('Middleware is triggered on for validating required headers');
    const inValidHeaders = [];
    const finalHeaders = requiredHeaders || [];
    Object.keys(finalHeaders).forEach((header) => {
        if (!validate(req.header(finalHeaders[header]))) {
            inValidHeaders.push(finalHeaders[header]);
        }
    });
    if (inValidHeaders.length) {
        logger.info('The request does not have following headers.');
        res.status(errorCodes.BAD_REQUEST).send(`Request does not have following headers: ${inValidHeaders.toString()}`);
    }
    else {
        logger.info('The request have all the required headers.');
        next();
    }
};

module.exports = headerValidator;
