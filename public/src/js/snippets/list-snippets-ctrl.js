'use strict';


ListSnippetsCtrl.$inject = [
    '$state',
    'snippetsXhrService'
];
function ListSnippetsCtrl (
    $state,
    snippetsXhrService
) {
    let self = this;

    let init = (function () {
        initData();
        initState();
    })();


    function initData () {
        self.data = {};

        populateInitData();
    }

    function initState () {
        self.state = {};
    }


    function populateInitData () {
        snippetsXhrService.getSnippets()
            .then(res => {
                self.data.snippets = res.data;
                console.log(self.data.snippets);
            });
    }


    self.showSnippet = function (index) {
        let id = self.data.snippets[index].id;

        $state.go('editSnippet', { id });
    };

}

export default ListSnippetsCtrl;
