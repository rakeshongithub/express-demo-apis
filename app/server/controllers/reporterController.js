'use strict';
/**
 * Reporter Controller
 * @author RKU143 <rkumar148@sapient.com>
 */
const reporterService = require('./../services/components/reporterService');
const errorCodes = require('./../enums/errorCodes');

module.exports = {
    getReportById,
    getAllReports,
    getFilteredReportById
};

function getReportById(req, res) {
    reporterService.getReportById({
        reporterId: req.params.reporterId
    })
        .then(data => res.json(data))
        .catch(() => res.status(errorCodes.INTERNAL_SERVER_ERROR).send(null));
}

function getFilteredReportById(req, res) {
    reporterService.getFilteredReportById({
        fromDate: req.query.fromDate,
        endDate: req.query.endDate,
        reporterId: req.params.reporterId
    })
        .then(data => res.json(data))
        .catch(() => res.status(errorCodes.INTERNAL_SERVER_ERROR).send(null));
}

function getAllReports(req, res) {
    reporterService.getAllReports()
        .then(data => res.json(data))
        .catch(() => res.status(errorCodes.INTERNAL_SERVER_ERROR).send(null));
}