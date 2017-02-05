var path = require("path");
var webpack = require("webpack");

var config = {
    context: path.join(__dirname, "src"),
    entry: [
        "./main.js",
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build/",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel"],
            },
            {
                test: /\.sass$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolveLoader: {
        root: [
            path.join(__dirname, "node_modules"),
        ],
    },
    resolve: {
        root: [
            path.join(__dirname, "node_modules"),
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;
