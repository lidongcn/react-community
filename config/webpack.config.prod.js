var HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack');
console.log(__dirname);
module.exports = {
    entry:path.resolve(__dirname, '../app/index.js'),
    output:{
        path:path.resolve(__dirname, '../'),
        filename:'bundle.js',
    },
    module:{
        noParse:[],
        loaders:[
            {
                test:/\.js$/,
                loaders:['babel'],
                exclude:/node_modules/,
            },
            {test: /\.json$/, loader: 'json',exclude:/node_modules/},
            {
                test:/\.scss$/,
                loaders: ['style', 'css', 'sass'],
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]

}