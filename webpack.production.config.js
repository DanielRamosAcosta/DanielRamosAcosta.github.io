'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  debug: true,
  devtool: 'inline-sourcemap',
  entry: [
    path.join(__dirname, 'app/main.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs',
            'babel-polyfill',
            'transform-class-properties',
            'transform-decorators-legacy'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.sass$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader'
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app/styles")]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.sass', '.csv', '.jpg'],
    root: [path.join(__dirname, './app')],
    alias: {
      styles: path.resolve(__dirname, 'app', 'styles'),
      components: path.resolve(__dirname, 'app', 'components'),
      reducers: path.resolve(__dirname, 'app', 'reducers'),
      data: path.resolve(__dirname, 'app', 'data'),
      images: path.resolve(__dirname, 'app', 'images'),
    }
  },
  csv: {
    dynamicTyping: true,
    header: true
  }
}
