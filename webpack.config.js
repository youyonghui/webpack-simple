const path = require('path');

// 引入 HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js', // 单个入口文件
    // 多个入口文件
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
    devtool: 'inline-source-map',
    devServer: {
             contentBase: './dist'
           },
    output: {
        // filename: 'bundle.js',
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: '插件测试',
            template:"./src/index.html"
        })
    ],
    module: {
        // rules 规则
        rules: [
            {
                test: /\.css$/, // 找到css文件
                use: [ // 为了引入css，配置这两个加载器
                    "style-loader",
                    "css-loader"
                ]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};