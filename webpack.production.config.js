var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    context: path.join(__dirname, "src"),
    entry: [
        "./main.js",
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"],
            },
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, "node_modules"),
        ],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
          }
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "views/index.pug",
            title: "Markdown Viewer"
        }),
    ]
};

module.exports = config;
