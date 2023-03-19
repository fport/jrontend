const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/{{CLIENT_NAME}}/latest/',
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
    ],
}

module.exports = merge(commonConfig, prodConfig)
