(function(module) {
try {
  module = angular.module('templates-all');
} catch (e) {
  module = angular.module('templates-all', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('global-components/partials/global-xhr-error.html',
    '<div class="modal-header error">\n' +
    '    <h3 class="modal-title">\n' +
    '        Server error. Error codes:\n' +
    '        <span ng-repeat="error in modal.errors">{{error.code}}</span>\n' +
    '    </h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <p ng-repeat="error in modal.errors" class="marb10">\n' +
    '        <span>{{error.description}}</span>\n' +
    '    </p>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button class="btn btn-danger"  ng-click="modal.ok()">OK</button>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-all');
} catch (e) {
  module = angular.module('templates-all', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('snippets/partials/add-snippet.html',
    '<div class="sa-one-container-full">\n' +
    '    <h3>Add a code snippet</h3>\n' +
    '    <div class="sa-form">\n' +
    '        <form class="sa-form__wrapper" action="" ng-submit="vm.addSnippet($event)" name="snippetSubmitForm">\n' +
    '            <fieldset class="form-group">\n' +
    '                <label for="name">Please provide your name</label>\n' +
    '                <input type="text" id="name" class="form-control"\n' +
    '                        placeholder="Type your name" required\n' +
    '                        ng-model="vm.data.snippet.name">\n' +
    '            </fieldset>\n' +
    '            <fieldset class="form-group">\n' +
    '                <label for="description">Please provide description</label>\n' +
    '                <input type="text" id="description" class="form-control"\n' +
    '                        placeholder="Type your description" required\n' +
    '                        ng-model="vm.data.snippet.description">\n' +
    '            </fieldset>\n' +
    '            <fieldset class="form-group">\n' +
    '                <textarea class="sa-form__content" required\n' +
    '                        ng-model="vm.data.snippet.code">\n' +
    '                </textarea>\n' +
    '            </fieldset>\n' +
    '\n' +
    '            <button type="submit" class="btn btn-primary">\n' +
    '                Add Snippet\n' +
    '            </button>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-all');
} catch (e) {
  module = angular.module('templates-all', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('snippets/partials/edit-snippet.html',
    '<div class="sa-one-container-full">\n' +
    '    <h3>Add a code snippet</h3>\n' +
    '    <div class="sa-form">\n' +
    '        <form class="sa-form__wrapper" action="" ng-submit="vm.saveSnippet($event)" name="snippetEditForm" novalidate>\n' +
    '            <fieldset class="form-group">\n' +
    '                <label for="name">Please provide your name</label>\n' +
    '                <input type="text" id="name" class="form-control"\n' +
    '                        value="{{vm.data.snippet.name}}" disabled\n' +
    '                        placeholder="Type your name">\n' +
    '            </fieldset>\n' +
    '            <fieldset class="form-group">\n' +
    '                <label for="description">Please provide description</label>\n' +
    '                <input type="text" id="description" class="form-control"\n' +
    '                        value="{{vm.data.snippet.description}}" disabled>\n' +
    '            </fieldset>\n' +
    '            <fieldset class="form-group">\n' +
    '                <textarea class="sa-form__content" required\n' +
    '                        ng-model="vm.data.snippet.code">\n' +
    '                </textarea>\n' +
    '            </fieldset>\n' +
    '\n' +
    '            <button type="submit" class="btn btn-primary">\n' +
    '                Edit Snippet\n' +
    '            </button>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-all');
} catch (e) {
  module = angular.module('templates-all', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('snippets/partials/list-snippet.html',
    '<div class="sa-one-container-full">\n' +
    '    <h3>Snippets list</h3>\n' +
    '    <div class="sa__grid">\n' +
    '        <ul class="sa__grid-list">\n' +
    '            <li ng-repeat="snippet in vm.data.snippets track by $index"\n' +
    '                ng-click="vm.showSnippet($index)">\n' +
    '                <p>\n' +
    '                    {{snippet.name}}\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                    {{snippet.description}}\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                    {{snippet.code}}\n' +
    '                </p>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
