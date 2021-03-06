module.exports = function(env) {
    return require(`./webpack.${env}.js`)
}
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');
//
// module.exports = {
//     entry: {
//         app: './src/index.js',
//     },
//     devtool: 'inline-source-map',
//     devServer: {
//         contentBase: './dist',
//         hot: true
//     },
//     plugins: [
//         new CleanWebpackPlugin(['dist']),
//         new HtmlWebpackPlugin({
//             title: 'Output Management'
//         }),
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
//         }),
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': JSON.stringify('production')
//         })
//     ],
//     output: {
//         filename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: [
//                     'file-loader'
//                 ]
//             }
//         ]
//     },
//
// };