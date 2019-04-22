const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|jpeg|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          limit: 204800,
          outputPath: 'images/'
        }
      }
    }, {
      test: /\.css$/,
      use: []
    }]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'gc')
  }
}