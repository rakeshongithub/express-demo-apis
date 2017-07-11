var myApp = angular.module('myApp');

function BooksService($http, $log, $q) {
    function getBooks() {
        var deffered = $q.defer();
        $http.get('/api/books').then(function (response) {
            deffered.resolve(response.data);
        }, function (err) {
            deffered.reject(response.data);
            $log.error('ERROR: ', err.status)
        });
        return deffered.promise;
    }

    function getBook(id) {
        return $http.get('/api/books/' + id).then(function (response) {
            return response.data
        }, function (err) {
            $log.error('ERROR: ', err.status)
        });
    }

    function addBook(newBook) {
        return $http.post('/api/books/', newBook).then(function (response) {
            $log.info('Added Successfully:', response)
        }, function (err) {
            $log.error('ERROR:', err)
        });
    }

    function editBook(id, newBook) {
        return $http.put('/api/books/' + id, newBook).then(function (response) {
            $log.info('Updated Successfully:', response.status, response.statusText)
        }, function (err) {
            $log.error('ERROR:', err)
        });
    }

    function deleteBook(id) {
        return $http.delete('/api/books/' + id).then(function (response) {
            $log.info('Delete Successfully:', response.status, response.statusText)
        }, function (err) {
            $log.error('ERROR:', err)
        });
    }

    return {
        getBooks,
        getBook,
        addBook,
        editBook,
        deleteBook
    }
}
BooksService.$inject = ['$http', '$log', '$q'];
myApp.service('BooksService', BooksService);
// myApp.factory('BooksService', BooksService);