const path = require('path');

const PATHS = {
  SRC: path.join(__dirname, 'src')
};

const webpackConfig = {
  entry: ['./src/index.jsx'],
  devtool: 'source-map',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ],
        include: [PATHS.SRC],
        enforce: 'pre'
      },

      {
        test: /\.jsx?$/,

        include: [path.resolve('src')],
        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },

      {
        test: /\.(woff|eot|ttf|woff2)$/,
        use: {
          loader: 'url-loader'
        }
      },

      {
        test: /\.(jpg|gif|png|svg)$/,
        use: {
          loader: 'file-loader?name=[name].[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

module.exports = webpackConfig;
