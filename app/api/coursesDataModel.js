angular
  .module('api')
  .factory('coursesDataModel', ['localStorageService', function (localStorageService) {
    var storageKey = 'courses',
      generateId = function () {
        var chars ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            length = 12,
            result = '';
        for (var i = length; i > 0; --i)
          result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      };
    
    return {
      findAll: function () {
        var coursesStorage = localStorageService.get(storageKey),
            result = [];
        for (var key in coursesStorage) {
          result.push(coursesStorage[key]);
        }
        return result;
      },
      findOne: function (key) {
        var courses = localStorageService.get(storageKey) || {},
            value = courses[key] || null;
        return value;
      },
      create: function (value) {
        var courses = localStorageService.get(storageKey) || {},
            id = generateId();
        
        value.id = id;
        courses[id] = value;
        localStorageService.set(storageKey, courses);
        
        return value;
      },
      edit: function (key, newValue) {
        var courses = localStorageService.get(storageKey) || {},
            value = courses[key] || null;
        
        if (value) {
          value = angular.merge({}, value, newValue);
          courses[key] = value;
          localStorageService.set(storageKey, courses);
        }
        
        return value;
      },
      remove: function (key) {
        var courses = localStorageService.get(storageKey) || {};
        delete courses[key];
        localStorageService.set(storageKey, courses);
      }
    };
  }]);
