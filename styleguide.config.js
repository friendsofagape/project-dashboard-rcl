const path = require("path");
const { name, version, repository } = require("./package.json");
const { styles, theme } = require("./styleguide.styles");

module.exports = {
  components: "src/components/**/[A-Z]*.{js,jsx,tsx}",
  title: `${name} v${version}`,
  ribbon: {
    url: repository.url,
    text: "View on GitHub",
  },
  styles,
  theme,
  version,
  require: [path.join(__dirname, "./dist/styles.css")],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /.\.md$/, // look for .md files in component folder
          type: "javascript/auto", // Tell webpack to interpret the result from examples-loader as JavaScript
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
};
