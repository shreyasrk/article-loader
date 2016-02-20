'use strict';

var app = angular.module('articleLoader', [
    'ngRoute',
    'appControllers',
    'appDirectives',
    'appServices',
    'appFilters']);

articleLoader.config([$routeProvider, function ($routeProvider){
    $routeProvider.when('/index', {
        'templateUrl': 'partials/index.html',
        'controller': 'appMainController'
    }).when('/index/:article_id', {
        'templateUrl': 'partials/detail.html',
        'controller': 'appDetailController'
    });

    $routeProvider.otherwise('/index');
}]);