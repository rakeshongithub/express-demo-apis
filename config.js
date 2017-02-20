var express = require('express');
var bodyParser = require('body-parser');

module.exports.init = function(app){
    app.use(express.static(__dirname + '/client'));
    app.use(bodyParser.json());
}
