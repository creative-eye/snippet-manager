'use strict';

import AddSnippetCtrl from '../snippets/add-snippet-ctrl';
import ListSnippetsCtrl from '../snippets/list-snippets-ctrl';
import EditSnippetCtrl from '../snippets/edit-snippet-ctrl';


appRoutes.$inject = [
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider'
];
function appRoutes (
    $httpProvider,
    $stateProvider,
    $urlRouterProvider
) {

    $httpProvider.interceptors.push('xhrInterceptors');

    $stateProvider
        .state('addSnipppet', {
            url: '/snippets/add',
            templateUrl: 'snippets/partials/add-snippet.html',
            controller: AddSnippetCtrl,
            controllerAs: 'vm',
            data: {}
        })
        .state('listSnippets', {
            url: '/snipets/list',
            templateUrl: 'snippets/partials/list-snippet.html',
            controller: ListSnippetsCtrl,
            controllerAs: 'vm',
            data: {}
        })
        .state('editSnippet', {
            url: '/snippets/edit/:id',
            templateUrl: 'snippets/partials/edit-snippet.html',
            controller: EditSnippetCtrl,
            controllerAs: 'vm',
            data: {}
        })
        ;

    $urlRouterProvider.otherwise('/snippets/add');

}

export default appRoutes;
