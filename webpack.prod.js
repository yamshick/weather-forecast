const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  devtool: "source-map",
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: path.resolve(__dirname, "./src/assets/icons/weather_sunset.svg"),
    }),
  ],
});
