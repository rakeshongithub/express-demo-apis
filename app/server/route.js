var express = require('express');
var router = express.Router({
    caseSensitive: true
});

var booksController = require('./controllers/booksController');

var routes = {
    'GET /books': booksController.getBooks,
    'GET /book/:_id': booksController.getBookById,
    'POST /book': booksController.addBook,
    'PUT /book/:_id': booksController.updateBook,
    'DELETE /book/:_id': booksController.deleteBook
};

module.exports.init = (app) => {
    Object.keys(routes).forEach((routekey) => {
        var method = routekey.split(' ').shift();
        var path = routekey.split(' ').pop();
        router.route(path)[method.toLowerCase()](routes[routekey]);
    });

    app.use('/thesys/api', router);
};
