const webpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: 'true',
              plugins: loader => [
                require('autoprefixer')({
                  browsers: [
                    "last 2 versions",
                    "> 1%"
                  ]
                })
              ]
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:5].css',
      chunkFilename: 'css/[id]-[hash:5].css'
    })
  ],
  optimization: {
    minimize: [
      new OptimizeCssAssetsWebpackPlugin({}),
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  }
})