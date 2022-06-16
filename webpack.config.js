const MiniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const USE_MINI = process.env.MINI === '1';

const plugins = [new HtmlWebpackPlugin()];

if (USE_MINI) {
  plugins.push(
    new MiniCss({
      experimentalUseImportModule: true,
    })
  );
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          USE_MINI ? MiniCss.loader : 'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //   },
  // },
  devtool: false,
};
