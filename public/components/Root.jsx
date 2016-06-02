
'use strict';

// Import node modules
let React = require('react');
let Fetch = require('whatwg-fetch');

// Import react stuffs
const containers = require('../containers');

class Root extends React.Component {
    componentDidMount() {
        this.props.beginPoller(this.props.pollInterval);
    }
    componentWillUnmount() {
        this.props.stopPoller(this.props.krakenPoller);
    }
    render() {
        return (
            <containers.Tile />
        );
    }
}

// Define module exports
module.exports = Root;
