var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var rucksack = require('rucksack-css');


var moduleLoaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel', 
    query: {
      presets: ['es2015']
    }
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]
  },
  { 
    test: /\.mp4/,
    loader: 'file' 
  },
  {
    test: /\.html$/,
    loader: 'html'
  }
];

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', favicon: './src/media/favicon.ico' }),
  ],
  module: {
    loaders: moduleLoaders
  },
  postcss: function() {
    return [ rucksack({ autoprefixer: true }) ];
  },
};