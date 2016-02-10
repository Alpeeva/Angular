angular
  .module('app')
  .factory('Course', ['$resource', function ($resource) {
    return $resource('/api/courses/:courseId', {courseId: '@id'}, {
      'edit': { method: 'PUT' }
    });
  }]);