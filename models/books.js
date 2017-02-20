var mongoose = require('mongoose');

var booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    gener: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    authour: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    images_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Books = module.exports = mongoose.model('Books', booksSchema);

module.exports.getBooks = function(callback, limit){
    Books.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
    Books.findById(id, callback);
}

module.exports.addBook = function(book, callback){
    Books.create(book, callback);
}

module.exports.updateBook = function(id, book, options, callback){
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
    }
    Books.findOneAndUpdate(query, updateModel, options, callback);
}

module.exports.deleteBook = function(id, callback){
    var query = {_id: id};
    Books.remove(query, callback);
}