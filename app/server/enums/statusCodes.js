'use strict';
/**
 * @description Error Codes
 * @author RKU143 <rkumar148@sapient.com>
 */
const StatusEnum = {
    SUCCESS_OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    DATA_NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
};

/**
 * @description Export modules
 * @modules [ErrorsEnum]
 */
module.exports = StatusEnum;
