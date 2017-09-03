/* eslint-disable max-len */
/* global describe, it, expect, jasmine, beforeEach */
'use strict';

const validateHeadersServices = require('./../../../../../app/server/services/common/validateHeadersServices');
const logger = require('./../../../../../app/server/services/common/loggerService').get('VALIDATE_HEADERS_SERVICES_SPEC');
const statusCodes = require('./../../../../../app/server/enums/statusCodes');

describe('Validate Headers', () => {

    let mockReq;
    let mockInvalidReq;
    let mockRes;
    let mockNext;

    let mockRequiredHeaders;
    let mockResStatusSend;

    beforeEach(function () {
        mockReq = {
            header: jasmine.createSpy()
        };
        mockInvalidReq = {
            header: jasmine.createSpy()
        };
        mockRes = {
            status: jasmine.createSpy()
        };

        mockResStatusSend = jasmine.createSpy();

        mockReq.header.and.returnValue(true);
        mockInvalidReq.header.and.returnValue(false);

        mockRes.status.and.returnValue({
            send: mockResStatusSend
        });

        mockNext = jasmine.createSpy();

    });

    it('middleware function should be defined', () => {
        expect(typeof validateHeadersServices).toBe('function');
    });

    it('should move forward [call next()] when headers are available. ', () => {
        mockRequiredHeaders = {
            'x-brand': 'x-brand'
        };

        validateHeadersServices(logger, mockRequiredHeaders, mockReq, mockRes, mockNext);

        expect(mockReq.header).toHaveBeenCalled();
        expect(mockReq.header).toHaveBeenCalledWith('x-brand');
        expect(mockNext).toHaveBeenCalled();
    });

    it('should return the request with Error 401 status code when execute headers are not available ', () => {
        mockRequiredHeaders = {
            'x-brand': 'x-brand'
        };

        validateHeadersServices(logger, mockRequiredHeaders, mockInvalidReq, mockRes, mockNext);

        expect(mockInvalidReq.header).toHaveBeenCalledWith('x-brand');
        expect(mockRes.status).toHaveBeenCalledWith(statusCodes.UNAUTHORIZED);
    });
});
