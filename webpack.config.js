var path = require('path');

module.exports = {
    mode: 'development',
    entry: "./app/assets/js/App.js",
    output: {
        filename: "Final.js",
        path: path.resolve(__dirname, './app/assets/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    devtool: 'source-map'
}