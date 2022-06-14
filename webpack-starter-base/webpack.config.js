const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack configuation settings
module.exports = {
  mode: 'development', // or 'production'
  entry: {
    main: path.resolve(__dirname, 'src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    clean: true // every time we run build webpack cleans the current dist
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 5002,
    open: true,
    hot: true,
    // watchContentBase: true
  },
  // loaders 
  // turn non-javascript files into modules and then they can be imported)
  // html, css, svg files
  module: {
    rules: [
      // css and sass files
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // images and static resources
      {
        test: /\.(svg|ico|png|jpeg|gif|jpeg)$/, 
        type: 'asset/resource'
      },
      // js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ]
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Webpack Page',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),
  ],
}