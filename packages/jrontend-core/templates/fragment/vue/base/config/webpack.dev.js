const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:{{PORT}}/',
    },
    devServer: {
        port: {{PORT}},
        historyApiFallback: {
            index: 'index.html',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: '{{CLIENT_NAME}}',
            filename: 'remoteEntry.js',
            exposes: {
                './{{CLIENT_NAME}}App': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
