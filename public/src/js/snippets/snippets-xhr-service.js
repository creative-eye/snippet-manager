'use strict';


snippetsXhrService.$inject = [
    '$http',
    'config',
    'helpersService'
];
function snippetsXhrService (
    $http,
    config,
    helpersService
) {

    return {
        saveSnippet,
        updateSnippet,

        getSnippets,
        getSnippet
    }

    function saveSnippet (data) {
        let opts = {
            url: `${config.api}/api/snippet`,
            method: 'POST',
            data
        };

        return $http(opts);
    }

    function getSnippets () {
        let opts = {
            url: `${config.api}/api/snippets`
        };

        return $http(opts);
    }

    function getSnippet (id) {
        let opts = {
            url: `${config.api}/api/snippet/${id}`
        };

        return $http(opts);
    }

    function updateSnippet (args) {
        let opts = {
            url:  `${config.api}/api/snippet/${args.id}`,
            method: 'PUT',
            data: {
                code: args.data
            }
        };

        return $http(opts);
    }
}

export default snippetsXhrService;
