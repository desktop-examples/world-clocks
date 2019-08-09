const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.common.js");

module.exports = merge({
    devtool: "source-map",
    devServer: {
        compress: true,
        contentBase: "./docs",
        historyApiFallback: true,
        inline: true,
        watchContentBase: true,
    },
    mode: "development",
    output: {
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: "development",
        })
    ]
}, config);
