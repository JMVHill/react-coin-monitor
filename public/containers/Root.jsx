
'use strict';

// Import node modules
let Redact = require('react-redux');

// Import actions
const actions = require('../actions').Root;

const mapStateToProps = ({Root}, ownProps) => {
    return {
        pollInterval: Root.pollInterval,
        krakenPoller: Root.krakenPoller
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        beginPoller: (pollInterval) => { dispatch(actions.beginPoller(pollInterval)); },
        stopPoller: (krakenPoller) => { dispatch(actions.stopPoller(krakenPoller)); }
    };
};

// Define module exports
module.exports = Redact.connect(mapStateToProps, mapDispatchToProps)(require('../components').Root);
