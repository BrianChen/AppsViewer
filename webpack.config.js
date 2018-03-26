var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/apps-viewer.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015","react"]
        }
      },
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ]
  }
}
