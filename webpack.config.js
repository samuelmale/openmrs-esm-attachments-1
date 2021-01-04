const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { peerDependencies } = require('./package.json');

module.exports = env => ({
  entry: [path.resolve(__dirname, 'src/set-public-path.ts'), path.resolve(__dirname, 'src/index.ts')],
  output: {
    filename: 'openmrs-esm-attachments.js',
    libraryTarget: 'system',
    path: path.resolve(__dirname, 'dist'),
    jsonpFunction: 'webpackJsonp_openmrs_esm_attachments',
  },
  module: {
    rules: [
      {
        parser: {
          system: false,
        },
      },
      {
        test: /\.m?(js|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: resourcePath => {
                  if (
                    /.*react-html5-camera-photo\/build\/css\/index.css/i.test(resourcePath) ||
                    /styles.css$/i.test(resourcePath)
                  ) {
                    return 'global';
                  }
                  return 'local';
                },
                localIdentName: '#esm-attachments__[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  devtool: 'sourcemap',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    disableHostCheck: true,
  },
  externals: Object.keys(peerDependencies),
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: env && env.analyze ? 'server' : 'disabled',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
});
