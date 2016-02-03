'use strict';

/**
 * Depends on the error-service and handles errors both globally and on trigger state
 * Modal will be displayed only when all the ajax calls are finished and includes all ajax calls errors triggered
 * programatically or returned by the API
 */
xhrErrorDirective.$inject = [
    '$uibModal',
    '_',
    'xhrErrorService'
];
function xhrErrorDirective (
    $uibModal,
    _,
    xhrErrorService
) {
    return {
        restrict: 'E',
        link: function link (scope, el, attrs) {
            let openErrorPopup = function (errors) {
                let modalInstance = $uibModal.open({
                    templateUrl: 'global-components/partials/global-xhr-error.html',
                    controller: ['$scope', '$uibModalInstance','error', function ($scope, $uibModalInstance) {
                        $scope.modal = {};

                        $scope.modal.errors = errors;
                        xhrErrorService.clearErrorData();
                        $scope.modal.ok = function() {
                            $uibModalInstance.close();
                        };
                    }],
                    resolve: {
                        error: function () {
                            return {
                                errors: errors
                            };
                        }
                    }
                });

                function executeCallbackStack (errors) {
                    let callbacks = _.pluck(errors, 'callback');
                    callbacks = _.compact(callbacks);

                    if (callbacks.length) {
                        _.invoke(callbacks, _.call, null, []);
                    }
                }
                // once OK or Cancel was clicked
                modalInstance.result.then(function (res) {
                    executeCallbackStack(errors);
                }, function (res) {
                    // exception for escape/click on the background
                    if (res === 'escape key press' || res === 'backdrop click') {
                        executeCallbackStack(errors);
                    }
                });
            };


            scope.$on('apiCalls:error', function (messages) {
                let errors = xhrErrorService.getError();
                openErrorPopup(errors);
            });
        }

    }
}

export default xhrErrorDirective;
