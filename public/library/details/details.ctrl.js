angular.module('library')
  .controller('detailsCtrl', ['$scope', 'detailsVm', function($scope, detailsVm) {
    $scope.vm = new detailsVm();
  }])