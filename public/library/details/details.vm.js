angular.module('library')
    .factory('detailsVm',[
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
                self.id = $stateParams.id;
                self.info = {};

                self.getInfo = function() {
                    documentService.getDocument(self.id)
                        .then(result => {
                            if (result.data) {
                                self.info = result.data;
                            }
                        });
                };

                self.getInfo();
            }
        }
    ])