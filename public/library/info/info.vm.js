angular.module('library')
  .factory('infoVm', [
    '$rootScope',
    '$stateParams',
    'documentService',
    '$state',

    function(
      $rootScope,
      $stateParams,
      documentService,
      $state
    ) {
      return function() {
        var self = this;

        $rootScope.pageHome = false;
        self.site = $stateParams.site;
        self.lecturer = [];
        self.info = [];

        self.getLecturer = function() {
          documentService.getAllLecturer()
            .then(result => {
              if (result.data) {
                self.lecturer = result.data;
              }

            });
        };

        self.loadInfo = function(id){
          documentService.getAllDocument(id)
            .then(result => {
              if (result.data) {
                self.info = result.data;
              }
            });
        };

        self.goInfo = function(id) {
          $state.go('library.info', {id: id});
        }

        self.getLecturer();
      }
    }
  ])