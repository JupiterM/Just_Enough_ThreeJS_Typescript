const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {   test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Just Enough ThreeJS-Typescript.'
    })],
};