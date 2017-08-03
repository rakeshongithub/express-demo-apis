'use strict';
/**
 * Reporter Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const requestServer = require('./../common/requestService');
const serverUrl = require('./../../../externalServerUrls');
const reportByIdTransformService = require('./reportByIdTransformService');

module.exports = {
    getReportById,
    getAllReports,
    getFilteredReportById
};

function getFilteredReportById(options) {
    return new Promise((resolve, reject) => {
        requestServer.requestForJSON(serverUrl.reportersDataById, {
            reporterId: options.reporterId
        })
            .then(data => resolve(reportByIdTransformService.transformData({
                data: data,
                fromDate: options.fromDate,
                endDate: options.endDate
            })))
            .catch(err => reject(err));
    });
}

function getReportById(options) {
    return new Promise((resolve, reject) => {
        requestServer.requestForJSON(serverUrl.reportersDataById, {
            reporterId: options.reporterId
        })
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}

function getAllReports() {
    return new Promise((resolve, reject) => {
        requestServer.requestForJSON(serverUrl.getAllReportsData)
            .then(data => resolve(data)).catch(err => reject(err));
    });
}