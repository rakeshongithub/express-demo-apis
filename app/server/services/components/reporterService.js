'use strict';
/**
 * @description Reporter Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const requestServer = require('./../common/requestService');
const serverUrl = require('./../../../externalServerUrls');
const reportByIdTransformService = require('./reportByIdTransformService');
const logger = require('./../common/loggerService').get('REPORT_SERVICE');

/**
 * @description Get specific user reports by filtered from and end date
 * @params [options]
 */
function getFilteredReportById(options) {
    return new Promise((resolve, reject) => {
        requestServer.requestForJSON(serverUrl.reportersDataById, {
            reporterId: options.reporterId
        })
            .then(data => {
                logger.info('-> TRANSFORMATION INITIATED at ReportByIdTransformService');
                resolve(reportByIdTransformService.transformData({
                    data: data,
                    fromDate: options.fromDate,
                    endDate: options.endDate
                }));
                logger.info('<- END TRANSFORMATION SUCCESSFULLY');
            })
            .catch(err => reject(err));
    });
}

/**
 * @description Get specific user report
 * @params [options]
 */
function getReportById(options) {
    return new Promise((resolve, reject) => {
        requestServer.requestForJSON(serverUrl.reportersDataById, {
            reporterId: options.reporterId
        })
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}

/**
 * @description Get all reports
 * @params []
 */
function getAllReports() {
    return new Promise((resolve, reject) => {
        requestServer.requestForJSON(serverUrl.getAllReportsData)
            .then(data => resolve(data)).catch(err => reject(err));
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