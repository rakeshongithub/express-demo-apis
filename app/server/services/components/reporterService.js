'use strict';
/**
 * Reporter Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const requestServer = require('./../common/requestService');
const serverUrl = require('./../../../externalServerUrls');

module.exports = {
    getReportById,
    getAllReports
};

function getReportById(reqOptions) {
    return new Promise((resolve, reject) => {
        requestServer.requestForJSON(serverUrl.reportersDataById, {
            fromDate: reqOptions.fromDate,
            endDate: reqOptions.endDate,
            reporterId: reqOptions.reporterId
        }).then(data => resolve(data)).catch(err => reject(err));
    });
}

function getAllReports() {
    return new Promise((resolve, reject) => {
        requestServer.requestForJSON(serverUrl.getAllReportsData)
            .then(data => resolve(data)).catch(err => reject(err));
    });
}