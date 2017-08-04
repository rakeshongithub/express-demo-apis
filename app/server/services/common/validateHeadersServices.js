'use strict';
/**
 * @description Validate Headers Srevice
 * @author RKU143 <rkumar148@sapient.com>
 */
const _ = require('lodash');
const errorCodes = require('./../../enums/errorCodes');
const validate = header => (!!header);

/**
 * @description Header Validator
 * @params [reqHeaders, req, res, next]
 */
const headerValidator = (reqHeaders, req, res, next) => {
    const logger = require('./loggerService').get('validateHeadersServices');

    logger.info('xxxxxxxxxxxxx REQUST START xxxxxxxxxxxxx');
    logger.info('Middleware is triggered on for validating required headers');
    const finalHeaders = reqHeaders || {};
    const inValidHeaders = _.filter(Object.keys(finalHeaders), (header) => !validate(req.header(finalHeaders[header])));
    if (inValidHeaders.length) {
        logger.info('The request does not have following headers.');
        res.status(errorCodes.BAD_REQUEST).send(`Request does not have following headers: ${inValidHeaders.toString()}`);
    }
    else {
        logger.info('The request have all the required headers.');
        next();
    }
};

/**
 * @description Export modules
 * @modules [headerValidator]
 */
module.exports = headerValidator;
