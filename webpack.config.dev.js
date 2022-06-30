const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css|scss|sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8080,
    client: {
      logging: 'none',
    },
    hot: true,
    historyApiFallback: true
  },
  mode: 'development',
  devtool: 'inline-source-map'
})