angular.module('home')
  .factory('homeVm', ['$rootScope', function($rootScope) {
    return function() {
    	var self = this;
    	$rootScope.pageHome = true;
    }
  }])