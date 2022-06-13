const webpack = require('webpack');

module.exports = function (context, options) {
    return {
        name: 'redoc-compatibility-plugin',
        configureWebpack(config, isServer, utils) {
            config.module.rules.push({
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            })
            return {
                plugins: [
                    new webpack.ProvidePlugin({
                        Buffer: ['buffer', 'Buffer'],
                    }),
                    new webpack.ProvidePlugin({
                        process: 'process/browser',
                    }),
                ],
            };
        },
    };
};
