angular.module('common')
  .service('documentService', function($http) {
    this.getAllLecturer = function() {
      return $http.get('/api/getAllLecturer');
    }
  });