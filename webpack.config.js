const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWepackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico'
});

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 5000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [htmlWepackPlugin]
};
