const path = require('path');

module.exports = {

  mode: 'development',  // are we in development or producation?
  entry: './src',       // Where are the source files to build?

  // Where to put the build output files:
  output: {
    path: path.join(__dirname, 'build'),  // i.e. current-folder/build
    filename: 'bundle.js'
  },

  // How to actually build the source files
  module: {
    rules: [
      {
        test: /\.jsx?$/i, // ? for 0 or 1 occurence, $ means occurs in the end, 'i' for case sensitive
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['transform-react-jsx'],
            ['transform-class-properties']
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }

};
