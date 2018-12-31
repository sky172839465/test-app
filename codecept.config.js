exports.config = {
  tests: './src/__e2e__/src/**/**.js',
  timeout: 10000,
  output: './output',
  helpers: {
    WebDriverIO: {
      url: process.profile || 'http://localhost:3000',
      user: 'YOUR_BROWSERSTACK_USER',
      key: 'YOUR_BROWSERSTACK_KEY',
      browser: 'chrome'
    }
  },
  bootstrap: false,
  name: 'test-app'
}
