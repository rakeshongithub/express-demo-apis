'use strict';
/**
 * @description Reporter Controller
 * @author RKU143 <rkumar148@sapient.com>
 */
const reporterService = require('./../services/components/reporterService');
const statusCodes = require('./../enums/statusCodes');
var logger = require('./../services/common/loggerService').get('REPORT_CONTROLLER');
var resolveLogger = require('./../services/utils/resolveLogger');

/**
 * @description Get report by report id
 * @params [req, res]
 */
function getReportById(req, res) {
    logger.info('-> getReportById initiated to get data');
    reporterService.getReportById({
        reporterId: req.params.reporterId
    })
        .then(data => {
            logger.info('-> reporterService.getReportById :: Successfully fetched data', resolveLogger({
                statusCode: res.statusCode
            }));
            res.json(data);
        })
        .catch((err) => {
            logger.error('<- OOPS :: ReporterService.getReportById fail to fetch data');
            res.status(statusCodes.INTERNAL_SERVER_ERROR).send(undefined);
            logger.error('<- ERROR', resolveLogger({
                statusCode: res.statusCode,
                errMessage: err.message,
                errorStack: err
            }));
        });
}

/**
 * @description Get report by report id and filter as per fromDate and endDate
 * @params [req, res]
 */
function getFilteredReportById(req, res) {
    logger.info('-> getFilteredReportById initiated to get data');
    reporterService.getFilteredReportById({
        fromDate: req.query.fromDate,
        endDate: req.query.endDate,
        reporterId: req.params.reporterId
    })
        .then(data => {
            logger.info('-> reporterService.getFilteredReportById :: Successfully fetched data', resolveLogger({
                statusCode: res.statusCode
            }));
            res.json(data);
        })
        .catch((err) => {
            logger.error('<- OOPS :: ReporterService.getFilteredReportById fail to fetch data');
            res.status(statusCodes.INTERNAL_SERVER_ERROR).send(undefined);
            logger.error('<- ERROR', resolveLogger({
                statusCode: res.statusCode,
                errMessage: err.message,
                errorStack: err
            }));
        });
}

/**
 * @description Get all report object collection
 * @params [req, res]
 */
function getAllReports(req, res) {
    logger.info('-> getAllReports initiated to get data');
    reporterService.getAllReports()
        .then(data => {
            logger.info('-> reporterService.getAllReports :: Successfully fetched data', resolveLogger({
                statusCode: res.statusCode
            }));
            res.json(data);
        })
        .catch((err) => {
            logger.error('<- OOPS :: ReporterService.getAllReports fail to fetch data');
            res.status(statusCodes.INTERNAL_SERVER_ERROR).send(undefined);
            logger.error('<- ERROR', resolveLogger({
                statusCode: res.statusCode,
                errMessage: err.message,
                errorStack: err
            }));
        });
}

/**
 * @description Export modules
 * @modules [getReportById, getAllReports, getFilteredReportById]
 */
module.exports = {
    getReportById,
    getAllReports,
    getFilteredReportById
};