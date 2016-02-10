angular
  .module('api', [
  'LocalStorageModule'
]).config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('ls')
    .setNotify(true, true);
});