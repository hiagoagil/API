const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1/'
  },
});
