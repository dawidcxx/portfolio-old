var defaults = require('./webpack.common.js');
var extend = require('merge');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');


module.exports = extend(defaults, {
  devtool: 'source-map',
  module: {
    loaders: defaults.module.loaders.concat([
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      }
    ])
  },
  plugins: defaults.plugins.concat([
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __PROD__: true,
      __DEV__: false
    })
  ])
});