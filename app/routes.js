'use strict';
/**
 * Server App Start
 * @author RKU143 <rkumar148@sapient.com>
 */
var express = require('express');
var router = express.Router({
    caseSensitive: true
});

var reporterController = require('./server/controllers/reporterController');

var routes = {
    'GET /reporters/': reporterController.getAllReports,
    'GET /reporters/:reporterId/filter': reporterController.getReportById,
};

module.exports.init = (app) => {
    Object.keys(routes).forEach((routekey) => {
        var method = routekey.split(' ').shift();
        var path = routekey.split(' ').pop();
        router.route(path)[method.toLowerCase()](routes[routekey]);
    });

    app.use('/thesys/api', router);
};
