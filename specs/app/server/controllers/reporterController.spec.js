/* global describe, it, expect */
const eventEmitter = require('events').EventEmitter;
const reporterController = require('./../../../../app/server/controllers/reporterController');
const headerEnums = require('./../../../../app/server/enums/headersEnum');
const mockResponseData = require('./../../../mocks/reports').body;
const httpMocks = require('node-mocks-http');
const nock = require('nock');

function buildResponse() {
    return httpMocks.createResponse({eventEmitter});
}

const mockReporterId = mockResponseData[0].id;
const fromDate = '20100320'; // Date format: YYYYMMDD
const endDate = '20151231';  // Date format: YYYYMMDD

function parseJSON(res) {
    return JSON.parse(res._getData()).body;
}
describe('REPORTER CONTROLLER', () => {

    it('should able to define methods', (done) => {
        expect(typeof reporterController.getAllReports).toBe('function');
        expect(typeof reporterController.getReportById).toBe('function');
        expect(typeof reporterController.getFilteredReportById).toBe('function');
        done();
    });

    it('METHOD => getAllReports: should able to get data', (done) => {
        nock('http://localhost:3017')
            .get('/reports')
            .reply(200, {
                body: mockResponseData
            });

        var res = buildResponse();
        var req = httpMocks.createRequest({
            method: 'GET',
            url: '/thesys/api/reporters',
            headers: headerEnums.reports
        });
        reporterController.getAllReports(req, res);

        res.on('end', function () {
            var data = parseJSON(res);
            expect(data).toEqual(mockResponseData);
            expect(200).toBe(res.statusCode);
            done();
        });
    });

    it('METHOD => getReportById: should able to get data', (done) => {
        nock('http://localhost:3017')
            .get('/reports/' + mockReporterId)
            .reply(200, {
                body: mockResponseData
            });

        var res = buildResponse();
        var req = httpMocks.createRequest({
            method: 'GET',
            url: '/thesys/api/reporters',
            headers: headerEnums.reports,
            params: {
                reporterId: mockReporterId
            }
        });

        res.on('end', function () {
            var data = parseJSON(res);
            expect(data).toEqual(mockResponseData);
            expect(200).toBe(res.statusCode);
            done();
        });

        reporterController.getReportById(req, res);
    });

    it('METHOD => getFilteredReportById: should able to get data', (done) => {
        nock('http://localhost:3017')
            .get('/reports/' + mockReporterId)
            .reply(200, {
                body: mockResponseData
            });

        var res = buildResponse();
        var req = httpMocks.createRequest({
            method: 'GET',
            url: `/thesys/api/reporters/${mockReporterId}/filter?fromDate=${fromDate}&endDate=${endDate}`,
            params: {
                reporterId: mockReporterId
            },
            query: {fromDate, endDate},
            headers: headerEnums.reports
        });

        reporterController.getFilteredReportById(req, res);

        res.on('end', function () {
            var data = parseJSON(res);
            expect(data).toEqual(mockResponseData);
            expect(200).toBe(res.statusCode);
            done();
        });
    });
});