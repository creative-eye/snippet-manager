'use strict';

/**
 * Wrapper for all external libs that need to be global
 */
import _ from 'lodash';
import store from 'store';

/**
 * Wrappers for fromed npm libraries
 */
angular.module('app.libs', [])
    .factory('_', function() {
        return _;
    })
    .factory('store', function () {
        return store;
    });
