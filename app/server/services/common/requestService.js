'use strict';
/* global process */
/**
 * @description Request Server Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const requestPromise = require('request-promise');
const urlTemplate = require('url-template');
const logger = require('./loggerService').get('REQUEST_SERVICE');
const resolveLogger = require('./../utils/resolveLogger');
const confs = require('./../../../config').confs();

/**
 * @description Request service for third party APIs
 * @params [url, params]
 */
function requestForJSON(url, params) {
    return new Promise((resolve, reject) => {
        var start = new Date;
        params = params || {};
        var options = {
            url: parseURL(url, params)
        };
        logger.info('=> Request to: ', options.url);
        requestPromise(options)
            .then(data => {
                var duration = new Date - start;
                logger.info(resolveLogger({
                    duration: duration + 'ms',
                    reqUrl: options.url,
                    bodyLengh: data && data.length
                }));
                logger.info('<= Request complete successfully.');
                var resData = JSON.parse(data);
                resolve(resData);
            })
            .catch(error => {
                logger.error('=> Server JSON request failed for URL:', options.url);
                logger.error('=> Server JSON request error, statusCode:', error.statusCode);
                reject(error);
            });
    });
}

/**
 * @description Parse URLs
 * @params [url, data]
 */
function parseURL(url, data) {
    data = data || {};
    url = url.replace(/{(mockUDMHost|mockCMSHost|cmsHost|udmHost)}/g, '');
    return confs.udmHost + urlTemplate.parse(url).expand(data);
}

/**
 * @description Export modules
 * @modules [requestForJSON]
 */
module.exports = {requestForJSON};