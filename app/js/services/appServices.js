angular.module('appServices'. ['ngResource'])
    .factory('appService', ['$http', function ($http) {
        return {
            getTopArticles = function (count) {
                return $http.get('http://localhost:8000/articles?count=' + count);
            },
        getetArticle = function (articleId) {
                return $http.get('http://localhost:8000/articles/article?id=' + articleId);
            }
        };
    }]);