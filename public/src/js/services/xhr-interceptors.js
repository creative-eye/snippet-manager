/**
 * Interceptor for all the AJAX calls throughout the app
 * This will write the X-AUTH-TOKEN to outgoing calls header and will
 * handle all the errors once we will have a decision on this
 */
'use strict';

xhrInterceptors.$inject = [
    '$q',
    'xhrErrorService'
];
function xhrInterceptors(
    $q,
    xhrErrorService
) {
    return {
        request,
        requestError,
        response,
        responseError
    };

    // On request success
    function request(config) {
        // Contains the data about the request before it is sent.
        // Intercept outgoing calls and add header

        if (config.hasOwnProperty('url') && config.url.indexOf('.html') === -1) {
            xhrErrorService.activeAjaxCalls(true);
        }

        // console.log(config);
        // Return the config or wrap it in a promise if blank.
        return config || $q.when(config);
    }

    // On request failure
    function requestError (rejection) {
        // console.log(rejection); // Contains the data about the error on the request.
        console.log('XHRrequest:error ', rejection);
        xhrErrorService.activeAjaxCalls(false, rejection);
        if (rejection.hasOwnProperty('url') && rejection.url.indexOf('.html') === -1) {
            xhrErrorService.activeAjaxCalls(false, rejection);
        }


        // Return the promise rejection.
        return $q.reject(rejection);
    }

    // On response success
    function response(response) {
        // console.log(response); // Contains the data from the response.

        if (response.config.hasOwnProperty('url') && response.config.url.indexOf('.html') === -1) {
            xhrErrorService.activeAjaxCalls(false);
        }

        // Return the response or promise.
        return response || $q.when(response);
    }

    // On response failture
    function responseError(rejection) {

        if (rejection.config.hasOwnProperty('url') &&  rejection.config.url.indexOf('.html') === -1) {
            xhrErrorService.activeAjaxCalls(false, rejection);
        }

        // Return the promise rejection.
        return $q.reject(rejection);
    }
}

export default xhrInterceptors;
