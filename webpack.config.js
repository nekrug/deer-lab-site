const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // entry point of our app
    './client/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  // mode: 'development',
  mode: process.env.NODE_ENV,
  devServer: {
    host: 'localhost',
    port: 8080,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    // historyApiFallback: true,
    // watchContentBase: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, './dist/'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    proxy: {
      '/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/assets/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
};