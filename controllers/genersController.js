var Geners = require('./../models/geners');

function getGeners(req, res){
    Geners.getGeners(function(err, geners){
        if(err){
            console.error('ERROR', err);
        }
        res.send(geners);
    })
}

function addGener(req, res){
    var gener = req.body;
    Geners.addGener(gener, function(err, gener){
        if(err){
            console.error('ERROR', err);
        }
        res.send(gener);
    })
}

function getGenerById(req, res){
    Geners.getGenerById(req.params._id, function(err, gener){
        if(err){
            console.error('ERROR', err);
        }
        res.send(gener);
    })
}

function updateGener(req, res){
    var id = req.params._id;
    var gener = req.body;
    Geners.updateGener(id, gener, {}, function(err, gener){
        if(err){
            console.error('ERROR', err);
        }
        res.send(gener);
    })
}

function deleteGener(req, res){
    var id = req.params._id;
    Geners.deleteGener(id, function(err, gener){
        if(err){
            console.error('ERROR', err);
        }
        res.send(gener);
    })
}

module.exports = {
    getGeners,
    getGenerById,
    addGener,
    updateGener,
    deleteGener
}