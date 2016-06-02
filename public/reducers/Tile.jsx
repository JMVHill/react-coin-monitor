
'use strict';

const init = {
    text: 'This is test #',
    testCounter: 0
};

const reducer = (state = init, action) => {
    switch (action.type) {
    case 'INCREMENT_TEST_COUNTER':
        return Object.assign(
            {},
            state,
            { testCounter: state.testCounter + 1 }
        );
    default:
        return state;
    }
};

// Define module exports
module.exports = reducer;
