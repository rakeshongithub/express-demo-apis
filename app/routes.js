'use strict';
/**
 * @description App Routes
 * @author RKU143 <rkumar148@sapient.com>
 */
var express = require('express');
var router = express.Router({
    caseSensitive: true
});
var statusCodes = require('./server/enums/statusCodes');
var logger = require('./server/services/common/loggerService').get('APP');
var resolveLogger = require('./server/services/utils/resolveLogger');

// Controllers services
var reporterController = require('./server/controllers/reporterController');

/**
 * @description Available routes within app
 */
var routes = {
    'GET /reporters/': reporterController.getAllReports,
    'GET /reporters/:reporterId/filter': reporterController.getFilteredReportById,
    'GET /reporters/:reporterId': reporterController.getReportById
};

/**
 * @description Export route init services
 * @modules [init]
 * @params [app]
 */
module.exports.init = (app) => {
    Object.keys(routes).forEach((routekey) => {
        var method = routekey.split(' ').shift();
        var path = routekey.split(' ').pop();
        router.route(path)[method.toLowerCase()](routes[routekey]);
    });

    /** initiate app route middleware
     * @prefix '/api'
     * */
    app.use('/api', router);

    // handle 404 response
    app.use((req, res) => {
        logger.error('=> Invalid Route', resolveLogger({
            url: req.url,
            statusCode: statusCodes.DATA_NOT_FOUND,
            error: 'Route Not Found'
        }));
        res.status(statusCodes.DATA_NOT_FOUND);
        res.send({
            url: req.url,
            statusCode: statusCodes.DATA_NOT_FOUND,
            error: `Requested <${req.url}> not found.`
        });
    });
};
