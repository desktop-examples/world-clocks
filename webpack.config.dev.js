const merge = require("webpack-merge");
const config = require("./webpack.common.js");

module.exports = merge({
    devtool: "source-map",
    devServer: {
        compress: true,
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        watchContentBase: true,
    },
    mode: "development",
    output: {
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    },
}, config);
