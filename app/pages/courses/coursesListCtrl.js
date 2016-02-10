angular
  .module('app')
  .controller('CoursesListCtrl', ['$scope', 'Course', function ($scope, Course) {
    $scope.courses = Course.query();
    
    $scope.delete = function (courseId) {
      Course.remove({courseId: courseId}, function () {
        $scope.courses = Course.query();
      });
    };
  }]);