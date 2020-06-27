module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/c.js',
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
  },
  mode: 'development',
};
