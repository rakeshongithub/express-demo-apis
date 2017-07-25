/* global __dirname */

var express = require('express');
var bodyParser = require('body-parser');

module.exports.init = (app) => {
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.json());
};
