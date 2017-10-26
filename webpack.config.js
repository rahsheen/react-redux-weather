const path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './'
  }
};
