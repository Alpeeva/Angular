angular
  .module('app')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$state', 'loginService', function ($scope, $rootScope, $state, loginService) {
    $scope.user = {
      login: '',
      password: ''
    };
     
    $scope.signIn = function () {
      loginService.login($scope.user.login, $scope.user.password, function (user) {
        if (!user) {
          $scope.user.password = '';
          return;
        }
         
        $rootScope.user = user;
        $state.go('courses.list');
      });
    };
  }]);