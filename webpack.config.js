const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'public/client/src'),
  output: {
    path: path.resolve(__dirname, 'public/client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CompressionPlugin(),
  ],
  mode: 'production',
  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
};
