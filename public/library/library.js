angular.module('library', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('library', {
        templateUrl: '/library/library.html',
        controller: 'libraryCtrl'
      })
      .state('library.scopus', {
      	url: '/library/scopus',
      	templateUrl: '/library/info/info.html',
      	controller: 'infoCtrl',
      	params: {
      		site: 'scopus'
      	}
      });





  });