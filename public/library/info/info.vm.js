angular.module('library')
  .factory('infoVm', [
    '$rootScope',
    '$stateParams',
    'documentService',

    function(
      $rootScope,
      $stateParams,
      documentService
    ) {
      return function() {
        var self = this;

        $rootScope.pageHome = false;
        self.site = $stateParams.site;
        self.lecturer = [];

        self.getLecturer = function() {
          documentService.getAllLecturer()
            .then(result => {
              if (result.data) {
                self.lecturer = result.data;
              }

            });
        }





        self.getLecturer();


      }
    }
  ])