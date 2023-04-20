const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/fragment/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'fragment',
            filename: 'remoteEntry.js',
            exposes: {
                './fragmentApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
    ],
}

module.exports = merge(commonConfig, prodConfig)
