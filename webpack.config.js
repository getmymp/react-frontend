var path = require('path');
var webpack = require('webpack');

var config = {
  debug: true,
  devtool: 'cheap-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
     'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
     'src/index.js' // Your appʼs entry point
  ],

  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loaders: ['react-hot','babel'], // The module to load. "babel" is short for "babel-loader"
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
      root: path.resolve(__dirname),
      alias: {
         config: path.join(__dirname, 'config', process.env.NODE_ENV),
       },
      extensions: ['', '.js'],
    },
};

module.exports = config;
