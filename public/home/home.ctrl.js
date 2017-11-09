angular.module('home')
  .controller('homeCtrl', ['$scope', 'homeVm', function($scope, homeVm) {
    $scope.vm = new homeVm();
  }]);