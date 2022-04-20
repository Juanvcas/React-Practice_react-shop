const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.[hash].js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js",".jsx"],
        alias: {
            "@components": path.resolve(__dirname,"src/components/"),
            "@containers": path.resolve(__dirname,"src/containers/"),
            "@pages": path.resolve(__dirname,"src/pages/"),
            "@styles": path.resolve(__dirname,"src/styles/"),
            "@svgAssets": path.resolve(__dirname,"src/assets/svg/")
        }
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                type: "asset"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname,"dist"),
            watch: true
        },
        watchFiles: ["./**"],
        historyApiFallback: true,
        compress: true,
        port: 8080,
        open: true
    }
}