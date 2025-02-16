
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://platform.rekaz.io',
        experimentalWebKitSupport: true,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 60000,
        viewportHeight: 1200,
        viewportWidth: 2500,
        experimentalStudio: true,
        specPattern: '**/*.feature',
        setupNodeEvents,
    }
});
    