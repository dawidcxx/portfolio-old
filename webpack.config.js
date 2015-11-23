var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rucksack = require('rucksack-css');

module.exports = {
  
  entry: './src/index.js',
  
  output: {
    path: './public',
    publicPath: "public/",
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
      }
    ]
  },
   
  postcss: function() {
    return [ rucksack({ autoprefixer: true }) ];
  },
  
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
  
};