
let path = require('path');

const PATHS = {
    BUILD: path.join(__dirname, '/build/'),
    PUBLIC: '/build/'
};

module.exports = {
    entry: './public/app.jsx',
    output: {
        path: PATHS.BUILD,
        publicPath: PATHS.PUBLIC,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devtool: 'inline-source-map',
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: ['node_modules'],
            loaders: ['eslint']
        }],
        loaders: [
            { test: /\.html$/, loaders: 'html' },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            }, {
                test: /\.jsx?$/,
                exclude: ['node_modules'],
                loader: 'babel-loader'
            }
        ]
    }
};

