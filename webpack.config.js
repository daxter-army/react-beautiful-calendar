const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externalsPresets: {node: true},
    externals: [nodeExternals()],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                //? match all files with extension .css
                test: /\.css$/,
                use: [
                    // this will create a style tag in our index page, containing all the styles
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}