const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, //* 配置解析的文件后缀名
        exclude: /node_modules/, //* 不做处理的文件夹
        use: {
          //* 应用的解析模块，可以是一个数组，里面的值可以为模块名字符串，模块对象
          loader: 'babel-loader', //* 使用 babel-loader进行编译 */
          options: {
            //* 视具体来定，可以是一个字符串或者对象，值会传递到loader里面，为loader选项 */
            presets: [['@babel/preset-env', {}], ['@babel/preset-react']] //* 环境
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000, //运行的端口
    hot: true
  }
};
