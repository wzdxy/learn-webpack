var webpack = require('webpack')

module.exports = {
  entry: {
    bundle1:'./main.js',
    bundle2:'./main2.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
    ]
  },
  plugins:[
      new webpack.BannerPlugin('This file is created by Z')
  ],

}