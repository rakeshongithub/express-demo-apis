var express = require('express');
var router = express.Router({
    caseSensitive: true
});

var booksController = require('./app/server/controllers/booksController');

var routes = {
    'GET /api/books': booksController.getBooks,
    'GET /api/books/:_id': booksController.getBookById,
    'POST /api/books': booksController.addBook,
    'PUT /api/books/:_id': booksController.updateBook,
    'DELETE /api/books/:_id': booksController.deleteBook
};

module.exports.init = (app) => {
    Object.keys(routes).forEach((routekey) => {
        var method = routekey.split(' ').shift();
        var path = routekey.split(' ').pop();
        router.route(path)[method.toLowerCase()](routes[routekey]);
    });

    app.use('/', router);
};
