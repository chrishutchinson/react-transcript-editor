import { configure } from "@storybook/react";

const packages = require.context("../packages/", true, /.stories.js$/);

configure(() => {
  packages.keys().forEach(filename => packages(filename));
}, module);
