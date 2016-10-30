'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// Import the plugin:
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  debug: true,
  devtool: 'inline-sourcemap',
  entry: [
    path.join(__dirname, 'app/main.jsx')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('main.css'),
    new webpack.DefinePlugin({
      PRODUCTION: false,
      DEVELOPMENT: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new DashboardPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["react", "es2015", "stage-0"],
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
        loader: ExtractTextPlugin.extract('style-loader', [
          'css-loader',
          'postcss-loader',
          'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './app')
        ].join('!'))
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
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
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.sass', '.csv'],
    root: [path.join(__dirname, './app')],
    alias: {
      styles: path.resolve(__dirname, 'app', 'styles'),
      components: path.resolve(__dirname, 'app', 'components'),
      reducers: path.resolve(__dirname, 'app', 'reducers'),
      data: path.resolve(__dirname, 'app', 'data')
    }
  },
  devServer: {
    inline: true,
    hot: true
  },
  csv: {
    dynamicTyping: true,
    header: true
  }
};
