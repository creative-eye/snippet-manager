'use strict';

import headerDirective from './directive-header';

import AddSnippetCtrl from './add-snippet-ctrl';
import ListSnippetsCtrl from './list-snippets-ctrl';
import EditSnippetCtrl from './edit-snippet-ctrl';

import snippetsXhrService from './snippets-xhr-service';


angular.module('snippets', [])
            .directive('smHeader', headerDirective)
            .controller('AddSnippetCtrl', AddSnippetCtrl)
            .controller('ListSnippetsCtrl', ListSnippetsCtrl)
            .controller('EditSnippetCtrl', EditSnippetCtrl)
            .factory('snippetsXhrService', snippetsXhrService);
