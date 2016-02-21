angular.module('appServices'. ['ngResource'])
    .factory('appService', ['$http', function ($http) {
        var server = 'http://localhost:8001/';
        return {
            getTopArticles = function (count) {
                return $http.get(server + 'articles?count=' + count);
            },
            getArticlesInNextPane = function () {
                return $http.get(server + 'articles?next=true');
            },
            getArticleDetails = function (articleId) {
                return $http.get(server + 'articles?id=' + articleId);
            }
        };
    }]);