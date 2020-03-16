const path = require('path')

module.exports = {
  entry: {
    index: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // externals: {
  //   'react': 'React'
  // },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  }
}