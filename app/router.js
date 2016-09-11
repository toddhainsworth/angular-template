angular.module('myApp.router', ['ngRoute', 'myApp.controllers.posts'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
  $routeProvider.when('/posts', {
    templateUrl: 'templates/posts/posts.html',
    controller: 'PostsCtrl',
    controllerAs: 'postsCtrl'
  }).otherwise({redirectTo: '/posts'})
}]);
