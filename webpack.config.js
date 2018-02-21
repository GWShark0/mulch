const { resolve } = require('path');

const PATHS = {
  dist: resolve(__dirname, 'dist'),
  src: resolve(__dirname, 'src'),
};

module.exports = {
  entry: PATHS.src,
  output: {
    path: PATHS.dist,
    filename: 'mulch.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [PATHS.src,],
      },
    ],
  },
};
