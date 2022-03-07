const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js"
     },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(png|jpe?g|gif|jpg|wav|mp3)$/i,
                use: ["file-loader"],

            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'mainhistoria.html',
            template: 'src/pages/pageMain/mainhistoria.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'Sur1.html',
            template: 'src/pages/pagesur/Sur1.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'sur2.html',
            template: 'src/pages/pagesur/sur2.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'southed.html',
            template: 'src/pages/pagesur/southed.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'oeste1.html',
            template: 'src/pages/pageoeste/oeste1.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'oeste2.html',
            template: 'src/pages/pageoeste/oeste2.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'oeste3D.html',
            template: 'src/pages/pageoeste/oeste3D.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'oeste3I.html',
            template: 'src/pages/pageoeste/oeste3I.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'sotano1.html',
            template: 'src/pages/pagesotano/sotano1.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'thanks.html',
            template: 'src/pages/pagethanks/thanks.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'hut.html',
            template: 'src/pages/pageHut/hut.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'ending.html',
            template: 'src/pages/pageEnding/ending.html',
            chunks: []
        }),
        new CleanWebpackPlugin()
    ]
};