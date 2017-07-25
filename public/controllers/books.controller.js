/* global angular */
var myApp = angular.module('myApp');

function BooksController($scope, $location, $log, $routeParams, BooksService) {
    var vm = this;
    BooksService.getBooks().then((data) => {
        vm.books = data;
    }, function (err) {
        $log.log('SOMETHING GOES WRONG', err);
    });

    if ($routeParams.id) {
        BooksService.getBook($routeParams.id).then((data) => {
            vm.book = data;
        });
    }

    vm.addBook = function () {
        BooksService.addBook(vm.book).then(() => {
            window.location.href = '#!/';
        });
    };

    vm.editBook = function () {
        BooksService.editBook($routeParams.id, vm.book).then(() => {
            window.location.href = '#!/books/detail/' + $routeParams.id;
        });
    };

    vm.deleteBook = function (id) {
        BooksService.deleteBook(id).then(() => {
            window.location.href = '#!/books/';
        });
    };

}
BooksController.$inject = ['$scope', '$location', '$log', '$routeParams', 'BooksService'];
myApp.controller('BooksController', BooksController);
