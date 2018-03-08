// eslint-disable-next-line
const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dist/public/assets')
const APP_DIR = path.resolve(__dirname, 'client/app')

const config = {
  mode: 'development',
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
    alias: {
      '@assets': path.join(__dirname, 'client/assets'),
      '@components': path.join(__dirname, 'client/app/components'),
      '@store': path.join(__dirname, 'client/app/store'),
      '@reducers': path.join(__dirname, 'client/app/store/reducers'),
      '@actions': path.join(__dirname, 'client/app/store/actions'),
      '@sagas': path.join(__dirname, 'client/app/sagas'),
    }
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}

module.exports = config
