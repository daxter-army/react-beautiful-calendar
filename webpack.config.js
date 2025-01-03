const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "./src/Rbc.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        //? match all files with extension .css
        test: /\.css$/,
        use: [
          // this will create a style tag in our index page, containing all the styles
          "style-loader",
          "css-loader",
        ],
      },
      {
        //? match all files with these extensions for images
        test: /\.(png|jpg|jpeg|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
