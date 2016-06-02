
'use strict';

// Import node modules
let Redux = require('redux');
let thunkMiddleware = require('redux-thunk').default;
let Logger = require('redux-logger');

// Import reducers
const Root = require('./Root.jsx');
const Tile = require('./Tile.jsx');

// Create logger
const loggerMiddleware = Logger();

const reducers = {
    Tile
};

const getStore = () => {
    return Redux.createStore(
        Redux.combineReducers({
            Root,
            Tile
        }),
        Redux.applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
};


// Define module exports
module.exports = reducers;
module.exports.getStore = getStore;
