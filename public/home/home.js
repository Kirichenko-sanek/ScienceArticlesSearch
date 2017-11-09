angular.module('home', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home/home.html',
        controller: 'homeCtrl'
      });
  });