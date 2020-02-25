const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin')


module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer:{
        contentBase:'./dist',
        
    },
    plugins:[

        new HtmlWebpackPLugin({
            filename:'index.html',
            template:'./src/index.html'

        })
    ], 

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}