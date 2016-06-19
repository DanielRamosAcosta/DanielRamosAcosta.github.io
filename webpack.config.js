var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var path = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

let commonPlugins = [
  new ExtractTextPlugin('main.css'),
  new HtmlWebpackPlugin({template: 'index.html'})
]

module.exports = {
  context: path.join(__dirname, '/src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './scripts/client.js',
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.js'
  },
  plugins: debug ? [].concat(commonPlugins) : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ].concat(commonPlugins),
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    root: [path.join(__dirname, './src')]
  }
}
