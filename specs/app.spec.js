const request = require('supertest');
const headerEnums = require('./../app/server/enums/headersEnum');
describe('Thesys Cat express app', () => {
    var server;
    beforeEach(function () {
        server = require('./../app/app');
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should responds 200 success to /thesys/api/reporters/', (done) => {
        request(server)
            .get('/thesys/api/reporters/')
            .set(headerEnums.reports)
            .expect(200, done);
    });

    it('should responds 200 success to /thesys/api/reporters/:id', (done) => {
        request(server)
            .get('/thesys/api/reporters/71b7aa4c35454dd0b36a2f0536d400be')
            .set(headerEnums.reports)
            .expect(200, done);
    });

    it('should responds 200 success to /thesys/api/reporters/:id/filter?fromDate=20100320&endDate=20151231', (done) => {
        request(server)
            .get('/thesys/api/reporters/71b7aa4c35454dd0b36a2f0536d400be/filter?fromDate=20100320&endDate=20151231')
            .set(headerEnums.reports)
            .expect(200, done);
    });

    it('should responds 404 everything else', (done) => {
        request(server)
            .get('/')
            .set(headerEnums.reports)
            .expect(404, done);
    });
});