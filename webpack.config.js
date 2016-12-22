const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8008,
        proxy: {
            '/seopapi/*': {
                target: 'http://www.jxseop.com',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'/seopapi/' : ''}
            }
        }
    },
    plugins: [HTMLWebpackPluginConfig],
};