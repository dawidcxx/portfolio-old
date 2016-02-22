var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rucksack = require('rucksack-css');
var HtmlPlugin = require('html-webpack-plugin');

var htmlMinifierConfig = {
  removeComments: true,
  collapseWhitespace: true
};

module.exports = {
  
  entry: './src/js/index.js',
  
  output: {
    path: './public',
    publicPath: "/",
    filename: 'bundle.js'
  },
    
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
      }
    ]
  },
   
  postcss: function() {
    return [ rucksack({ autoprefixer: true }) ];
  },
  
  plugins: [
    new HtmlPlugin({template: './src/index.html', minify: htmlMinifierConfig}),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
  
};