
'use strict';

const init = {
    pollInterval: 2000,
    krakenPoller: null
};

const reducer = (state = init, action) => {
    switch (action.type) {
    case 'REQUEST_KRAKEN_DATA':
        return Object.assign({}, state
        );
    case 'RECEIVE_KRAKEN_DATA':
        return Object.assign({}, state
        );
    case 'BEGIN_KRAKEN_POLLER':
        return Object.assign({}, state,
            { krakenPoller: setInterval(action.payload.pollerFunction, action.payload.pollinterval) }
        );
    case 'STOP_KRAKEN_POLLER':
        return Object.assign({}, state,
            { krakenPoller: clearInterval(action.payload.pollerFunction) }
        );
    default:
        return state;
    }
};

// Define module exports
module.exports = reducer;
