const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
