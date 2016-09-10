angular.module('myApp.router', ['ngRoute'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
  $routeProvider.when('/posts', {
    templateUrl: 'templates/posts/posts.html',
    controller: 'PostsCtrl'
  }).otherwise({redirectTo: '/posts'})
}]);
