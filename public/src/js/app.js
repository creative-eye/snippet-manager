'use strict';

import angular from 'angular';
import angularBootstrap from 'angular-bootstrap-npm';

/**
 * 3rd party packages
 */
// require external libs like lodash
import wrappExternalLibraries from './services/wrap-external-libs';
/**
 * END 3rd party packages
 */

/**
 * ng packages
 */
import ngSanitize from 'angular-sanitize';
import ngResource from 'angular-resource';
import ngBar from '../../../node_modules/angular-loading-bar/src/loading-bar.js';
import uiRouter from 'angular-ui-router';
/**
 * END ng packages
 */

/**
 * Internal modules
 */
import config from './config';
import appServices from './on-init-modules/init-common';
import appRoutes from './config/app-routes';
import snippets from './snippets/snippets';
/**
 * END Internal modules
 */

console.log('App:init');
angular.module('app',
[
    // external libs
    'app.libs',
    'ui.bootstrap',

    // ng modules
    'ngSanitize',
    'ngResource',
    'ui.router',

    // internal assets
    'app.config',
    'app.services',
    'templates-all',

    // modules
    'snippets'
])
.config(appRoutes)
;
