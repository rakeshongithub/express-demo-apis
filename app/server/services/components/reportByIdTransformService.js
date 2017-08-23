'use strict';
/**
 * @description Report Transform Service
 * @author RKU143 <rkumar148@sapient.com>
 */
const _ = require('lodash');
const moment = require('moment');

/**
 * @description Export modules
 * @modules [transformData]
 */
module.exports.transformData = (options) => {
    var filterReports = _.filter(options.data.userReports, (item) => {
        var itemDate = moment(item.date);
        if (isBetweenRange(itemDate, moment(options.fromDate), moment(options.endDate))) {
            return item;
        }
    });
    return Object.assign({}, options.data, {
        userReports: filterReports
    });
};

/**
 * @description check date range condition
 * @modules [itemDate, fromDate, endDate]
 */
function isBetweenRange(itemDate, fromDate, endDate) {
    return (itemDate >= fromDate) && (itemDate <= endDate);
}