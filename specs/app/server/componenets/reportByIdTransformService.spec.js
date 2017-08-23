/* global describe, it, expect */
'use strict';
const reporterController = require('./../../../../app/server/services/components/reportByIdTransformService');
const mockUserReport = require('./../../../mocks/reports').body;
const mockFilteredUserReport = require('./../../../mocks/filtered-report').body;

describe('TRANSFORM SERVICE: Report by id', () => {
    const fromDate = '20151212'; // Date format: YYYYMMDD
    const endDate = '20181212';  // Date format: YYYYMMDD
    const options = {
        fromDate, endDate,
        data: mockUserReport[0]
    };
    it('should able to transform raw data', done => {
        const transformedData = reporterController.transformData(options);
        expect(mockFilteredUserReport[0]).toEqual(transformedData);
        done();
    });
});