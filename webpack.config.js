var path = require("path");
module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "",
    filename: "bundle.js"
  }
};
