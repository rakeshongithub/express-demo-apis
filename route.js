var express = require('express');
var router = express.Router({
		caseSensitive: true
	});

var genersController = require('./controllers/genersController');
var booksController = require('./controllers/booksController');

var routes = {
	'GET /api/geners': genersController.getGeners,
	'GET /api/geners/:_id': genersController.getGenerById,
	'POST /api/geners': genersController.addGener,
	'PUT /api/geners/:_id': genersController.updateGener,
	'DELETE /api/geners/:_id': genersController.deleteGener,
    'GET /api/books': booksController.getBooks,
	'GET /api/books/:_id': booksController.getBookById,
	'POST /api/books': booksController.addBook,
	'PUT /api/books/:_id': booksController.updateBook,
	'DELETE /api/books/:_id': booksController.deleteBook,
};

module.exports.init = function(app){
    Object.keys(routes).forEach(function (routekey) {
        var method = routekey.split(' ').shift();
        var path = routekey.split(' ').pop();
        router.route(path)[method.toLowerCase()](routes[routekey]);
    });

    app.use('/', router);
}
