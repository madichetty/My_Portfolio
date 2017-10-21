var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function ($routeProvider)
{
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'mainController'
        })
        .when('/Home', {
            templateUrl: 'Partials/opportunities.html',
            controller: 'opportunitiesController'
        })
        .when('/Indent', {
            templateUrl: 'Partials/indents.html',
            controller: 'indentsController'
        })
        .when('/Profile', {
            templateUrl: 'Partials/profiles.html',
            controller: 'profilesController'
        })
         .when('/User', {
             templateUrl: 'Partials/users.html',
             controller: 'usersController'
         })
        .when('/Demand', {
            templateUrl: 'Partials/demands.html',
            controller: 'demandsController'
        });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = "Hi!!!!!!!";
});

myApp.controller('opportunitiesController', function ($scope) {
    // create a message to display in our view
    $scope.message = "Everyone come and see how good I look!";
});

myApp.controller('indentsController', function ($scope) {
    $scope.message = "Look! I am an about page.";
});

myApp.controller('profilesController', function ($scope) {
    $scope.message = "Contact us! JK. This is just a demo.fdfd";
});

myApp.controller('usersController', function ($scope) {
    $scope.message = "Contact us! JK. This is just a demo.wewe";
});

myApp.controller('demandsController', function ($scope) {
    $scope.message = "Contact us! JK. This is just a demo.ddxgfh";
});

