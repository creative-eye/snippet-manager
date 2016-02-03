'use strict';


/**
 * Starts all global directives/services/other assets
 */
import helpersService from '../services/helpers-service';
import xhrErrorService from '../services/xhr-error-service';
import xhrInterceptors from '../services/xhr-interceptors';

import xhrErrorDirective from '../global-components/global-directive-xhr-error-handling';

import FIRST_CONSTANT from '../services/constants/first-contant';


angular.module('app.services', [])
    .factory('helpersService', helpersService)
    .factory('xhrErrorService', xhrErrorService)
    .factory('xhrInterceptors', xhrInterceptors)
    .directive('xhrErrorDirective', xhrErrorDirective)
    .constant('FIRST_CONSTANT', FIRST_CONSTANT)
    ;
