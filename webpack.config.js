const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 8080
    }
}