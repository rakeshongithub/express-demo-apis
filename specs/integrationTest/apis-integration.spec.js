/* eslint-disable max-len */
/* global describe, it */
'use strict';
const app = require('./../../app/app');
const nock = require('nock');
const supertest = require('supertest');
const onEndTestcase = require('jasmine-supertest');
const request = supertest(app);
const headerEnums = require('./../../app/server/enums/headersEnum');
const statusCode = require('./../../app/server/enums/statusCodes');
const mockResponseData = require('./../mocks/reports').body;

let mockReporterId = mockResponseData[0].id;
const fromDate = 20100320; // Date format: YYYYMMDD
const endDate = 20151231;  // Date format: YYYYMMDD

// Test suit for APIs
describe('INTEGRATION TEST: APIs', () => {

    it('should responds 401 for /api/reporters/ if missing requested headers', (done) => {
        request.get('/api/reporters/')
            .set({})
            .expect(statusCode.UNAUTHORIZED)
            .end(onEndTestcase(done));
    });

    it('should responds 500 for /api/reporters/ with valid requested headers', (done) => {
        nock('http://localhost:3017')
            .get('/reports')
            .reply(statusCode.INTERNAL_SERVER_ERROR);
        request.get('/api/reporters/')
            .set(headerEnums.reports)
            .expect({})
            .expect(statusCode.INTERNAL_SERVER_ERROR)
            .end(onEndTestcase(done));
    });

    it('should responds 200 for /api/reporters/ with valid requested headers', (done) => {
        nock('http://localhost:3017')
            .get('/reports')
            .reply(statusCode.SUCCESS_OK, mockResponseData);
        request.get('/api/reporters/')
            .set(headerEnums.reports)
            .expect(statusCode.SUCCESS_OK)
            .end(onEndTestcase(done));
    });

    it('should responds 401 for /api/reporters/:id if missing requested headers', (done) => {
        request.get('/api/reporters/' + mockReporterId)
            .set({})
            .expect(statusCode.UNAUTHORIZED)
            .end(onEndTestcase(done));
    });

    it('should responds 500 for /api/reporters/:id with valid requested headers', (done) => {
        nock('http://localhost:3017')
            .get(`/reports/${mockReporterId}`)
            .reply(statusCode.INTERNAL_SERVER_ERROR);
        request.get(`/api/reporters/${mockReporterId}`)
            .set(headerEnums.reports)
            .expect({})
            .expect(statusCode.INTERNAL_SERVER_ERROR)
            .end(onEndTestcase(done));
    });

    it('should responds 200 for /api/reporters/:id with valid requested headers', (done) => {
        nock('http://localhost:3017')
            .get(`/reports/${mockReporterId}`)
            .reply(statusCode.SUCCESS_OK, mockResponseData);
        request.get(`/api/reporters/${mockReporterId}`)
            .set(headerEnums.reports)
            .expect(statusCode.SUCCESS_OK)
            .end(onEndTestcase(done));
    });

    it(`should responds 401 for /api/reporters/:id/filter?fromDate=${fromDate}&endDate=${endDate} if missing requested headers`, (done) => {
        request.get(`/api/reporters/${mockReporterId}/filter?fromDate=${fromDate}&endDate=${endDate}`)
            .set({})
            .expect(statusCode.UNAUTHORIZED)
            .end(onEndTestcase(done));
    });

    it(`should responds 500 for /api/reporters/:id/filter?fromDate=${fromDate}&endDate=${endDate} with valid requested headers`, (done) => {
        nock('http://localhost:3017')
            .get(`/reports/${mockReporterId}`)
            .reply(statusCode.INTERNAL_SERVER_ERROR);
        request.get(`/api/reporters/${mockReporterId}/filter?fromDate=${fromDate}&endDate=${endDate}`)
            .set(headerEnums.reports)
            .expect({})
            .expect(statusCode.INTERNAL_SERVER_ERROR)
            .end(onEndTestcase(done));
    });

    it(`should responds 200 for /api/reporters/:id/filter?fromDate=${fromDate}&endDate=${endDate} with valid requested headers`, (done) => {
        nock('http://localhost:3017')
            .get(`/reports/${mockReporterId}`)
            .reply(statusCode.SUCCESS_OK, mockResponseData);
        request.get(`/api/reporters/${mockReporterId}/filter?fromDate=${fromDate}&endDate=${endDate}`)
            .set(headerEnums.reports)
            .expect(statusCode.SUCCESS_OK)
            .end(onEndTestcase(done));
    });

    it('should responds 404 for everything else', (done) => {
        request.get('/')
            .set(headerEnums.reports)
            .expect(statusCode.DATA_NOT_FOUND)
            .end(onEndTestcase(done));
    });
});
