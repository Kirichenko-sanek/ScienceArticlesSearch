angular.module('common')
  .service('documentService', function($http) {
    this.getAllLecturer = function() {
      return $http.get('/api/getAllLecturer');
    }

    this.getAllDocument = function(id) {
      return $http.get('/api/getAllDocument/'+ id);
    }

    this.getDocument = function(id) {
      return $http.get('/api/getDocument/' + id);
    }
  });