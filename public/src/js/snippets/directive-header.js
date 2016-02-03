'use strict';

/**
 * Top nav directive
 */
headerDirective.$inject = [];
function headerDirective () {
    return {
        restrict: 'E',
        replace: true,
        scope : {
        },
        templateUrl: 'snippets/partials/header.html',
        link: function (scope, el, attr) {
        }
    };
}


export default headerDirective;
