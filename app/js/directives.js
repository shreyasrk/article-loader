angular.module('appDirectives', [])
    .directive('sideBarNavigation', [
        function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'partials/side-bar.html'
            };
        }])
    .directive('nextArticleSlot', ['appService', 
        function (appService) {
            return {
                restrict: 'E',
                scope: {},
                replace: true,
                templateUrl: 'partials/next-article.html',
                link: function (scope, element, attrs) {
                    appService.getArticles()
                        .then(function (response) {
                            scope.articleData = response.data;
                        });
                }
            };
        }]);