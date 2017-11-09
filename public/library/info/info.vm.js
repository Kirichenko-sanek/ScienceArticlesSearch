angular.module('library')
  .factory('infoVm', [
    '$rootScope',
    '$stateParams',

    function(
      $rootScope,
      $stateParams
    ) {
      return function() {
      	var self = this;

      	$rootScope.pageHome = false;
      	self.site = $stateParams.site;



      }
    }
  ])