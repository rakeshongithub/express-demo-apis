/* global angular */

var myApp = angular.module('myApp');

function BooksService($http, $log, $q) {
    const BASE_URL = '/thesys/api';

    function getBooks() {
        var deffered = $q.defer();
        $http.get(`${BASE_URL}/books`).then((response) => {
            deffered.resolve(response.data);
        }, function (err) {
            deffered.reject(err);
            $log.error('ERROR: ', err.status);
        });
        return deffered.promise;
    }

    function getBook(id) {
        return $http.get(`${BASE_URL}/book/` + id).then((response) => {
            return response.data;
        }, function (err) {
            $log.error('ERROR: ', err.status);
        });
    }

    function addBook(newBook) {
        return $http.post(`${BASE_URL}/book/`, newBook).then((response) => {
            $log.info('Added Successfully:', response);
        }, function (err) {
            $log.error('ERROR:', err);
        });
    }

    function editBook(id, newBook) {
        return $http.put(`${BASE_URL}/book/` + id, newBook).then((response) => {
            $log.info('Updated Successfully:', response.status, response.statusText);
        }, function (err) {
            $log.error('ERROR:', err);
        });
    }

    function deleteBook(id) {
        return $http.delete(`${BASE_URL}/book/` + id).then((response) => {
            $log.info('Delete Successfully:', response.status, response.statusText);
        }, function (err) {
            $log.error('ERROR:', err);
        });
    }

    return {
        getBooks,
        getBook,
        addBook,
        editBook,
        deleteBook
    };
}
BooksService.$inject = ['$http', '$log', '$q'];
myApp.service('BooksService', BooksService);
