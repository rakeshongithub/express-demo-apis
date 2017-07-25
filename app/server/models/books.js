var mongoose = require('mongoose');
var schemaConfig = require('../schema/schema');
var booksSchema = mongoose.Schema(schemaConfig);

var Books = module.exports = mongoose.model('Books', booksSchema);

module.exports.getBooks = (callback, limit) => {
    Books.find(callback).limit(limit);
};

module.exports.getBookById = (id, callback) => {
    Books.findById(id, callback);
};

module.exports.addBook = (book, callback) => {
    Books.create(book, callback);
};

module.exports.updateBook = (id, book, options, callback) => {
    var query = {_id: id};
    var updateModel = {
        title: book.title,
        gener: book.gener,
        description: book.description,
        authour: book.authour,
        publisher: book.publisher,
        pages: book.pages,
        images_url: book.images_url,
        buy_url: book.buy_url,
        updated_date: Date.now
    };
    Books.findOneAndUpdate(query, updateModel, options, callback);
};

module.exports.deleteBook = (id, callback) => {
    var query = {_id: id};
    Books.remove(query, callback);
};
