'use strict';

let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [`${__dirname}/src/main.js`],
  output: {
    path: `${__dirname}/dist`,
    filename: 'all.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!autoprefixer!sass?sourceMap')
      },
      {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9#-]+)?$/,
        loader: 'file-loader?name=[name]-[sha512:hash:base64:7].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('all.css', {
      allChunks: true
    })
  ]
};
