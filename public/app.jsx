
'use strict';

// Import node modules
let React = require('react');
let ReactDOM = require('react-dom');
let Redux = require('redux');
let Redact = require('react-redux');

// Import styles
require('./styles/style.less');

// Import react structures
let containers = require('./containers');
let reducers = require('./reducers');

// Create store
const store = reducers.getStore();

// Create react dom
const render = () => {
    ReactDOM.render(
        <Redact.Provider store={store}>
            <containers.Root/>
        </Redact.Provider>,
        document.getElementById('app')
    );
};

// Subscribe and render application
store.subscribe(render);
render();
