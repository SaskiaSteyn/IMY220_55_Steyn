const path = require("path");

module.exports = {
    entry: "./frontend/src/index.js", 
    output: {
        path: path.resolve(__dirname, "frontend/public"), 
        filename: "bundle.js", 
        publicPath: "/", 
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader", 
                ],
            },
            {
                test: /\.(png|jpe?g|gif|ico|svg)$/,
                include: path.resolve(__dirname, "frontend/public/assets"), 
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]", 
                            outputPath: "assets/", 
                            publicPath: "/assets/", 
                        },
                    },
                ],
            },
        ],
    },
};
