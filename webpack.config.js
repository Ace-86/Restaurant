const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

module: {
  rules: [
    {
      test: /\.css$/i,
      use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: 'asset/resource',
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images/',
          name: '[name].[ext]',
          url: true,
          publicPath: './assets/images/'
        }
      },
    ],
  },
};