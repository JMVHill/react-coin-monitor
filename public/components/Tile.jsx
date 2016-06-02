
'use strict';

// Import node modules
let React = require('react');

class Tile extends React.Component {
    render() {

        const {
            text,
            testCounter,
            onClick
        } = this.props;

        return (
            <div className="tile" onClick={onClick}>
                <span>{text + testCounter}</span>
            </div>
        );
    }
}

// Define module exports
module.exports = Tile;
