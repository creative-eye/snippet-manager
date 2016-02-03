'use strict';

/**
 * Global error handling for all XHR calls.
 * The way this works is by watching all started/ended calls in the calls interceptors and pushing errors
 * to this services in case they are returned by the server
 * The advantage of this approach is that we will handle all errors globally instead of throwing specific errors
 * for each promise. We can still throw errors when a promise is rejected in a controller and it will overwrite
 * the generic error pushed to this service. For this to happen we need to call this service in order to add error
 * with a specific http error code.
 */
xhrErrorService.$inject = [
    '$rootScope',
    '_',
    'store',
];
function xhrErrorService (
    $rootScope,
    _,
    store
) {

    let errors = [];
    let callStack = 0;
    let errorMessages = [];
    let erroredCalls = [];

    /**
     * Watch to see if all AJAX calls are finished and trigger errors in case we have error responses
     */
    $rootScope.$watch(function () {
        return callStack;
    }, function (newVal, oldVal) {
        errorMessages = _getGenericErrorMessages(erroredCalls);

        // check to see if all calls are finished and we had errors
        if (newVal === 0 && oldVal !== 0 && (errors.length || errorMessages.length)) {
            erroredCalls = [];

            _removeGeneralErrorsIfCustomErrorsExist();

            errors = _.union(_.uniq(errors, 'code'), _.uniq(errorMessages, 'code'));

            setTimeout(function () {
                // if errors trigger error modal directive
                // do not show error modals on login page since we have custom validation
                if (errors.length) {
                    $rootScope.$broadcast('apiCalls:error');
                }
                clearErrorData();
            }, 0);
        }

    });

    return {
        triggerError,
        getError,
        activeAjaxCalls,
        clearErrorData,
        triggerSocketError
    };

    /**
     * Pushes error programmatically to AJAX calls modal
     * @param type
     * @param description
     * @param callback
     */
    function triggerError (args) {
        errors.push({
            code: args.code,
            type : args.type,
            description : args.description,
            callback : args.callback
        });
    }

    /**
     * Pushes error programmatically to AJAX calls modal
     * @param type
     * @param description
     * @param callback
     */
    function triggerSocketError (args) {
        clearErrorData();
        errors.push({
            code: args.code,
            type : args.type,
            description : args.description,
            callback : args.callback
        });
        // if errors trigger error modal directive
        // do not show error modals on login page since we have custom validation
        if (authService.isAuthenticated()) {
            $rootScope.$broadcast('apiCalls:error');
        }
    }

    function getError() {
        return errors;
    }

    /**
     * Change callStack flag in case an AJAX call was started/finished
     * @param callIsOngoing
     * @param errorResponse
     */
    function activeAjaxCalls (callIsOngoing, errorResponse) {
        if (callIsOngoing) {
            callStack++;
        } else {
            callStack--;
        }

        if (errorResponse) {
            erroredCalls.push(errorResponse);
        }
    };

    /**
     * Pushes general error messages based on the error code received from the server
     * @param erroredCalls
     * @returns {Array}
     * @private
     */
     function _getGenericErrorMessages (erroredCalls) {
        let errorCodes = _.uniq(_.pluck(erroredCalls, 'status'));

        _.each(errorCodes, function (code) {
            switch (code) {
                case 400:
                    errorMessages.push({
                        type: '',
                        code: 400,
                        description: 'The server request has malformed data, please review your selections.'
                    });
                    break;
                case 401:
                    // go to login
                    // logout, delete all sensitive data
                    _goToLoggin();
                    break;
                case 403:
                    errorMessages.push({
                        type: '',
                        code: 403,
                        description: 'You have tried to access a forbidden resource.'
                    });
                    break;
                case 404:
                    errorMessages.push({
                        type: '',
                        code: 404,
                        description: 'The server request tried to access a page that is missing or does not exits'
                    });
                    break;
                case 500:
                    errorMessages.push({
                        type: '',
                        code: 500,
                        description: 'The server has encountered an unexpected conditiion that prevented it from fulfilling the request'
                    });
                    break;
                case 501:
                    errorMessages.push({
                        type: '',
                        code: 501,
                        description: 'The server request is not supported by this server'
                    });
                    break;
                case 503:
                    errorMessages.push({
                        type: '',
                        code: 503,
                        description: 'Server is temporarly unavailable, please try again later'
                    });
                    break;
                default:
                    errorMessages.push({
                        type: '',
                        code: '',
                        description: 'Unkown error, please try again'
                    });
            }
        });

        return errorMessages;
    };

    /**
     * Clear all error codes/messages
     */
    function clearErrorData () {
        errors = [];
        errorMessages = [];
        erroredCalls = [];
    };

    function _goToLoggin () {
        clearErrorData();
        authService.redirectToLogin();
        store.clear();
    };

    /**
     * Removing general duplicate error codes if the error has already been handled
     * @return {[type]} [description]
     */
    function _removeGeneralErrorsIfCustomErrorsExist () {
        let errorCodes = _.uniq(_.pluck(errors, 'code'));
        errorMessages = _.filter(errorMessages, function (message) {

            if (!_.contains(errorCodes, message.code)) {
                return message;
            }
        });
    };
}

export default xhrErrorService;
