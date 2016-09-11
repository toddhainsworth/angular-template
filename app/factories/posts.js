angular.module('myApp.factories.posts', ['ngResource']).
factory('Posts', ['$resource', 'API_URL', function($resource, API_URL) {
  return $resource(API_URL + '/posts/:id', null, {});
}]);
