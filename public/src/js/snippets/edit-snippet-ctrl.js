'use strict';


EditSnippetCtrl.$inject = [
    '$state',
    'snippetsXhrService'
];
function EditSnippetCtrl (
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
        snippetsXhrService.getSnippet($state.params.id)
            .then(res => {
                    console.log(res);
                    self.data.snippet = res.data;
                },
                rejection => {
                    $state.go('listSnippets');

                    return true;
                }
            )
    }

    self.saveSnippet = function (e) {
        e.preventDefault();

        snippetsXhrService.updateSnippet({
            id: $state.params.id,
            data: self.data.snippet.code
        })
        .then(res => {
            console.log(res);
            $state.go('listSnippets');
        })
    }

}

export default EditSnippetCtrl;
