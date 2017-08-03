'use strict';
/* global process */
/**
 * Request Server Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const request = require('request');
const urlTemplate = require('url-template');
const logger = require('./loggerService').get('REQUEST_SERVICE');
const resolveLogger = require('./../utils/resolveLogger');

module.exports = {
    requestForJSON
};

function requestForJSON(url, params) {
    return new Promise((resolve, reject) => {
        var start = new Date;
        params = params || {};
        var requestDataOptions = {
            url: parseURL(url, params)
        };
        logger.info('=> Request to: ', requestDataOptions.url);
        request(requestDataOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var duration = new Date - start;
                logger.info(resolveLogger({
                    duration: duration + 'ms',
                    reqUrl: requestDataOptions.url,
                    bodyLengh: body && body.length
                }));
                logger.info('<= Request complete successfully.');
                var resData = JSON.parse(body);
                resolve(resData);
            }
            else {
                if (response && response.statusCode === 400) {
                    logger.error('Server JSON request failed with 400 (Bad Request), URL:', requestDataOptions.url);
                    logger.error('Server JSON request failed with 400 (Bad Request), BODY:', body);
                    logger.error('Server JSON request failed with 400 (Bad Request), ERROR:', error);
                }
                else {
                    logger.error('Server JSON request error, URL:', requestDataOptions.url);
                    logger.error('Server JSON request error, RESPONSE_STATUS_CODE:', response && response.statusCode);
                    logger.error('Server JSON request error, RESPONSE_BODY:', body);
                    logger.error('Server JSON request error, ERROR_CODE:', error && error.code);
                    logger.error('Server JSON request error, CONNECTION_TIMEOUT:', error && !!error.connect);
                    logger.error('Server JSON request error, ERROR:', error);
                }
                reject(error);
            }
        });
    });
}

function parseURL(url, data) {
    data = data || {};
    url = url.replace(/{(mockUDMHost|mockCMSHost|cmsHost|udmHost)}/g, '');
    return process.env.EXTERNAL_HOST_URL + urlTemplate.parse(url).expand(data);
}