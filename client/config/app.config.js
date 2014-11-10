angular.module('bestApp.config', [])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'states/account/account.html',
      controller: 'LoginController'
    })
    .state('reset', {
      url: '/reset',
      templateUrl: 'states/account/account.html',
      controller: 'ResetController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'states/account/account.html',
      controller: 'SignupController'
    });
}]);