const path = require('path');
const HWPP = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/scripts/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    modules: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HWPP({
           title: 'WaToDo - Get It Done',
           filename: 'index.html',
           template: '.src/templates/index.html', 
        }),
    ],
};