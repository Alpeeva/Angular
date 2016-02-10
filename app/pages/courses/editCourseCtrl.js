angular
  .module('app')
  .controller('EditCourseCtrl', ['$scope', 'Course', '$state', '$stateParams', function ($scope, Course, $state, $stateParams) {
    $scope.course = Course.get({courseId:$stateParams.courseId});
    
    $scope.edit = function () {
      Course.edit($scope.course);
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