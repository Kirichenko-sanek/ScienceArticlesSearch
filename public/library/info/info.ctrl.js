angular.module('library')
  .controller('infoCtrl', ['$scope', 'infoVm', function($scope, infoVm) {
    $scope.vm = new infoVm();
  }])