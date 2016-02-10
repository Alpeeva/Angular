angular
  .module('app')
  .controller('NewCourseCtrl', ['$scope', 'Course', '$state', function ($scope, Course, $state) {
    $scope.course = new Course();
    
    $scope.create = function () {
      Course.save($scope.course);
      $state.go('courses.list');
    };
    
    $scope.cancel = function() {
      $state.go('courses.list');
    };
    
    $scope.popup = {
      opened: false
    };
    $scope.open = function() {
      $scope.popup.opened = true;
    };
    
  }]);
