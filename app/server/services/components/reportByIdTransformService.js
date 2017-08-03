'use strict';
/**
 * Report Transform Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const _ = require('lodash');
const moment = require('moment');

module.exports.transformData = (options) => {
    var filterReports = _.filter(options.data.userReports, (item) => {
        var itemDate = moment(item.date);
        if (isBetweenRange(itemDate, options.fromDate, options.endDate)) {
            return item;
        }
    });
    return Object.assign({}, options.data, {
        userReports: filterReports
    });
};

function isBetweenRange(itemDate, fromDate, endDate) {
    return (itemDate >= moment(fromDate)) && (itemDate <= moment(endDate));
}