angular
  .module('app', [
  'ui.bootstrap',
  'ngMockE2E',
  'ngResource',
  'ui.router',
  'api'
]).config(appConfig).run(appRun);
 
appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function appConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/app/pages/login/login.html',
      controller: 'LoginCtrl'
    })
    .state('courses', {
      url: '/courses',
      abstract: true,
      template: '<ui-view></ui-view>'
    })
    .state('courses.list',{
      url: '/list',
      templateUrl: '/app/pages/courses/list.html',
      controller: 'CoursesListCtrl'
    })
    .state('courses.new', {
      url: '/new',
      templateUrl: '/app/pages/courses/courseForm.html',
      controller: 'NewCourseCtrl'
    })
    .state('courses.edit', {
      url: '/:courseId',
      templateUrl: '/app/pages/courses/courseForm.html',
      controller: 'EditCourseCtrl'
    });
}

appRun.$inject = ['$rootScope', '$httpBackend', 'coursesDataModel', 'userDataModel', '$state'];
function appRun($rootScope, $httpBackend, coursesDataModel, userDataModel, $state) {
  $httpBackend.whenGET(/pages/).passThrough();
  
  $httpBackend.whenGET('/api/courses').respond(function(method, url, data){
    var courses = coursesDataModel.findAll();
    return responseWith(200, courses);
  });
  $httpBackend.whenGET(/\/api\/courses\/\w+/).respond(function(method, url, data){
    var courseId = url.split('/').pop(),
        course = coursesDataModel.findOne(courseId);
    return responseWith(200, course);
  });
  $httpBackend.whenPOST('/api/courses').respond(function(method, url, data){
    var course = coursesDataModel.create(prepareData(data));
    return responseWith(201, course);
  });
  $httpBackend.whenPUT(/\/api\/courses\/\w+/).respond(function(method, url, data){
    var courseId = url.split('/').pop(),
        course = coursesDataModel.edit(courseId, prepareData(data));
    return responseWith(201, course);
  });
  $httpBackend.whenDELETE(/\/api\/courses\/\w+/).respond(function(method, url, data){
    var courseId = url.split('/').pop();
    coursesDataModel.remove(courseId);
    return responseWith(200);
  });
  
  function prepareData(data) {
    return angular.fromJson(data);
  }
  
  function responseWith(code, data, params) {
    return [code, angular.toJson(data) || {}, params || {}];
  }
  
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
    if (toState.name !== 'login' && !$rootScope.user) {
      $state.go('login', { message: 'Not autorized.' });
      event.preventDefault();
    }
  });
}
