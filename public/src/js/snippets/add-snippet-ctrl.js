'use strict';


AddSnippetCtrl.$inject = [
    '$state',
    'snippetsXhrService'
];
function AddSnippetCtrl (
    $state,
    snippetsXhrService
) {
    let self = this;


    let init = (function () {
        initData();
        initState();
    })();


    function initData () {
        self.data = {
            snippet: {}
        };

        populateInitData();
    }

    function initState () {
        self.state = {};
    }


    function populateInitData () {
        self.data.snippet.name = '';
        self.data.snippet.description = '';
        self.data.snippet.code = '';
    }

    self.addSnippet = function (e) {
        e.preventDefault();
        self.data.snippet.id = new Date().getTime();

        snippetsXhrService.saveSnippet({ data: self.data.snippet })
            .then(res => {
                console.log(e);

                $state.go('listSnippets');
            });
    }

}

export default AddSnippetCtrl;
