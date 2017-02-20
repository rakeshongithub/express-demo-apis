var mongoose = require('mongoose');

module.exports.init = function(){
    // connect mongoose
    mongoose.connect('mongodb://localhost:27017/bookstore', function(err, db){
        if(err){
            console.error('ERROR ==> MongoDB not connect');
            console.error('ERROR ==> make sure mongodb running on port 27017');
            return;
        }
        console.info('=> Successfully connect to Mongodb...')
    });
    var db = mongoose.connection;
}