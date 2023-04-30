const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  //entry: "./src/app.js",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

module: {
  rules: [
    {
      test: /\.(j|t)s$/, //.jsもしくは.tsを対象とする
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    },
  ];
}
