exports.config = {
  name: 'test-app',
  tests: '../src/__e2e__/src/**/**.js',
  output: '../report',
  helpers: {
    // EyesHelper: { require: './helper/eyesHelper.js' },
    WebDriver: {
      url: 'http://localhost:3000',
      browser: 'chrome',
      waitForTimeout: 300000
    }
  },
  include: {
    I: './actor/steps_file.js'
  },
  bootstrap: false,
  coloredLogs: true
}
