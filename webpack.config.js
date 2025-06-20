const path = require('node:path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    stat: './src/post.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
}