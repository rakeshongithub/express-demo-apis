'use strict';
/**
 * @description App Routes
 * @author RKU143 <rkumar148@sapient.com>
 */
var express = require('express');
var router = express.Router({
    caseSensitive: true
});

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
     * @prefix '/thesys/api'
     * */
    app.use('/thesys/api', router);
};
