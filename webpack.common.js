const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = {
    bail: true,
    entry: {
        main: "./src/ts/index.tsx",
    },
    output: {
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "[name].[chunkhash:8].js",
        path: path.join(__dirname, "public"),
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                enforce: "pre",
                use: [{
                    loader: "tslint-loader",
                    options: {
                        emitErrors: true,
                        failOnHint: true,
                        typeCheck: true,
                        tsConfigFile: "tsconfig.json"
                    }
                }]
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: "source-map-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(css)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => [autoprefixer()]
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|woff2?|ttf|eot|ico|mp4)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash:8].[ext]"
                    }
                }]
            }
        ]
    },
    node: {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
        runtimeChunk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{
            from: 'src/data/manifest.json'
        }]),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.NormalModuleReplacementPlugin(
            /data[\\\/]packed[\\\/]latest.json$/,
            path.join(__dirname, "/src/data/moment-tz.json")
        ),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: '[name].[contenthash:8].chunk.css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: require("html-webpack-template"),
            appMountId: "app",
            bodyHtmlSnippet: "<noscript>You need to enable JavaScript to run this app!</noscript>",
            lang: "en",
            links: [{
                href: "/desktop/examples/world-clocks/manifest.json",
                rel: "manifest"
            }],
            meta: [{
                "http-equiv": "Content-Security-Policy",
                content: "default-src 'self'; object-src 'none'; style-src 'self' 'unsafe-inline'"
            }, {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,minimum-scale=1'
            }, {
                name: 'description',
                content: 'World Clocks'
            }, {
                name: 'theme-color',
                content: '#1d1d26'
            }],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            mobile: false,
            title: "World Clocks"
        }),
    ]
};
