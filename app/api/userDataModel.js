angular
  .module('api')
  .factory('userDataModel', ['localStorageService', function (localStorageService) {
    var storageKey = 'users';
    return {
      login: function (loginName, password) {
        var usersStorage = localStorageService.get(storageKey) || {},
            user;
        
        if(loginName in usersStorage){
          user = usersStorage[loginName];
          if(password === user.pass) {
            delete user.pass;
            return user;
          }
        }
        return null;
      },
      register: function (loginName, password) {
        var usersStorage = localStorageService.get(storageKey) || {};
        if(loginName in usersStorage) {
          return null;
        }
        usersStorage[loginName] = { name: loginName, pass: password };
        localStorageService.set(storageKey, usersStorage);
      }
    };
  }]);