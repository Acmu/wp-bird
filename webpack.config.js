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
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1500,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
