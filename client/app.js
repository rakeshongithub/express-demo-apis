var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/books.html',
        controller: 'BooksController',
        controllerAs: 'main'
    })
    .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksController',
        controllerAs: 'main'
    })
    .when('/books/detail/:id', {
        templateUrl: 'views/book_details.html',
        controller: 'BooksController',
        controllerAs: 'main'
    })
    .when('/books/add', {
        templateUrl: 'views/add_book.html',
        controller: 'BooksController',
        controllerAs: 'main'
    })
    .when('/books/edit/:id', {
        templateUrl: 'views/edit_book.html',
        controller: 'BooksController',
        controllerAs: 'main'
    })
    .otherwise({
        redirectTo: '/'
    })
}])