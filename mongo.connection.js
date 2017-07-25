var mongoose = require('mongoose');
var logger = require('winston');

module.exports.init = () => {
    // connect mongoose
    mongoose.connect('mongodb://localhost:27017/bookstore', (err, db) => {
        if(err){
            logger.error('ERROR ==> MongoDB not connect');
            logger.error('ERROR ==> make sure mongodb running on port 27017');
            return;
        }
        logger.info('=> Successfully connect to Mongodb...')
    });
    var db = mongoose.connection;
};
