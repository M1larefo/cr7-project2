const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CR7 Project',
      template: './src/index.html', // Make sure this file exists
      filename: 'cr7.html' // Explicit output filename
    })
  ]
};