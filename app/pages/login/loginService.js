angular
  .module('app')
  .factory('loginService', function () {
    return {
      // TODO: implement communication with user service
      login: function (name, password, callback) {
        if (name === 'test' && password === 'test'){
          callback({ name: name });
        } else {
          callback(null);
        }
      }
    };
  });