const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        {
          test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
          loaders: ['babel'], // The module to load. "babel" is short for "babel-loader"
          exclude: /node_modules/
        }
      ]
  }
}
