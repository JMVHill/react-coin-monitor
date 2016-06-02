
'use strict';

// Import node modules
let Redact = require('react-redux');

// Import actions
const actions = require('../actions').Tile;

const mapStateToProps = ({Tile}, ownProps) => {
    return {
        text: Tile.text,
        testCounter: Tile.testCounter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (event) => {
            event.preventDefault();
            dispatch(actions.incrementTestCounter());
        }
    };
};

// Define module exports
module.exports = Redact.connect(mapStateToProps, mapDispatchToProps)(require('../components').Tile);
