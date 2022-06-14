const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack configuration settings
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    port: 5002,
    open: true,
    hot: true,
  },
  // loaders
  module: {
    rules: [
      // css files
      {
        test: /.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      // js for babel rules
      {
        test: /.js$/i,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Document",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
