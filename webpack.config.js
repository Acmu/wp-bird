const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.ts',
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
  module: {
    rules: [
      {
        use: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'less-loader'],
        resource: {
          test: /\.less$/,
          exclude: /node_modules/,
        },
        issuer: {
          test: /\.ts$/,
          include: /src/,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    // 自动打开浏览器网页
    // open: true,
  },
};
