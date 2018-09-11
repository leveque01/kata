module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/main',
  ],
  output: {
    path: `${__dirname}/dist/`,
    filename: 'main.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
            ],
          },
        },
      },
    ],
  },
};
