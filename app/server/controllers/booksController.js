var Books = require('../models/books');
var logger = require('winston');

// Get all books list
function getBooks(req, res) {
    Books.getBooks((err, books) => {
        if (err) {
            logger.error('ERROR', err);
            res.send(err);
        }
        res.send(books);
    });
}

// Add new book to the list
function addBook(req, res) {
    var book = req.body;
    Books.addBook(book, (err, book) => {
        if (err) {
            logger.error('ERROR', err);
            res.send(err);
        }
        res.send(book);
    });
}

// Get book detail information
function getBookById(req, res) {
    Books.getBookById(req.params._id, (err, book) => {
        if (err) {
            logger.error('ERROR', err);
            res.send(err);
        }
        res.send(book);
    });
}

// Update book information
function updateBook(req, res) {
    var id = req.params._id;
    var book = req.body;
    Books.updateBook(id, book, {}, (err, book) => {
        if (err) {
            logger.error('------ERROR', err);
            res.send(err);
        }
        res.send(book);
    });
}

// Delete Book
function deleteBook(req, res) {
    var id = req.params._id;
    Books.deleteBook(id, (err, book) => {
        if (err) {
            logger.error('ERROR', err);
            res.send(err);
        }
        res.send(book);
    });
}

module.exports = {
    getBooks,
    addBook,
    getBookById,
    updateBook,
    deleteBook
};
