var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname,'/build'),
        filename : 'index_bundle.js'
    },
    module : {
        rules : [
            {
                // test : /\.(js|jsx)$/,
                test : /\.jsx?$/, // character before ? is x that is optional means this will work for both js & 
                exclude : /node_modules/,
                use: ['babel-loader'],
            },
            {
                // test: /\.css$/,
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader'],
            },
            {
                test : /\.(jpe?g|gif|png|svg)$/,
                use : ['file-loader']
                // loader: "url-loader?name=/images/[name].[ext]"
            }
        ]
    },
    /** To make router working add this */
    devServer: {
        historyApiFallback: true,
    },
    // resolve: {
    //     extensions: ['*', '.js', '.jsx','.css']
    //   },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        })
    ]
}