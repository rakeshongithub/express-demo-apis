'use strict';
/**
 * @description Validate Headers Srevice
 * @author RKU143 <rkumar148@sapient.com>
 */
const _ = require('lodash');
const statusCodes = require('./../../enums/statusCodes');
const validate = header => (!!header);

/**
 * @description Header Validator
 * @params [reqHeaders, req, res, next]
 */
const headerValidator = (logger, reqHeaders, req, res, next) => {

    logger.info(`==> START: Header Validation for request: ${req.url}`);
    logger.info('Middleware is triggered on for validating required headers');
    const finalHeaders = reqHeaders;
    const inValidHeaders = _.filter(Object.keys(finalHeaders), header => !validate(req.header(finalHeaders[header])));
    if (inValidHeaders.length) {
        logger.error(`=> FAILED: Header Validation for Request: ${req.url}`);
        logger.error('The request does not have following headers.');
        res.status(statusCodes.UNAUTHORIZED).send(`Request does not have following headers: ${inValidHeaders.toString()}`);
    }
    else {
        logger.info(`==> DONE: Header Validation for request: ${req.url}`);
        logger.info('The request have all the required headers.');
        next();
    }
};

/**
 * @description Export modules
 * @modules [headerValidator]
 */
module.exports = headerValidator;
