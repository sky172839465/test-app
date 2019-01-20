exports.config = {
  name: 'test-app',
  tests: '../src/__e2e__/src/**/**.js',
  output: '../report',
  helpers: {
    WebDriverIO: {
      url: 'http://localhost:3000',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: false,
  coloredLogs: true,
  timeout: 10000,
  smartWait: true
}
