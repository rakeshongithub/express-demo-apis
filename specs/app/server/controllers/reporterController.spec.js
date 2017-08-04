/* global describe, it, expect */
const reporterController = require('./../../../../app/server/controllers/reporterController');

describe('REPORTER CONTROLLER', () => {
    it('should able to define methods', (done) => {
        expect(typeof reporterController.getAllReports).toBe('function');
        expect(typeof reporterController.getReportById).toBe('function');
        expect(typeof reporterController.getFilteredReportById).toBe('function');
        done();
    });
});