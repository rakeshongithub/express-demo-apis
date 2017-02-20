var Books = require('../models/books');

function getBooks(req, res){
    Books.getBooks(function(err, books){
        if(err){
            console.error('ERROR', err);
        }
        res.send(books);
    })
}

function addBook(req, res){
    var book = req.body;
    Books.addBook(book, function(err, book){
        if(err){
            console.error('ERROR', err);
        }
        res.send(book);
    })
}

function getBookById(req, res){
    Books.getBookById(req.params._id, function(err, book){
        if(err){
            console.error('ERROR', err);
        }
        res.send(book);
    })
}

function updateBook(req, res){
    var id = req.params._id;
    var book = req.body;
    Books.updateBook(id, book, {}, function(err, book){
        if(err){
            console.error('------ERROR', err);
        }
        res.send(book);
    })
}

function deleteBook(req, res){
    var id = req.params._id;
    Books.deleteBook(id, function(err, book){
        if(err){
            console.error('ERROR', err);
        }
        res.send(book);
    })
}

module.exports = {
    getBooks,
    addBook,
    getBookById,
    updateBook,
    deleteBook
}