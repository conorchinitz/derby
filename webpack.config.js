const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
    proxy: {
      '/': 'http://localhost:3000',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Derby | A Game Database for Santorini',
      template: './src/index.html',
      meta: { 'viewport': 'width=device-width, initial-scale=1' },
      favicon: './favicon.ico',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  module : {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use : {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png|\.webp|\.ico/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};