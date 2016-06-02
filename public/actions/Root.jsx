
const requestKrakenData = () => {
    return {
        type: 'REQUEST_KRAKEN_DATA',
        payload: {}
    };
};

const receiveKrakenData = () => {
    return {
        type: 'RECEIVE_KRAKEN_DATA',
        payload: {}
    };
};

const fetchKrakenData = () => {
    console.log('poll hit');
};

const beginPoller = (pollinterval) => {
    return {
        type: 'BEGIN_KRAKEN_POLLER',
        payload: {
            pollerFunction: fetchKrakenData,
            pollinterval: pollinterval
        }
    };
};

const stopPoller = (pollerFunction) => {
    return {
        type: 'STOP_KRAKEN_POLLER',
        payload: {
            pollerFunction: pollerFunction
        }
    };
};

// Define module exports
module.exports.beginPoller = beginPoller;
module.exports.stopPoller = stopPoller;
module.exports.fetchKrakenData = fetchKrakenData;
