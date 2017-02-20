var mongoose = require('mongoose');

var generSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Geners = module.exports = mongoose.model('Gener', generSchema);

module.exports.getGeners = function(callback, limit){
    Geners.find(callback).limit(limit);
}

module.exports.getGenerById = function(id, callback){
    Geners.findById(id, callback);
}

module.exports.addGener = function(gener, callback){
    Geners.create(gener, callback);
}

module.exports.updateGener = function(id, gener, options, callback){
    var query = {_id: id};
    var updatedModel = {
        name: gener.name
    }
    Geners.findOneAndUpdate(query, updatedModel, options, callback);
}

module.exports.deleteGener = function(id, callback){
    var query = {_id: id};
    Geners.remove(query, callback);
}