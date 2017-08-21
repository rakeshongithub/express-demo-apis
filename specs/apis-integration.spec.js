/* eslint-disable max-len */
/* global describe, it */
const app = require('./../app/app');
const supertest = require('supertest');
const onEndTestcase = require('jasmine-supertest');
const request = supertest(app);
const headerEnums = require('./../app/server/enums/headersEnum');
const statusCode = require('./../app/server/enums/statusCodes');

let userReportId;
let fromDate = 20100320; // Date format: YYYYMMDD
let endDate = 20151231;  // Date format: YYYYMMDD

// Test suit for APIs
describe('Thesys Cat express app', () => {

    it('should responds 401 unauthorized to /thesys/api/reporters/ if missing requested headers', (done) => {
        request.get('/thesys/api/reporters/')
            .set({})
            .expect(statusCode.UNAUTHORIZED)
            .end(onEndTestcase(done));
    });

    it('should responds 200 success to /thesys/api/reporters/ with valid requested headers', (done) => {
        request.get('/thesys/api/reporters/')
            .set(headerEnums.reports)
            .expect(res => {
                userReportId = res.body[0].id
            })
            .expect(statusCode.SUCCESS_OK)
            .end(onEndTestcase(done))
    });

    it('should responds 401 unauthorized to /thesys/api/reporters/:id if missing requested headers', (done) => {
        request.get('/thesys/api/reporters/' + userReportId)
            .set({})
            .expect(statusCode.UNAUTHORIZED)
            .end(onEndTestcase(done));
    });

    it('should responds 200 success to /thesys/api/reporters/:id with valid requested headers', (done) => {
        request.get('/thesys/api/reporters/' + userReportId)
            .set(headerEnums.reports)
            .expect(statusCode.SUCCESS_OK)
            .end(onEndTestcase(done));
    });

    it(`should responds 401 unauthorized to /thesys/api/reporters/:id/filter?fromDate=${fromDate}&endDate=${endDate} if missing requested headers`, (done) => {
        request.get(`/thesys/api/reporters/${userReportId}/filter?fromDate=${fromDate}&endDate=${endDate}`)
            .set({})
            .expect(statusCode.UNAUTHORIZED)
            .end(onEndTestcase(done));
    });

    it(`should responds 200 success to /thesys/api/reporters/:id/filter?fromDate=${fromDate}&endDate=${endDate} with valid requested headers`, (done) => {
        request.get(`/thesys/api/reporters/${userReportId}/filter?fromDate=${fromDate}&endDate=${endDate}`)
            .set(headerEnums.reports)
            .expect(statusCode.SUCCESS_OK)
            .end(onEndTestcase(done));
    });

    it('should responds 404 everything else', (done) => {
        request.get('/')
            .set(headerEnums.reports)
            .expect(statusCode.DATA_NOT_FOUND)
            .end(onEndTestcase(done));
    });
});