
const incrementTestCounter = () => {
    return {
        type: 'INCREMENT_TEST_COUNTER',
        payload: {}
    };
};

// Define module exports
module.exports.incrementTestCounter = incrementTestCounter;
