const path = require('path');

// console.log("-----打印配置----------");
// console.log(path);// 路径
// console.log(__dirname);// 当前目录下的文件名
// console.log(__filename) // 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
// console.log("-----打印配置完毕----------");

module.exports = {
    // entry: './src/index.js', // 单个入口文件
    // 多个入口文件
    entry:{
        app:"./src/index.js",
        print:"./src/print.js"
    },
    output: {
        // filename: 'bundle.js',
        filename:"[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
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