angular.module('app')
  .controller('CoursesCtrl', ['$scope', function ($scope) {
    $scope.courses = [
      {
        name: 'Видеокурс 1',
        duration: '1 час 28 мину',
        date: 'дата',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
      },
      {
        name: 'Видеокурс 2',
        duration: '1 час 28 мину',
        date: 'дата',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
      },
      {
        name: 'Видеокурс 3',
        duration: '1 час 28 мину',
        date: 'дата',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
      },
      {
        name: 'Видеокурс 4',
        duration: '1 час 28 мину',
        date: 'дата',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
      }
    ];
    
    $scope.selectedCourse = {
      name: 'Видеокурс 1',
      duration: '1 час 28 мину',
      date: 'дата',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
    };
  }]);