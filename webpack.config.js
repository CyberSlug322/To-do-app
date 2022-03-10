const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");


module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
    mode:"development",
    plugins: [
        
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          title: 'Caching',
          template:'./src/index.html'
        }),
        new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg|jpg)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        threshold: 0,
        minRatio: Infinity,
        deleteOriginalAssets: false,
      }),],
    module: {
        
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    ]
            },   
            {
              test: /\.jsx$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
              }
              
            },
        ]
    },
    mode: 'production',
    entry: {
        main: ['@babel/polyfill','./src/index.jsx'], 
      },
    output: {
        filename: '[name].[contenthash].js',
        path: __dirname + '/dist',
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    devtool: "source-map",
};

