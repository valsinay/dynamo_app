import { defineConfig } from "cypress";
import { cypressBrowserPermissionsPlugin } from "cypress-browser-permissions";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: "./webpack.config.ts",
    },
    env: {
      browserPermissions: {
        notifications: "allow",
        geolocation: "block",
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config);
      return config;
    },
  },
});
