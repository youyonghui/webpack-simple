const path = require('path');

// console.log("-----打印配置----------");
// console.log(path);// 路径
// console.log(__dirname);// 当前目录下的文件名
// console.log(__filename) // 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
// console.log("-----打印配置完毕----------");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};