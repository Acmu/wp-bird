const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/c.js',
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
  },
  mode: 'development',
  watchOptions: {
    aggregateTimeout: 600,
    // 轮询间隔
    poll: 1500,
    // 忽略监听这些文件
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    // 自动打开浏览器网页
    open: true,
  },
};
