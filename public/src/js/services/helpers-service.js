'use strict';


helpersService.$inject = [];
function helpersService () {
    return {
        returnResAfterXHRCall,
        rejectPromiseAfterXHRCall
    };

    function returnResAfterXHRCall(res) {
        return res;
    }

    function rejectPromiseAfterXHRCall(rejection) {
        console.log(rejection);

        return rejection;
    }
}

export default helpersService;
