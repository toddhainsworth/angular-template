angular.module('myApp.controllers.posts', ['myApp.factories.posts']).controller('PostsCtrl', ['$scope', 'Posts', function($scope, Posts) {
  this.posts = Posts.query();
}]);
