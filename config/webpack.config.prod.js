var path = require('path'),
    webpack = require('webpack');
console.log(__dirname);
module.exports = {
    entry:{
        app:path.resolve(__dirname, '../app/index.js'),
        vendor:['react','react-dom','react-redux']
    },
    output:{
        path:path.resolve(__dirname, '../../build'),
        publicPath:'build',
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
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor','vendor.bundle.js')
    ],
    resolve: {
        alias: {
            react: "/home/2016geek/react-community/node_modules/react/"
        }
    }


}