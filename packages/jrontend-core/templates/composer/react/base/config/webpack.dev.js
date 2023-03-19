const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: {{PORT}},
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: '{{CLIENT_NAME}}',
            remotes: {
                marketing:
                    '{{CLIENT_NAME}}@http://localhost:{{PORT}}/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
