const { defineConfig } = require("cypress");
const fs = require('fs-extra')//node.js module which helps to read data from json
const path = require('path') //node.js module which helps to work with file paths

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  // env: {
  //   username: 'testUser@xoi.io.com',
  //   password: 'nonQwertyPass',
  //   url:'https://xoi.io/'
  // },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || 'test' //test or stage envs
      return getConfigurationByFile(file)
    },
    // baseUrl: 'https://xoi.io/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
});

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}
