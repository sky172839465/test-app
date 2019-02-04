exports.config = {
  name: 'test-app',
  tests: '../src/__e2e__/src/**/**.js',
  output: '../report',
  helpers: {
    EyesHelper: { require: './helper/eyesHelper.js' },
    WebDriverIO: {
      url: 'http://localhost:3000',
      browser: 'chrome',
      smartWait: 5000,
      waitForTimeout: 300000,
      timeouts: {
        script: 100000,
        'page load': 100000
      }
    }
  },
  include: {
    I: './actor/steps_file.js'
  },
  bootstrap: false,
  coloredLogs: true
}
