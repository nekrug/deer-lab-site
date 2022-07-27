const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './client/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    static: {
      // match the output path
      directory: path.resolve(__dirname, './dist/'),
      // match the output 'publicPath'
      publicPath: '/dist',
    },
    proxy: {
      '/research': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/research/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          },
        },
      },
      {
        test: /\.scss$/, 
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};