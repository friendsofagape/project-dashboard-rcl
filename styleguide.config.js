const path = require("path");
const { name, version, repository } = require("./package.json");
const { styles, theme } = require("./styleguide.styles");

let sections = [
  {
    name: "README",
    content: "README.md",
  },
  {
    name: "Components",
    content: "src/components/components/_readme.md",
    components: () => {
      const componentNames = [
        "Badge",
        "Button",
        "CardLayout",
        "HeadBar",
        "Label",
        "MultiLineChart",
        "PieProgress",
        "SemiDonutChart",
        "StackedBarChart",
        "Table",
        "TableExtended",
      ];
      return componentNames.map((componentName) => {
        return path.resolve(
          __dirname,
          `src/components/components/${componentName}`,
          `${componentName}.js`
        );
      });
    },
  },
  {
    name: "DashBoards Widgets",
    content: "src/components/widgets/_readme.md",
    components: () => {
      const componentNames = [
        "OverViewCard",
        "VerificationBarCard",
        "ProgressRateLineChart",
        "RemainingStatusCard",
        "ErrorStatusCard",
      ];
      return componentNames.map((componentName) => {
        return path.resolve(
          __dirname,
          `src/components/widgets/${componentName}`,
          `${componentName}.js`
        );
      });
    },
  },
];

module.exports = {
  components: "src/components/**/[A-Z]*.{js,jsx,tsx}",
  title: `ProjectDashboardRcl v${version}`,
  ribbon: {
    url: repository.url,
    text: "View on GitHub",
  },
  styles,
  theme,
  version,
  require: [path.join(__dirname, "./dist/styles.css")],
  usageMode: "expand",
  exampleMode: "expand",
  pagePerSection: true,
  sections,
  moduleAliases: {
    "project-dashboard-rcl": path.resolve(__dirname, "src"),
  },
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
