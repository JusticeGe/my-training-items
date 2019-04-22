const path = require('path')

module.exports = {
  // 环境
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          limit: 2018
        }
      }]
    }, {
      test: /\.(css|scss)$/,
      use: [
        'style-loader', 'css-loader', 'sass-loader', 'postcss-loader'
      ]
    }]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
}