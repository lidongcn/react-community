var HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');
console.log(__dirname);
module.exports = {
    devtool: 'cheap-module-eval-source-map',
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

}