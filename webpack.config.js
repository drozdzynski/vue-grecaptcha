const path = require('path')
const webpack = require('webpack')

console.log('v: ' + require('./package.json').version)

module.exports = {
  entry: './src/install.js',
  output: {
    filename: 'vue-grecaptcha.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: [path.join(__dirname, 'example'), path.join(__dirname, 'dist')],
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        '__VERSION__': JSON.stringify(require('./package.json').version)
      }
    })
  ]
}
